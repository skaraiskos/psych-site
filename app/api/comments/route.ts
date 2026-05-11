import { Resend } from "resend";
import { NextResponse } from "next/server";

import { ratelimit } from "~/lib/ratelimit";
import { sanitize } from "~/lib/sanitize";
import { emailRegex } from "~/lib/emailRegex";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    /*ratelimit for bot attacks*/
    const forwardedFor = req.headers.get("x-forwarded-for");
    const ip = forwardedFor
      ? forwardedFor.split(",")[0].trim()
      : "anonymous";

    //cheap bot filter BEFORE Upstash
    const userAgent = req.headers.get("user-agent") || "";

    const isObviousBot =
      !userAgent ||
      userAgent.length < 10 ||
      /curl|wget|python|scrapy|postman|httpclient/i.test(userAgent);

    if (isObviousBot) {
      return NextResponse.json(
        { success: false, error: "Blocked" },
        { status: 403 }
      );
    }

    const body = await req.json();

    //honeypot FIRST (cheap exit)
    if (body.company) {
      return NextResponse.json({ success: true }); // silently ignore bot
    }

    //bots hammering, refresh spam, script loops
    const globalForRateLimit = globalThis as typeof globalThis & {
      __contactHits?: Map<string, number>;
    };

    const recentHits = globalForRateLimit.__contactHits || new Map();

    globalForRateLimit.__contactHits = recentHits;

    const now = Date.now();
    const lastHit = recentHits.get(ip);

    if (lastHit && now - lastHit < 2000) {
      return NextResponse.json(
        { success: false, error: "Too fast" },
        { status: 429 }
      );
    }

    recentHits.set(ip, now);

    //call the ratelimiter after the checks (upstash)
    const { success } = await ratelimit.limit(ip);

    if (!success) {
      return NextResponse.json(
        { success: false, error: "Πάρα πολλά αιτήματα. Δοκιμάστε ξανά." },
        { status: 429 }
      );
    }

    //validation checks
    const name = String(body.name || "").trim();
    const mail = String(body.mail || "").trim();
    const textarea = String(body.textarea || "").trim();

    // strict validation (no silent fails)
    if (!name || !mail || !textarea) {
      return NextResponse.json({ success: false, error: "Λείπουν πεδία" }, { status: 400 });
    }

    if (name.length > 100 || textarea.length > 2000) {
      return NextResponse.json({ success: false, error: "Input too long" }, { status: 400 });
    }

    if (!emailRegex.test(mail)) {
      return NextResponse.json({ success: false, error: "Μη έγκυρο email." }, { status: 400 });
    }

    if (!process.env.CONTACT_TO_EMAIL) {
      throw new Error("Missing CONTACT_TO_EMAIL env variable");
    }

    //send mails
    const cleanName = sanitize(name);
    const cleanMessage = sanitize(textarea);
    const cleanMail = sanitize(mail);

    const email = await resend.emails.send({
      from: "Σταυρούλα Μαυρογόνατου <info@stavroulamavrogonatou.gr>",
      to: process.env.CONTACT_TO_EMAIL,
      subject: "Νέο σχόλιο από την ιστοσελίδα",
      replyTo: cleanMail,
      text: `
        Όνομα: ${cleanName}
        Email: ${cleanMail}

        Σχόλιο:
        ${cleanMessage}
      `,
    });

    await new Promise((r) => setTimeout(r, 300));

    if (!email?.data?.id) {
      return NextResponse.json(
        { success: false, error: "Το email δεν στάλθηκε" },
        { status: 500 }
      );
    } else {
      const autoReply = await resend.emails.send({
        from: "Σταυρούλα Μαυρογόνατου <info@stavroulamavrogonatou.gr>",
        to: cleanMail,
        subject: "Λάβαμε το σχόλιο σας",
        replyTo: process.env.CONTACT_TO_EMAIL,
        text:  `
          Γεια σας,

          Ευχαριστώ που μοιραστήκατε τις σκέψεις σας μαζί μου.

          Το σχόλιο σας έχει ληφθεί και θα το διαβάσω σύντομα. Εκτιμώ πραγματικά την επικοινωνία σας.

          Να είστε καλά,  
          Μαυρογόνατου Σταυρούλα
          `,
      });

      if (!autoReply?.data?.id) {
        console.error("Auto-reply failed:", autoReply);
      }
    }

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      { success: false, error: "Server error" },
      { status: 500 }
    );
  }
}
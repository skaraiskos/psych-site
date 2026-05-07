"use client";

import Form from "./Form";

export default function CommentFormWrapper(props) {
  return (
    <Form
      {...props}
      onSubmit={async (data) => {
        const res = await fetch("/api/comments", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });

        return res.json();
      }}
    />
  );
}
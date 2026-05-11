import type { Metadata } from 'next';

import fs from 'fs';
import path from 'path';
import md from 'markdown-it';

export const metadata: Metadata = {
  title: 'Cookies',
};

const Page = () => {
  const filePath = path.join(process.cwd(), 'src/content/cookies/cookies.md');
  const fileContent = fs.readFileSync(filePath, 'utf8');

  return (
    <div
      className="my-20 prose-md prose-headings:font-heading prose-headings:leading-tighter container prose prose-md mx-auto mt-8 max-w-5xl px-6 prose-headings:font-bold prose-headings:tracking-tighter prose-a:text-primary-600 prose-img:rounded-md prose-img:shadow-lg sm:px-6 lg:prose-md"
      dangerouslySetInnerHTML={{
        __html: md({
          html: true,
        }).render(fileContent),
      }}
    />
  );
};

export default Page;

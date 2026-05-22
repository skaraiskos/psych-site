import type { Metadata } from 'next';

import { SITE } from '~/config.js';
import { findLatestPosts } from '~/utils/posts';

import FirstPage from '~/components/widgets/FirstPage';
import Hero from '~/components/widgets/Hero';
import Purpose from '~/components/widgets/Purpose';
import Features from '~/components/widgets/Features';
import Articles from '~/components/widgets/Articles';
import Comments from '~/components/widgets/Comments';
import Contact from '~/components/widgets/Contact';
import InstagramSection from '~/components/widgets/InstagramSection';

import {
  purposeHome,
  heroHome,
} from '~/shared/data/pages/home.data';

export const metadata: Metadata = {
  title: SITE.title,
};

export default async function Page() {
  const { posts, total } = await findLatestPosts({
    page: 1,
    pageSize: 12,
  });

  return (
    <>
      <FirstPage />
      <Hero {...heroHome} />
      <Purpose {...purposeHome} />
      <Features />
      <Articles posts={posts} />
      <Comments />
      <Contact/>
    </>
  );
}
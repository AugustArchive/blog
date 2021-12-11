/**
 * 🌌 @noel/blog: a blog to jot down feelings, i guess.
 * Copyright (c) 2021 Noel <cutie@floofy.dev>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import { faDiscord, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { getAllPages, MarkdownDocument } from '../lib/docs';
import type { GetStaticProps } from 'next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { DateTime } from 'luxon';
import { library } from '@fortawesome/fontawesome-svg-core';
import slugify from 'slugify';
import Image from 'next/image';
import Head from 'next/head';

interface MainPageProps {
  documents: MarkdownDocument[];
}

library.add(faDiscord, faGithub, faTwitter, faCalendar);
export const getStaticProps: GetStaticProps<MainPageProps> = async () => {
  const documents = await getAllPages();
  return {
    props: {
      documents: documents.map((s) => ({
        data: {
          ...s.data,
          createdAt: s.data.createdAt.getTime(),
        },

        content: s.content,
        file: s.file,
      })),
    },
  };
};

export default function MainPage({ documents }: MainPageProps) {
  return (
    <>
      <Head>
        <title>🌌 noel's blog</title>
        <meta name="description" content="🌌 noel's blog - to jot down feelings." />
        <meta name="theme-color" content="#E2A8CA" />
        <meta property="og:description" content="🌌 welcome to noel's blog. enjoy your stay! ~ヾ(・ω・)" />
        <meta property="og:title" content="noel's blog 💜" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://b.floof.gay" />
      </Head>

      <div className="flex container mx-auto items-center justify-center  mt-6 flex-col">
        <Image src="/icon.png" width="175px" height="175px" className="avatar" draggable="false" />
        <h1 className="font-cantarell font-semibold text-xl lg:text-3xl mt-2">Noel's Blog</h1>
        <h2 className="fix-width">
          Welcome to my blog. Enjoy your stay. While you're here, might recommend reading the last 10 blog posts?
        </h2>
      </div>

      <div className="flex flex-col mx-auto container items-center justify-center mt-3">
        {documents.slice(0, 10).map((doc) => (
          <article className="blog-card" key={`article-${slugify(doc.data.title).toLowerCase()}`}>
            <div className="flex flex-col justify-center p-2 lg:p-3">
              <h2 className="text-white font-inter font-semibold text-lg lg:text-2xl">
                <a href={`/post/${slugify(doc.data.title).toLowerCase()}`}>{doc.data.title}</a>
              </h2>
            </div>

            <footer className="flex items-center p-2">
              <div>
                <FontAwesomeIcon icon={['fas', 'calendar']} color="white" />
                <span className="pl-2 text-white">
                  {DateTime.fromMillis(doc.data.createdAt, { zone: 'America/Phoenix' }).toFormat('DDD ttt')}
                </span>
              </div>
            </footer>
          </article>
        ))}
      </div>
    </>
  );
}

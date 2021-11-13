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

import type { GetStaticProps, GetStaticPaths } from 'next';
import { getAllPages, MarkdownDocument } from '../../lib/docs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';
import { DateTime } from 'luxon';
import slugify from 'slugify';
import Image from 'next/image';
import Head from 'next/head';

interface MainPageProps {
  document: MarkdownDocument | null;
}

export const getStaticProps: GetStaticProps<MainPageProps> = async ({ params }) => {
  const allDocs = await getAllPages();
  const doc = allDocs.find((bah) => slugify(bah.data.title).toLowerCase() === (params!.page as string).toLowerCase());

  return {
    props: {
      document:
        doc !== undefined
          ? {
              data: {
                ...doc.data,
                createdAt: doc.data.createdAt.getTime(),
              },

              file: doc.file,
              content: doc.content,
            }
          : null,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const docs = await getAllPages();
  return {
    paths: docs.map((s) => ({
      params: {
        page: slugify(s.data.title).toLowerCase(),
      },
    })),

    fallback: 'blocking',
  };
};

export default function MainPage({ document: doc }: MainPageProps) {
  if (doc === null) {
    const router = useRouter();

    return (
      <>
        <div className="flex items-center justify-center mx-auto container h-screen">
          <h1 className="font-jb-mono text-3xl text-black font-bold">
            Couldn't find blog post "{router.asPath.replace('/post/', '').replace('/', '')}". Are you lost?
          </h1>
        </div>
      </>
    );
  }

  return (
    <>
      <Head>
        <meta name="description" content="🌌 noel's blog - to jot down feelings." />
        <meta name="theme-color" content="#E2A8CA" />
        <meta property="og:description" content={doc.data.description} />
        <meta property="og:title" content={`noel's blog 💜 | ${doc.data.title}`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://b.floof.gay" />
      </Head>

      <main className="flex flex-col mt-8 justify-center items-center">
        <header className="text-center">
          <h1 className="text-3xl font-semibold">{doc.data.title}</h1>
          <h2 className="text-lg font-medium">{doc.data.description}</h2>
        </header>

        <article className="prose mt-6 mx-auto" dangerouslySetInnerHTML={{ __html: doc.content }} />
      </main>
    </>
  );
}

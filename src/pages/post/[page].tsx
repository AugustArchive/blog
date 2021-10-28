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

import getDocument, { getAllPages, MarkdownDocument } from '../../lib/docs';
import type { GetStaticProps, GetStaticPaths } from 'next';
import slugify from 'slugify';
import { useRouter } from 'next/router';

interface MainPageProps {
  document?: MarkdownDocument;
}

export const getStaticProps: GetStaticProps<MainPageProps> = async ({ params }) => {
  const allDocs = await getAllPages();
  const doc = allDocs.find((bah) => slugify(bah.data.title) === (params!.page as string));

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
          : undefined,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const docs = await getAllPages();
  return {
    paths: docs.map((s) => ({
      params: {
        page: slugify(s.data.title),
      },
    })),

    fallback: 'blocking',
  };
};

export default function MainPage({ document: doc }: MainPageProps) {
  if (doc === undefined) {
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

  return <>{JSON.stringify(doc, null, 4)}</>;
}

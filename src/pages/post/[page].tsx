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

import getDocument, { MarkdownDocument } from '../../lib/docs';
import type { GetStaticProps } from 'next';

interface MainPageProps {
  document: MarkdownDocument;
}

export const getStaticProps: GetStaticProps<MainPageProps> = async ({ params }) => {
  const doc = await getDocument(params![0] as string);
  return {
    props: {
      document: doc,
    },
  };
};

export default function MainPage({ document: doc }: MainPageProps) {
  return <>{JSON.stringify(doc, null, '\t')}</>;
}

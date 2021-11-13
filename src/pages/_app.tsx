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

import type { AppProps } from 'next/app';
import Head from 'next/head';

import '../styles/global.scss';

export default function PawApp({ Component, pageProps }: AppProps) {
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

      <Component {...pageProps} />
    </>
  );
}

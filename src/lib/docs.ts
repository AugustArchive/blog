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

import { Highlighter, getHighlighter } from 'shiki';
import { readFile } from 'fs/promises';
import { readdir } from '@augu/utils';
import graymatter from 'gray-matter';
import LRUCache from 'lru-cache';
import { join } from 'path';
import marked, { Tokenizer } from 'marked';
import { resourceLimits } from 'worker_threads';

export interface MarkdownDocument {
  data: Record<string, any>;
  content: string;
  file: string;
}

const cache = new LRUCache<string, MarkdownDocument>({
  maxAge: 604800000,
});

let highlighter!: Highlighter;

const escapeHtml = (text: string) =>
  text.replace(
    /[&<>"']/g,
    (match) =>
      ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;',
      }[match as never])
  );

export const getAllPages = async () => {
  // if it's cached, let's just return that
  // lru-cache, please add `toArray()` and `isEmpty()` methods AAAAAAAAAAAAAAAAAAAA
  if (cache.keys().length !== 0) {
    const cached: MarkdownDocument[] = [];
    cache.forEach((c) => cached.push(c));

    return cached;
  }

  // if there is no highlighter,
  // let's create a instance!
  if (!highlighter) {
    // nord is best theme.
    // fight me. right now.
    highlighter = await getHighlighter({
      theme: 'nord',
    });
  }

  const files = await readdir(join(process.cwd(), 'content'));
  const pages: MarkdownDocument[] = [];

  for (let i = 0; i < files.length; i++) {
    const f = files[i];
    const contents = await readFile(f, 'utf-8');
    const { data, content } = graymatter(contents);

    marked.use({
      renderer: {
        code(code, lang) {
          return highlighter.codeToHtml(code, lang);
        },
      },

      smartLists: true,
      smartypants: true,
    });

    // Render the document
    const mdContent = marked(content, {
      gfm: true,
    });

    pages.push({
      data,
      content: mdContent,
      file: files[i],
    });
  }

  // sort by new -> old
  return pages.sort((a, b) => new Date(b.data.createdAt).getTime() - new Date(a.data.createdAt).getTime());
};

const docs = async (page: string) => {
  if (cache.has(page)) return cache.get(page)!;

  // if there is no highlighter,
  // let's create a instance!
  if (!highlighter) {
    // nord is best theme.
    // fight me. right now.
    highlighter = await getHighlighter({
      theme: 'nord',
    });
  }

  // fetch all files
  const contents = await readFile(join(process.cwd(), 'content', `${page}.md`));
  const { data, content } = graymatter(contents);

  marked.use({
    renderer: {
      code(code, lang) {
        return highlighter.codeToHtml(code, lang, 'nord');
      },
    },

    smartLists: true,
    smartypants: true,
  });

  // Render the document
  const mdContent = marked(content, {
    gfm: true,
  });

  cache.set(page, {
    data,
    content: mdContent,
    file: join(process.cwd(), 'content', `${page}.md`),
  });

  return {
    data,
    content: mdContent,
    file: join(process.cwd(), 'content', `${page}.md`),
  };
};

export default docs;

/*
 * 🌌 @noel/blog: a blog to jot down feelings, i guess.
 * Copyright (c) 2021-2022 Noel <cutie@floofy.dev>
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

interface MarkdownProperties {
  html: string;
}

const Markdown: React.FC<MarkdownProperties> = ({ html }) => (
  <div
    className="mt-10 mx-auto prose prose-headings:dark:text-slate-300 prose-headings:text-slate-700 prose-p:dark:text-slate-300 prose-p:text-slate-700 prose-code:dark:text-slate-300 prose-code:text-slate-700 prose-strong:dark:text-slate-300 prose-strong:text-slate-700 prose-li:dark:text-slate-300 prose-li:text-slate-700 prose-a:dark:text-fuchsia-200 hover:prose-a:dark:text-fuchsia-500 prose-a:text-fuchsia-500 hover:prose-a:text-fuchsia-200 prose-img:mx-auto"
    dangerouslySetInnerHTML={{ __html: html }}
  />
);

export default Markdown;

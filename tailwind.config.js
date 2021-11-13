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

const defaultTheme = require('tailwindcss/defaultTheme');

/**
 * Tailwind configuration for b.floof.gay
 */
module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['./src/components/**.{ts,tsx}', './src/pages/**.{ts,tsx}'],
    options: {
      safelist: [/prose$/],
    },
  },

  darkMode: 'media', // or 'media' or 'class'

  // Typography breaks when using the JIT compiler
  // TODO: remove this when JIT is in a "good state".
  // mode: 'jit',

  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};

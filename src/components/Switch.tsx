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

import { Switch as HSwitch } from '@headlessui/react';
import { useState } from 'react';

interface SwitchProps {
  message: string;
}

const Switch: React.FC<SwitchProps> = ({ message }) => {
  const [enabled, setEnabled] = useState(false);

  return (
    <HSwitch checked={enabled} onChange={setEnabled}>
      <span className="sr-only">{message}</span>
      <span
        className={`${
          enabled ? 'translate-x-6' : 'translate-x-1'
        } inline-block w-4 h-4 transform bg-white rounded-full`}
      />
    </HSwitch>
  );
};

export default Switch;

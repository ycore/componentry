import React from 'react';

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../components/select';

export default function SelectDemo({ spriteUrl }: { spriteUrl: string }) {
  return (
    <Select>
      <SelectTrigger spriteUrl={spriteUrl} className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent spriteUrl={spriteUrl}>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem spriteUrl={spriteUrl} value="apple">
            Apple
          </SelectItem>
          <SelectItem spriteUrl={spriteUrl} value="banana">
            Banana
          </SelectItem>
          <SelectItem spriteUrl={spriteUrl} value="blueberry">
            Blueberry
          </SelectItem>
          <SelectItem spriteUrl={spriteUrl} value="grapes">
            Grapes
          </SelectItem>
          <SelectItem spriteUrl={spriteUrl} value="pineapple">
            Pineapple
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

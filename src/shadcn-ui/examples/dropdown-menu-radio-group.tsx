import React from 'react';
import { Button } from '../components/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuTrigger } from '../components/dropdown-menu';

export default function DropdownMenuRadioGroupDemo({ spriteUrl }: { spriteUrl: string }) {
  const [position, setPosition] = React.useState('bottom');

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem spriteUrl={spriteUrl} value="top">Top</DropdownMenuRadioItem>
          <DropdownMenuRadioItem spriteUrl={spriteUrl} value="bottom">Bottom</DropdownMenuRadioItem>
          <DropdownMenuRadioItem spriteUrl={spriteUrl} value="right">Right</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

import React from 'react';
import { Button } from '../components/button';
import { DropdownMenu, DropdownMenuCheckboxItem, type DropdownMenuCheckboxItemProps, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '../components/dropdown-menu';

type Checked = DropdownMenuCheckboxItemProps['checked'];

export default function DropdownMenuCheckboxes({ spriteUrl }: { spriteUrl: string }) {
  const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true);
  const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false);
  const [showPanel, setShowPanel] = React.useState<Checked>(false);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Appearance</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem spriteUrl={spriteUrl} checked={showStatusBar} onCheckedChange={setShowStatusBar}>
          Status Bar
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem spriteUrl={spriteUrl} checked={showActivityBar} onCheckedChange={setShowActivityBar} disabled>
          Activity Bar
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem spriteUrl={spriteUrl} checked={showPanel} onCheckedChange={setShowPanel}>
          Panel
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

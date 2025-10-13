import React from 'react';
import { Button } from '../components/button';
import { Input } from '../components/input';
import { Label } from '../components/label';
import { Popover, PopoverContent, PopoverTrigger } from '../components/popover';

export default function PopoverDemo() {
  const widthId = React.useId();
  const maxWidthId = React.useId();
  const heightId = React.useId();
  const maxHeightId = React.useId();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Dimensions</h4>
            <p className="text-muted-foreground text-sm">Set the dimensions for the layer.</p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor={widthId}>Width</Label>
              <Input id={widthId} defaultValue="100%" className="col-span-2 h-8" />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor={maxWidthId}>Max. width</Label>
              <Input id={maxWidthId} defaultValue="300px" className="col-span-2 h-8" />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor={heightId}>Height</Label>
              <Input id={heightId} defaultValue="25px" className="col-span-2 h-8" />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor={maxHeightId}>Max. height</Label>
              <Input id={maxHeightId} defaultValue="none" className="col-span-2 h-8" />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

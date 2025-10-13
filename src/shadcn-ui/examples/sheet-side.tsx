import React from 'react';

import { Button } from '../components/button';
import { Input } from '../components/input';
import { Label } from '../components/label';
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '../components/sheet';

const SHEET_SIDES = ['top', 'right', 'bottom', 'left'] as const;

export default function SheetSide() {
  const nameId = React.useId();
  const usernameId = React.useId();

  return (
    <div className="grid grid-cols-2 gap-2">
      {SHEET_SIDES.map(side => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <Button variant="outline">{side}</Button>
          </SheetTrigger>
          <SheetContent side={side}>
            <SheetHeader>
              <SheetTitle>Edit profile</SheetTitle>
              <SheetDescription>Make changes to your profile here. Click save when you're done.</SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor={nameId} className="text-right">
                  Name
                </Label>
                <Input id={nameId} value="Pedro Duarte" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor={usernameId} className="text-right">
                  Username
                </Label>
                <Input id={usernameId} value="@peduarte" className="col-span-3" />
              </div>
            </div>
            <SheetFooter>
              <SheetClose asChild>
                <Button type="submit">Save changes</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  );
}

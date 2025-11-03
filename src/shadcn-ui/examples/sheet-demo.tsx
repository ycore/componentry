import React from 'react';
import { Button } from '../components/button';
import { Input } from '../components/input';
import { Label } from '../components/label';
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '../components/sheet';

export default function SheetDemo(): React.JSX.Element {
  const nameId = React.useId();
  const usernameId = React.useId();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>Make changes to your profile here. Click save when you&apos;re done.</SheetDescription>
        </SheetHeader>
        <div className="grid flex-1 auto-rows-min gap-6 px-4">
          <div className="grid gap-3">
            <Label htmlFor={nameId}>Name</Label>
            <Input id={nameId} defaultValue="Pedro Duarte" />
          </div>
          <div className="grid gap-3">
            <Label htmlFor={usernameId}>Username</Label>
            <Input id={usernameId} defaultValue="@peduarte" />
          </div>
        </div>
        <SheetFooter>
          <Button type="submit">Save changes</Button>
          <SheetClose asChild>
            <Button variant="outline">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

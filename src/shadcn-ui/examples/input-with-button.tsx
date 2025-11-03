import React from 'react';
import { Button } from '../components/button';
import { Input } from '../components/input';

export default function InputWithButton(): React.JSX.Element {
  return (
    <div className="flex w-full max-w-sm items-center gap-2">
      <Input type="email" placeholder="Email" />
      <Button type="submit" variant="outline">
        Subscribe
      </Button>
    </div>
  );
}

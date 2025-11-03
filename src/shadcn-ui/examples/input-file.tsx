import React from 'react';
import { Input } from '../components/input';
import { Label } from '../components/label';

export default function InputFile(): React.JSX.Element {
  const pictureId = React.useId();

  return (
    <div className="grid w-full max-w-sm items-center gap-3">
      <Label htmlFor={pictureId}>Picture</Label>
      <Input id={pictureId} type="file" />
    </div>
  );
}

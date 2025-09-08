import React from 'react';
import { Label } from '../components/label';
import { RadioGroup, RadioGroupItem } from '../components/radio-group';

export default function RadioGroupDemo({ spriteUrl }: { spriteUrl: string }) {
  const defaultId = React.useId();
  const comfortableId = React.useId();
  const compactId = React.useId();
  
  return (
    <RadioGroup defaultValue="comfortable">
      <div className="flex items-center gap-3">
        <RadioGroupItem spriteUrl={spriteUrl} value="default" id={defaultId} />
        <Label htmlFor={defaultId}>Default</Label>
      </div>
      <div className="flex items-center gap-3">
        <RadioGroupItem spriteUrl={spriteUrl} value="comfortable" id={comfortableId} />
        <Label htmlFor={comfortableId}>Comfortable</Label>
      </div>
      <div className="flex items-center gap-3">
        <RadioGroupItem spriteUrl={spriteUrl} value="compact" id={compactId} />
        <Label htmlFor={compactId}>Compact</Label>
      </div>
    </RadioGroup>
  );
}

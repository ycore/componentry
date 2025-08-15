import React from 'react';
import { Label } from '../components/label';
import { RadioGroup, RadioGroupItem } from '../components/radio-group';

export default function RadioGroupDemo({ spriteUrl }: { spriteUrl: string }) {
  return (
    <RadioGroup defaultValue="comfortable">
      <div className="flex items-center gap-3">
        <RadioGroupItem spriteUrl={spriteUrl} value="default" id="r1" />
        <Label htmlFor="r1">Default</Label>
      </div>
      <div className="flex items-center gap-3">
        <RadioGroupItem spriteUrl={spriteUrl} value="comfortable" id="r2" />
        <Label htmlFor="r2">Comfortable</Label>
      </div>
      <div className="flex items-center gap-3">
        <RadioGroupItem spriteUrl={spriteUrl} value="compact" id="r3" />
        <Label htmlFor="r3">Compact</Label>
      </div>
    </RadioGroup>
  );
}

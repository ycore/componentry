import React from 'react';
import { Checkbox } from '../components/checkbox';
import { Label } from '../components/label';

export default function LabelDemo({ spriteUrl }: { spriteUrl: string }) {
  return (
    <div>
      <div className="flex items-center space-x-2">
        <Checkbox spriteUrl={spriteUrl} id="terms" />
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>
    </div>
  );
}

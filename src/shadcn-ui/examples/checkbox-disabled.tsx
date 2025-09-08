import React from 'react';
import { Checkbox } from '../components/checkbox';

export default function CheckboxDisabled({ spriteUrl }: { spriteUrl: string }) {
  const termsId = React.useId();
  
  return (
    <div className="flex items-center space-x-2">
      <Checkbox spriteUrl={spriteUrl} id={termsId} disabled />
      <label htmlFor={termsId} className="font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
        Accept terms and conditions
      </label>
    </div>
  );
}

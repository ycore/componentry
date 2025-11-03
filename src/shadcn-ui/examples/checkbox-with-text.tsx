import React from 'react';
import { Checkbox } from '../components/checkbox';

export default function CheckboxWithText(): React.JSX.Element {
  const termsId = React.useId();

  return (
    <div className="items-top flex gap-2">
      <Checkbox id={termsId} />
      <div className="grid gap-1.5 leading-none">
        <label htmlFor={termsId} className="font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Accept terms and conditions
        </label>
        <p className="text-muted-foreground text-sm">You agree to our Terms of Service and Privacy Policy.</p>
      </div>
    </div>
  );
}

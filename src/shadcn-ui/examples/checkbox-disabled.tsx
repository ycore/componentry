import React from 'react';
import { Checkbox } from '../components/checkbox';

export default function CheckboxDisabled() {
  const termsId = React.useId();

  return (
    <div className="flex items-center space-x-2">
      <Checkbox id={termsId} disabled />
      <label htmlFor={termsId} className="font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
        Accept terms and conditions
      </label>
    </div>
  );
}

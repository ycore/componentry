import React from 'react';
import { Checkbox } from '../components/checkbox';
import { Label } from '../components/label';

export default function LabelDemo() {
  const termsId = React.useId();

  return (
    <div>
      <div className="flex items-center space-x-2">
        <Checkbox id={termsId} />
        <Label htmlFor={termsId}>Accept terms and conditions</Label>
      </div>
    </div>
  );
}

import React from 'react';
import { Checkbox } from '../components/checkbox';
import { Label } from '../components/label';

export default function CheckboxDemo(): React.JSX.Element {
  const termsId = React.useId();
  const terms2Id = React.useId();
  const toggleId = React.useId();
  const toggle2Id = React.useId();

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-3">
        <Checkbox id={termsId} />
        <Label htmlFor={termsId}>Accept terms and conditions</Label>
      </div>
      <div className="flex items-start gap-3">
        <Checkbox id={terms2Id} defaultChecked />
        <div className="grid gap-2">
          <Label htmlFor={terms2Id}>Accept terms and conditions</Label>
          <p className="text-muted-foreground text-sm">By clicking this checkbox, you agree to the terms and conditions.</p>
        </div>
      </div>
      <div className="flex items-start gap-3">
        <Checkbox id={toggleId} disabled />
        <Label htmlFor={toggleId}>Enable notifications</Label>
      </div>
      <Label className="flex items-start gap-3 rounded-lg border p-3 hover:bg-accent/50 has-[[aria-checked=true]]:border-blue-600 has-[[aria-checked=true]]:bg-blue-50 dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950">
        <Checkbox
          id={toggle2Id}
          defaultChecked
          className="data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700"
        />
        <div className="grid gap-1.5 font-normal">
          <p className="font-medium text-sm leading-none">Enable notifications</p>
          <p className="text-muted-foreground text-sm">You can enable or disable notifications at any time.</p>
        </div>
      </Label>
    </div>
  );
}

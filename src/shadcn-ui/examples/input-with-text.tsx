import React from 'react';
import { Input } from '../components/input';
import { Label } from '../components/label';

export default function InputWithText() {
  const emailId = React.useId();
  
  return (
    <div className="grid w-full max-w-sm items-center gap-3">
      <Label htmlFor={emailId}>Email</Label>
      <Input type="email" id={emailId} placeholder="Email" />
      <p className="text-muted-foreground text-sm">Enter your email address.</p>
    </div>
  );
}

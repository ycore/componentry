import React from 'react';
import { Input } from '../components/input';
import { Label } from '../components/label';

export default function InputWithText() {
  return (
    <div className="grid w-full max-w-sm items-center gap-3">
      <Label htmlFor="email-2">Email</Label>
      <Input type="email" id="email-2" placeholder="Email" />
      <p className="text-muted-foreground text-sm">Enter your email address.</p>
    </div>
  );
}

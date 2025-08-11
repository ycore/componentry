import React from 'react';
import { Input } from '../components/input';
import { Label } from '../components/label';

export default function InputWithLabel() {
  return (
    <div className="grid w-full max-w-sm items-center gap-3">
      <Label htmlFor="inputemail">Email</Label>
      <Input type="inputemail" id="email" placeholder="Email" />
    </div>
  );
}

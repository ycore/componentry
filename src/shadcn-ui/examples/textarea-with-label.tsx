import React from 'react';
import { Label } from '../components/label';
import { Textarea } from '../components/textarea';

export default function TextareaWithLabel() {
  const messageId = React.useId();

  return (
    <div className="grid w-full gap-3">
      <Label htmlFor={messageId}>Your message</Label>
      <Textarea placeholder="Type your message here." id={messageId} />
    </div>
  );
}

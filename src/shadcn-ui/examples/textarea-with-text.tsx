import React from 'react';
import { Label } from '../components/label';
import { Textarea } from '../components/textarea';

export default function TextareaWithText(): React.JSX.Element {
  const messageId = React.useId();

  return (
    <div className="grid w-full gap-3">
      <Label htmlFor={messageId}>Your Message</Label>
      <Textarea placeholder="Type your message here." id={messageId} />
      <p className="text-muted-foreground text-sm">Your message will be copied to the support team.</p>
    </div>
  );
}

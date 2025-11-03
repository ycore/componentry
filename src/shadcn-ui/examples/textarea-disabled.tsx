import React from 'react';
import { Textarea } from '../components/textarea';

export default function TextareaDisabled(): React.JSX.Element {
  return <Textarea placeholder="Type your message here." disabled />;
}

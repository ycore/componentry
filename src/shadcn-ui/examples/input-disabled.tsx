import React from 'react';
import { Input } from '../components/input';

export default function InputDisabled(): React.JSX.Element {
  return <Input disabled type="email" placeholder="Email" />;
}

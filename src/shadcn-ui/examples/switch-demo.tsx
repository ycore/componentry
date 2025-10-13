import React from 'react';
import { Label } from '../components/label';
import { Switch } from '../components/switch';

export default function SwitchDemo() {
  const airplaneModeId = React.useId();

  return (
    <div className="flex items-center space-x-2">
      <Switch id={airplaneModeId} />
      <Label htmlFor={airplaneModeId}>Airplane Mode</Label>
    </div>
  );
}

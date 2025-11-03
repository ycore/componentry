import React from 'react';
import { Button } from '../components/button';

export default function ButtonDemo(): React.JSX.Element {
  return (
    <div className="flex flex-wrap items-center gap-2 md:flex-row">
      <Button>Button</Button>
    </div>
  );
}

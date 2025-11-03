import React from 'react';
import { Link } from '../../vibrant/components/link';
import { Button } from '../components/button';

export default function ButtonAsChild(): React.JSX.Element {
  return (
    <Button asChild>
      <Link href={'/'}>Sign in</Link>
    </Button>
  );
}

import React from 'react';
import { Button } from '../components/button';
import { Link } from '../custom/link';

export default function ButtonAsChild() {
  return (
    <Button asChild>
      <Link href={'/'}>Sign in</Link>
    </Button>
  );
}

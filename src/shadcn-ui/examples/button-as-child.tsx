import React from 'react';
import { Link } from '../../vibrant/components/link';
import { Button } from '../components/button';

export default function ButtonAsChild() {
  return (
    <Button asChild>
      <Link href={'/'}>Sign in</Link>
    </Button>
  );
}

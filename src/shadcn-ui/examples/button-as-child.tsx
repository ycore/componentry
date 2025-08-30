import React from 'react';
import { href } from 'react-router';
import { Button } from '../components/button';
import { Link } from '../custom/link';

export default function ButtonAsChild() {
  return (
    <Button asChild>
      <Link href={href('/auth/signin')}>Sign in</Link>
    </Button>
  );
}

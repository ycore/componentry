import React from 'react';
import { Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '../components/breadcrumb';
import { Link } from '../custom/link';

export default function BreadcrumbCollapsed({ spriteUrl }: { spriteUrl: string }) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/">Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator spriteUrl={spriteUrl} />
        <BreadcrumbItem>
          <BreadcrumbEllipsis spriteUrl={spriteUrl} />
        </BreadcrumbItem>
        <BreadcrumbSeparator spriteUrl={spriteUrl} />
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/docs/components">Components</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator spriteUrl={spriteUrl} />
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}

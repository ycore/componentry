import React from 'react';
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '../components/pagination';

export default function PaginationDemo({ spriteUrl }: { spriteUrl: string }) {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious spriteUrl={spriteUrl} href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis spriteUrl={spriteUrl} />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext spriteUrl={spriteUrl} href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

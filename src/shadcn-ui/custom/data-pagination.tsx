import svgSpriteUrl from '@ycore/componentry/shadcn-ui/assets/lucide-sprites.svg?url';
import type React from 'react';
import type { useFetcher } from 'react-router';
import { createSpriteIcon } from '../../images/SpriteIcon';
import type { IconName } from '../@types/lucide-sprites';
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '../components/pagination';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/select';

const SpriteIcon = createSpriteIcon<IconName>(svgSpriteUrl);

// ============================================================================
// Type Definitions
// ============================================================================

interface PaginationData {
  page: number;
  limit: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

// ============================================================================
// RowsPerPageSelector Component
// ============================================================================

interface RowsPerPageSelectorProps {
  currentLimit: number;
  options: number[];
  onLimitChange: (newLimit: number) => void;
  disabled?: boolean;
}

export function RowsPerPageSelector({ currentLimit, options, onLimitChange, disabled = false }: RowsPerPageSelectorProps) {
  return (
    <div className="flex items-center gap-2">
      <label htmlFor="rows-per-page" className="font-medium text-sm">
        Rows per page:
      </label>
      <Select
        value={currentLimit.toString()}
        onValueChange={value => {
          onLimitChange(Number.parseInt(value, 10));
        }}
        disabled={disabled}
      >
        <SelectTrigger className="w-20" spriteUrl={svgSpriteUrl}>
          <SelectValue />
        </SelectTrigger>
        <SelectContent spriteUrl={svgSpriteUrl}>
          {options.map(option => (
            <SelectItem key={option} value={option.toString()} spriteUrl={svgSpriteUrl}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

// ============================================================================
// RecordCountDisplay Component
// ============================================================================

interface RecordCountDisplayProps {
  currentPage: number;
  currentRecords: number;
  hasNextPage: boolean;
  totalRecords?: number;
}

export function RecordCountDisplay({ currentPage, currentRecords, hasNextPage, totalRecords }: RecordCountDisplayProps) {
  if (currentRecords === 0) {
    return null;
  }

  if (totalRecords !== undefined) {
    const currentLimit = currentRecords;
    const start = (currentPage - 1) * currentLimit + 1;
    const end = Math.min(currentPage * currentLimit, totalRecords);

    return (
      <p className="text-muted-foreground text-sm">
        Showing {start}-{end} of {totalRecords.toLocaleString()} records
      </p>
    );
  }

  return (
    <p className="text-muted-foreground text-sm">
      Page {currentPage} • {currentRecords} records {hasNextPage ? '(more available)' : ''}
    </p>
  );
}

// ============================================================================
// PaginationControls Component
// ============================================================================

interface PaginationControlsProps {
  currentPage: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  onPageChange: (page: number) => void;
  disabled?: boolean;
}

export function PaginationControls({ currentPage, hasNextPage, hasPreviousPage, onPageChange, disabled = false }: PaginationControlsProps) {
  // Only show pagination if there are pages to navigate
  if (!hasPreviousPage && !hasNextPage) {
    return null;
  }

  const handlePageClick = (page: number, e: React.MouseEvent) => {
    e.preventDefault();
    if (!disabled && page !== currentPage) {
      onPageChange(page);
    }
  };

  const handleNavigationClick = (page: number, e: React.MouseEvent) => {
    e.preventDefault();
    if (!disabled) {
      onPageChange(page);
    }
  };

  return (
    <div className="">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious spriteUrl={svgSpriteUrl} href="#" className={hasPreviousPage ? '' : 'pointer-events-none opacity-50'} onClick={(e: React.MouseEvent) => handleNavigationClick(currentPage - 1, e)} />
          </PaginationItem>

          {currentPage > 2 && (
            <>
              <PaginationItem>
                <PaginationLink href="#" onClick={(e: React.MouseEvent) => handlePageClick(1, e)}>
                  1
                </PaginationLink>
              </PaginationItem>
              {currentPage > 3 && (
                <PaginationItem>
                  <PaginationEllipsis spriteUrl={svgSpriteUrl} />
                </PaginationItem>
              )}
            </>
          )}

          {hasPreviousPage && (
            <PaginationItem>
              <PaginationLink href="#" onClick={(e: React.MouseEvent) => handlePageClick(currentPage - 1, e)}>
                {currentPage - 1}
              </PaginationLink>
            </PaginationItem>
          )}

          <PaginationItem>
            <PaginationLink href="#" isActive>
              {currentPage}
            </PaginationLink>
          </PaginationItem>

          {hasNextPage && (
            <PaginationItem>
              <PaginationLink href="#" onClick={(e: React.MouseEvent) => handlePageClick(currentPage + 1, e)}>
                {currentPage + 1}
              </PaginationLink>
            </PaginationItem>
          )}

          {hasNextPage && (
            <PaginationItem>
              <PaginationEllipsis spriteUrl={svgSpriteUrl} />
            </PaginationItem>
          )}

          <PaginationItem>
            <PaginationNext spriteUrl={svgSpriteUrl} href="#" className={hasNextPage ? '' : 'pointer-events-none opacity-50'} onClick={(e: React.MouseEvent) => handleNavigationClick(currentPage + 1, e)} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}

// ============================================================================
// Main DataPagination Wrapper Component
// ============================================================================

interface DataPaginationProps {
  // Data
  currentRecords: number;
  pagination: PaginationData;
  totalRecords?: number; // Optional for scalable approach

  // Configuration
  baseRoute: string;
  routeParams?: Record<string, string>; // Additional route params (like table=users)
  perPageOptions?: number[];

  // Fetcher for navigation
  fetcher: ReturnType<typeof useFetcher>;

  // Loading state
  isLoading?: boolean;

  // Labels
  title?: string;
  loadingIcon?: boolean;
}

export function DataPagination({ currentRecords, pagination, totalRecords, baseRoute, routeParams = {}, perPageOptions = [25, 50, 100, 200], fetcher, isLoading = false, loadingIcon = true }: DataPaginationProps) {
  const buildUrl = (params: Record<string, string>) => {
    const urlParams = new URLSearchParams();

    // Add route params (like table selection)
    Object.entries(routeParams).forEach(([key, value]) => {
      if (value) urlParams.set(key, value);
    });

    // Add pagination params
    Object.entries(params).forEach(([key, value]) => {
      urlParams.set(key, value);
    });

    const baseUrl = baseRoute;
    return `${baseUrl}?${urlParams.toString()}`;
  };

  const navigateToUrl = (url: string) => {
    try {
      fetcher.load(url);
      window.history.pushState({}, '', url);
    } catch (error) {
      console.error('Navigation error:', error);
    }
  };

  const handleLimitChange = (newLimit: number) => {
    const url = buildUrl({
      limit: newLimit.toString(),
      page: '1',
    });
    navigateToUrl(url);
  };

  const handlePageChange = (newPage: number) => {
    const url = buildUrl({
      page: newPage.toString(),
      limit: pagination.limit.toString(),
    });
    navigateToUrl(url);
  };

  return (
    <div className="border-b p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <PaginationControls currentPage={pagination.page} hasNextPage={pagination.hasNextPage} hasPreviousPage={pagination.hasPreviousPage} onPageChange={handlePageChange} disabled={isLoading} />
          {isLoading && loadingIcon && <SpriteIcon iconId="LoaderCircle" className="h-4 w-4 animate-spin text-muted-foreground" />}
        </div>

        <div className="flex items-center gap-4">
          <RowsPerPageSelector currentLimit={pagination.limit} options={perPageOptions} onLimitChange={handleLimitChange} disabled={isLoading} />
          <RecordCountDisplay currentPage={pagination.page} currentRecords={currentRecords} hasNextPage={pagination.hasNextPage} totalRecords={totalRecords} />
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// Export Types for External Use
// ============================================================================

export type { PaginationData, DataPaginationProps };

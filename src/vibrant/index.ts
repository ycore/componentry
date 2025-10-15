export { ComponentExamples } from '../shadcn-ui/examples/examples-page.tsx';
export * from '../shadcn-ui/index';

import * as DataPaginationComponents from './components/data-pagination';
import { DataPagination as DataPaginationComponent } from './components/data-pagination';
export const DataPagination = Object.assign(DataPaginationComponent, {
  RecordCountDisplay: DataPaginationComponents.RecordCountDisplay,
  PaginationControls: DataPaginationComponents.PaginationControls,
  RowsPerPageSelector: DataPaginationComponents.RowsPerPageSelector,
});

import * as InputOtpComponents from './components/input-otp';
import { InputOtp as InputOtpComponent } from './components/input-otp';
export const InputOtp = Object.assign(InputOtpComponent, {
  InputOtpGroup: InputOtpComponents.InputOtpGroup,
  InputOtpSlot: InputOtpComponents.InputOtpSlot,
  InputOtpHiddenInput: InputOtpComponents.InputOtpHiddenInput,
});

export type { IconName as ExampleIconName } from './@types//example-sprites';
export { type IconName, iconNames } from './@types/lucide-sprites';
export { Link } from './components/link';
export { SvgIcon } from './lib/icon';


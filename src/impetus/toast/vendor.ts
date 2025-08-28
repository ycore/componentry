import type { unstable_RouterContextProvider } from 'react-router';
import { getToast as getToastVendor, setToast as setToastVendor } from 'remix-toast/middleware';

export { dataWithError, dataWithSuccess, dataWithToast } from 'remix-toast';
export { unstable_toastMiddleware } from 'remix-toast/middleware';
export { toast as notify } from 'sonner';

type ToastMessage = Parameters<typeof setToastVendor> extends [unknown, infer T] ? T : never;

export function getToast(context: Readonly<unstable_RouterContextProvider>): ToastMessage {
  return getToastVendor(context as unstable_RouterContextProvider);
}

export function setToast(context: Readonly<unstable_RouterContextProvider>, toast: ToastMessage) {
  return setToastVendor(context as unstable_RouterContextProvider, toast);
}

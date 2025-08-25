import type { unstable_RouterContextProvider } from 'react-router';
import { setToast as setToastVendor } from 'remix-toast/middleware';

export { getToast, unstable_toastMiddleware } from 'remix-toast/middleware';
export { toast as notify } from 'sonner';

type ToastMessage = Parameters<typeof setToastVendor> extends [unknown, infer T] ? T : never;

export function setToast(context: Readonly<unstable_RouterContextProvider>, toast: ToastMessage) {
  return setToastVendor(context as unstable_RouterContextProvider, toast);
}

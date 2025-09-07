import { useEffect } from 'react';
import { notify } from './vendor';

export type ToastData = {
  message: string;
  type: 'success' | 'error' | 'info' | 'warning';
} | null;

export function useToast(toast: ToastData) {
  useEffect(() => {
    if (toast) {
      if (toast.type === 'error') {
        notify.error(toast.message);
      } else if (toast.type === 'success') {
        notify.success(toast.message);
      } else if (toast.type === 'info') {
        notify.info(toast.message);
      } else if (toast.type === 'warning') {
        notify.warning(toast.message);
      } else {
        notify(toast.message);
      }
    }
  }, [toast]);
}

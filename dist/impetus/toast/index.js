// src/impetus/toast/useToast.ts
import { useEffect } from "react";

// src/impetus/toast/vendor.ts
import { setToast as setToastVendor } from "remix-toast/middleware";
import { dataWithError, dataWithSuccess, dataWithToast } from "remix-toast";
import { getToast, unstable_toastMiddleware } from "remix-toast/middleware";
import { toast } from "sonner";
function setToast(context, toast2) {
  return setToastVendor(context, toast2);
}

// src/impetus/toast/useToast.ts
function useToast(toast2) {
  useEffect(() => {
    if (toast2) {
      if (toast2.type === "error") {
        toast.error(toast2.message);
      } else if (toast2.type === "success") {
        toast.success(toast2.message);
      } else if (toast2.type === "info") {
        toast.info(toast2.message);
      } else if (toast2.type === "warning") {
        toast.warning(toast2.message);
      } else {
        toast(toast2.message);
      }
    }
  }, [toast2]);
}
export {
  useToast,
  unstable_toastMiddleware,
  setToast,
  toast as notify,
  getToast,
  dataWithToast,
  dataWithSuccess,
  dataWithError
};

//# debugId=2EDEF02C181E9D8364756E2164756E21

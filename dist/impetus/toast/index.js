// src/impetus/toast/useToast.ts
import { useEffect } from "react";

// src/impetus/toast/vendor.ts
import { dataWithError, dataWithSuccess, dataWithToast } from "remix-toast";
import { getToast, setToast, toastMiddleware } from "remix-toast/middleware";
import { toast } from "sonner";

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
  toastMiddleware,
  setToast,
  toast as notify,
  getToast,
  dataWithToast,
  dataWithSuccess,
  dataWithError
};

//# debugId=32FB3FCB7E62E9BD64756E2164756E21

import { useEffect } from "react";
import { dataWithError, dataWithSuccess, dataWithToast } from "remix-toast";
import { getToast, setToast, toastMiddleware } from "remix-toast/middleware";
import { toast } from "sonner";
import { toast as toast2 } from "sonner";
function useToast(toast$1) {
  useEffect(() => {
    if (toast$1) {
      if (toast$1.type === "error") {
        toast.error(toast$1.message);
      } else if (toast$1.type === "success") {
        toast.success(toast$1.message);
      } else if (toast$1.type === "info") {
        toast.info(toast$1.message);
      } else if (toast$1.type === "warning") {
        toast.warning(toast$1.message);
      } else {
        toast(toast$1.message);
      }
    }
  }, [toast$1]);
}
export {
  dataWithError,
  dataWithSuccess,
  dataWithToast,
  getToast,
  toast2 as notify,
  setToast,
  toastMiddleware,
  useToast
};
//# sourceMappingURL=index.js.map


import { useEffect } from 'react';
import { toast, Bounce } from 'react-toastify';

import { ReactNode } from 'react';

const ToastSuccess = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    toast.success(children, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  }, [children]);

  return (
    <div>
      {children}
    </div>
  )
}

export default ToastSuccess

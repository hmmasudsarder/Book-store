import { toast, Bounce } from 'react-toastify';

import { ReactNode } from 'react';

const ToastSuccess = ({ children }: { children: ReactNode }) => {
//   useEffect(() => {
//     toast.success(children as string, {
//         position: "top-right",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: false,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "light",
//         transition: Bounce,
//         });
//   }, [children]);

  return toast.success(children as string, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition: Bounce,
    });
}

export default ToastSuccess

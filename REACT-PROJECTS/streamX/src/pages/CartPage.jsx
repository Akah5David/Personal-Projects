import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

import SubscribeButton from "../reusable_components/SubscribeButton";

const CartModal = forwardRef(function CartModal({ closeModalFn }, ref) {
  const dialogRef = useRef();

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialogRef.current.showModal();
      },

      close: () => {
        dialogRef.current.close();
      },
    };
  });

  return createPortal(
    <>
      <div
        onClick={closeModalFn}
        className="fixed inset-0  bg-black/87 z-80"
      ></div>
      <dialog
        className="w-[35%] fixed z-80 flex flex-col left-1/2 top-1/2 -translate-1/2 rounded-4xl overflow-hidden bg-[#363434]"
        ref={dialogRef}
      >
        <div className="flex justify-between items-center py-6 px-5 ">
          <h3 className="text-2xl font-bold">Your Cart</h3>
          <svg
            onClick={closeModalFn}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-white h-[25px] w-[25px] cursor-pointer"
          >
            <path d="M18.3 5.71a1 1 0 0 0-1.41 0L12 10.59 7.11 5.7A1 1 0 0 0 5.7 7.11L10.59 12l-4.89 4.89a1 1 0 1 0 1.41 1.41L12 13.41l4.89 4.89a1 1 0 0 0 1.41-1.41L13.41 12l4.89-4.89a1 1 0 0 0 0-1.4z" />
          </svg>
        </div>

        <div className=" flex flex-col pb-6 items-center gap-20 ">
          <hr className="border-0 bg-[#817d7d] h-[1px] w-full"></hr>
          <div className="bg-blue text-lg flex flex-col gap-6 justify-between items-center">
            <p>You haven't added any plan</p>
            <SubscribeButton btnAction="Subscribe now" />
          </div>
          <div className="text-center flex-none w-[90%] rounded-2xl text-red-500 bg-red-200 py-6 px-8">
            <p>Product is not available in this quantity.</p>
          </div>
        </div>
      </dialog>
    </>,
    window.document.getElementById("cart-modal"),
  );
});

export default CartModal;

// 'use client'

// import { useState } from 'react'
// import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
// import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'

// export default function Example() {
//   const [open, setOpen] = useState(true)

//   return (
//     <div>
//       <button
//         onClick={() => setOpen(true)}
//         className="rounded-md bg-gray-950/5 px-2.5 py-1.5 text-sm font-semibold text-gray-900 hover:bg-gray-950/10"
//       >
//         Open dialog
//       </button>
//       <Dialog open={open} onClose={setOpen} className="relative z-10">
//         <DialogBackdrop
//           transition
//           className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
//         />

//         <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
//           <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
//             <DialogPanel
//               transition
//               className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
//             >
//               <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
//                 <div className="sm:flex sm:items-start">
//                   <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:size-10">
//                     <ExclamationTriangleIcon aria-hidden="true" className="size-6 text-red-600" />
//                   </div>
//                   <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
//                     <DialogTitle as="h3" className="text-base font-semibold text-gray-900">
//                       Deactivate account
//                     </DialogTitle>
//                     <div className="mt-2">
//                       <p className="text-sm text-gray-500">
//                         Are you sure you want to deactivate your account? All of your data will be permanently removed.
//                         This action cannot be undone.
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
//                 <button
//                   type="button"
//                   onClick={() => setOpen(false)}
//                   className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500 sm:ml-3 sm:w-auto"
//                 >
//                   Deactivate
//                 </button>
//                 <button
//                   type="button"
//                   data-autofocus
//                   onClick={() => setOpen(false)}
//                   className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto"
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </DialogPanel>
//           </div>
//         </div>
//       </Dialog>
//     </div>
//   )
// }

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

function Modal({ children, open }) {
  const dialog = useRef();

  useEffect(() => {
    if (open){
      dialog.current.showModal()
    }else{

      dialog.current.close();
    }
  }, [open]);

  return createPortal(
    <dialog className="modal" ref={dialog}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}

export default Modal;

//todo: previous way
// import { forwardRef, useImperativeHandle, useRef } from 'react';
// import { createPortal } from 'react-dom';

// const Modal = forwardRef(function Modal({ children }, ref) {
//   const dialog = useRef();

//   useImperativeHandle(ref, () => {
//     return {
//       open: () => {
//         dialog.current.showModal();
//       },
//       close: () => {
//         dialog.current.close();
//       },
//     };
//   });f

//   return createPortal(
//     <dialog className="modal" ref={dialog}>
//       {children}
//     </dialog>,
//     document.getElementById('modal')
//   );
// });

// export default Modal;

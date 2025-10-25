"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  const modalRef = useRef(null);
  const router = useRouter();
  useEffect(() => {
    if (!modalRef.current?.open) {
      modalRef.current?.showModal();
    }
  }, []);

  function handleClose() {
    router.back();
  }

  return createPortal(
    <dialog
      onClose={handleClose}
      className="w-4/5 md:w-9/12 mx-auto  bg-gray-100 text-gray-900 shadow-teal-700 shadow-md border border-teal-600 flex flex-col p-2 rounded-md"
    >
      <span onClick={handleClose} className="flex justify-end cursor-pointer">
        <Image src="/xmark.svg" alt="close" width={30} height={30} />
      </span>
      {children}
    </dialog>,
    document.getElementById("modal-root")
  );
};

export default Modal;

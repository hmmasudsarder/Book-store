declare module '../Modal/Modal' {
    import React from 'react';
  
    interface ModalProps {
      isOpen: boolean;
      closeModal: () => void;
      title: string;
      children?: React.ReactNode;
    }
  
    const Modal: React.FC<ModalProps>;
    export default Modal;
  }
import Modal from "../Modal/Modal";
interface ActionModalProps {
  isOpen: boolean;
  closeModal: () => void;
  title: string;
  actionContent: React.ReactNode;
}

const ActionModal: React.FC<ActionModalProps> = ({ isOpen, closeModal, title, actionContent }) => {
  return (
    <Modal
      isOpen={isOpen}
      closeModal={closeModal}
      title={title}
    >
      <div>{actionContent}</div>
    </Modal>
  );
};

export default ActionModal;

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  children: React.ReactNode;
}

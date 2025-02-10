import { Image } from '../../types';

export default interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: Image | null;
}

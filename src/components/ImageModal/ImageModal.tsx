import React from 'react';
import Modal from 'react-modal';
import { Image } from '../../types';
import css from './ImageModal.module.css';

Modal.setAppElement('#root');

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: Image | null;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, image }) => {
  if (!image) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={{
        overlay: { backgroundColor: 'rgba(0, 0, 0, 0.8)' },
        content: {
          maxWidth: '1200px',
          height: '800px',
          margin: 'auto',
          borderRadius: '10px',
          padding: '0',
          overflow: 'hidden',
        },
      }}
    >
      <img src={image.urls.regular} alt={image.alt_description} className={css.modalImg} />
    </Modal>
  );
};

export default ImageModal;

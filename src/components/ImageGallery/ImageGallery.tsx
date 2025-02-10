import React from 'react';
import ImageCard from '../ImageCard/ImageCard';
import { Image } from '../../types';
import css from './ImageGallery.module.css';

interface ImageGalleryProps {
  images: Image[];
  onImageClick: (image: Image) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, onImageClick }) => {
  if (images.length === 0) return null;

  return (
    <ul className={css.galleryList}>
      {images.map((image) => (
        <li key={image.id}>
          <ImageCard image={image} onClick={() => onImageClick(image)} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;

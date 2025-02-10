import React from 'react';
import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';
import ImageGalleryProps from './types';

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

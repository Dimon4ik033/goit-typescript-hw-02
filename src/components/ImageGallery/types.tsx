import { Image } from '../../types';

export default interface ImageGalleryProps {
  images: Image[];
  onImageClick: (image: Image) => void;
}

import ImageCardProps from './types';

const ImageCard: React.FC<ImageCardProps> = ({ image, onClick }) => {
  return (
    <div style={{ textAlign: 'center', cursor: 'pointer' }} onClick={onClick}>
      <img
        src={image.urls.small}
        alt={image.alt_description || 'Image'}
        style={{ width: '380px', height: '250px', borderRadius: '8px' }}
      />
    </div>
  );
};

export default ImageCard;

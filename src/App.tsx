import React, { useState } from 'react';
import axios from 'axios';
import { Toaster, toast } from 'react-hot-toast';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
// import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';
import { Image } from './types';

const accessKey = '9RqUm9C6bqIXT72LfqT-UrGTcP1_eKI3PepbZaD3pXY';

const App: React.FC = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>('');
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const fetchImages = async (newQuery: string = query, newPage: number = 1) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `https://api.unsplash.com/search/photos?query=${newQuery}&page=${newPage}&per_page=12&client_id=${accessKey}`
      );

      setImages((prevImages) => (newPage === 1 ? response.data.results : [...prevImages, ...response.data.results]));
    } catch {
      setError('Failed to load images. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (newQuery: string) => {
    if (!newQuery.trim()) {
      toast.error('Please enter a search term!');
      return;
    }
    setQuery(newQuery);
    setPage(1);
    fetchImages(newQuery, 1);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery
        images={images}
        onImageClick={(image) => {
          setSelectedImage(image);
          setIsModalOpen(true);
        }}
      />
      {/* {loading && <Loader />} */}
      {images.length > 0 && !loading && (
        <LoadMoreBtn
          onClick={() => {
            const newPage = page + 1;
            setPage(newPage);
            fetchImages(query, newPage);
          }}
        />
      )}
      <ImageModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} image={selectedImage} />
      <Toaster position='top-right' />
    </div>
  );
};

export default App;

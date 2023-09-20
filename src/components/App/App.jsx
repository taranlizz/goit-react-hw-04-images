import { Toaster } from 'react-hot-toast';
import { useEffect, useState } from 'react';
import { SearchBar } from '../SearchBar/SearchBar';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Button } from '../Button/Button';
import { getGalleryItems } from 'services/galleryApi';
import { Loader } from 'components/Loader/Loader';
import * as notificationAPI from 'services/galleryNotificationApi';

export const App = () => {
  const [query, setQuery] = useState('');
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [showLoadMore, setShowLoadMore] = useState(false);

  useEffect(() => {
    if (query === '') {
      return;
    }

    setIsLoading(true);

    (async () => {
      try {
        const { hits, totalHits } = await getGalleryItems(query, page);

        setItems(items => [...items, ...hits]);
        setShowLoadMore(page < Math.ceil(totalHits / 12));

        notificationAPI.success(totalHits, page);
        notificationAPI.info(totalHits, page);
      } catch (error) {
        notificationAPI(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [query, page]);

  const onSearchSubmit = value => {
    setQuery(`${Date.now()}/${value}`);
    setItems([]);
    setPage(1);
  };

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <SearchBar onSubmit={onSearchSubmit} />
      {isLoading && <Loader />}
      {items.length > 0 && <ImageGallery items={items} />}
      {showLoadMore && (
        <Button onClick={() => setPage(page => page + 1)} loading={isLoading} />
      )}
    </>
  );
};

import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { List } from './ImageGallery.styled';

export const ImageGallery = ({ items }) => {
  return (
    <List>
      {items.map(({ webformatURL, largeImageURL, tags }, idx) => (
        <ImageGalleryItem
          key={idx}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          tags={tags}
        />
      ))}
    </List>
  );
};

ImageGallery.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};

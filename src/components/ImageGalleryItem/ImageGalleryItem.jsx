import PropTypes from 'prop-types';
import { Modal } from 'components/Modal/Modal';
import { useState } from 'react';
import { Image, Item } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ webformatURL, tags, largeImageURL }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Item>
      <Image
        src={webformatURL}
        alt={tags}
        loading="lazy"
        width="395"
        height="210"
        onClick={() => setIsModalOpen(isModalOpen => !isModalOpen)}
      />
      {isModalOpen && (
        <Modal
          largeImageURL={largeImageURL}
          onClose={() => setIsModalOpen(isModalOpen => !isModalOpen)}
          tags={tags}
        />
      )}
    </Item>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string,
};

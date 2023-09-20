import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalImg } from './Modal.styled';

const modalRoot = document.getElementById('modal-root');

export const Modal = ({ onClose, largeImageURL, tags }) => {
  useEffect(() => {
    window.addEventListener('keydown', onEscKeyDown);
    return () => window.removeEventListener('keydown', onEscKeyDown);
  });

  const onEscKeyDown = evt => {
    if (evt.code === 'Escape') {
      onClose();
    }
  };

  const onOverlayClick = evt => {
    if (evt.target === evt.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <Overlay onClick={onOverlayClick}>
      <ModalImg src={largeImageURL} alt={tags} />
    </Overlay>,
    modalRoot
  );
};

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

import PropTypes from 'prop-types';
import { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalImg } from './Modal.styled';

const modalRoot = document.getElementById('modal-root');

export class Modal extends Component {
  static propTypes = {
    largeImageURL: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
  };
  componentDidMount() {
    window.addEventListener('keydown', this.onEscKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onEscKeyDown);
  }

  onEscKeyDown = evt => {
    if (evt.code === 'Escape') {
      this.props.onClose();
    }
  };

  onOverlayClick = evt => {
    if (evt.target === evt.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <Overlay onClick={this.onOverlayClick}>
        <ModalImg src={this.props.largeImageURL} alt={this.props.tags} />
      </Overlay>,
      modalRoot
    );
  }
}

import { Image, ImageListItem, ModalImage } from './ImageGalleryItem.styled';
import { Component } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => {
    console.log('image clicked');
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const { imageData } = this.props;
    const { isModalOpen } = this.state;
    return (
      <ImageListItem>
        <Image
          onClick={this.openModal}
          src={imageData.webformatURL}
          alt={imageData.tags}
          loading="lazy"
        />

        <Modal
          isOpen={isModalOpen}
          onRequestClose={this.closeModal}
          style={{
            overlay: {
              backgroundColor: 'rgba(0, 0, 0, 0.75)',
              zIndex: 1200,
            },
            content: {
              top: '50%',
              left: '50%',
              right: 'auto',
              bottom: 'auto',
              marginRight: '-50%',
              transform: 'translate(-50%, -50%)',
            },
          }}
        >
          <ModalImage
            src={imageData.largeImageURL}
            alt={imageData.tags}
            loading="lazy"
          />
        </Modal>
      </ImageListItem>
    );
  }
}

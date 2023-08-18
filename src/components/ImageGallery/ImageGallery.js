import { Image, ImagesList, ImagesListItem } from './ImageGallery.styled';

export const ImageGallery = ({ images }) => {
  console.log('images:', images);
  return (
    <ImagesList>
      {images.map(image => (
        <ImagesListItem key={image.id}>
          <Image src={image.webformatURL} alt={image.tags} loading="lazy" />
        </ImagesListItem>
      ))}
    </ImagesList>
  );
};

import * as basicLightbox from 'basiclightbox';

export const Modal = () => {
  const modal = basicLightbox.create(`
    <img src="assets/images/image.png" width="800" height="600">
`);
  modal.show();
  return <div>{}</div>;
};

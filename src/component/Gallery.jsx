import React from 'react';
import Gallery from 'react-photo-gallery';

const GalleryComponent = ({ images }) => {
  const photoArray = images.map((image) => ({
    src: image.url,
    width: 500,
    height: 300,
    alt: image.description,
  }));

  return (
    <div className='max-w-7xl'>
      <Gallery photos={photoArray} />
    </div>
  );
};

export default GalleryComponent;

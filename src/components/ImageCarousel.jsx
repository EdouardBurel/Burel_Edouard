import React from 'react';

const ImageCard = ({ images }) => {
  return (
    <div className="image-card">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt=""
          style={{ maxWidth: '100%', height: 'auto', borderRadius: '5%' }}
        />
      ))}
    </div>
  );
};

export default ImageCard;

import React, { useState, useEffect } from 'react';

const ImageCard = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsFading(false);
      }, 500); // Half of the 1-second fade duration for out and in
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="image-card">
      <img
        src={images[currentIndex]}
        alt="This page is my project"
        className={`image ${isFading ? 'fade' : ''}`}
      />
    </div>
  );
};

export default ImageCard;

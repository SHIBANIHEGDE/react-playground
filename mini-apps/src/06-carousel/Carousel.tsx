import React, { useState } from "react";
import type { CarouselProps } from "./Carousel.types";
import "./Carousel.css";

const Carousel = ({
  className,
  images,
  startIndex,
  imageStyle,
}: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>(startIndex || 0);
  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };
  console.log("images[currentIndex].url", images[currentIndex]);
  const currentImage = images[currentIndex];

  return images.length === 0 ? (
    <div>Loading...</div>
  ) : (
    <div className={`carousel-container ${className || ""}`}>
      <div className="carousel-wrapper">
        :{currentIndex}
        <button onClick={goToPrev}>Previous</button>
        <img
          src={currentImage.url}
          alt={currentImage.alt || `Carousel image number ${currentIndex + 1}`}
          style={imageStyle}
        />
        <button onClick={goToNext}>Next</button>
      </div>
    </div>
  );
};
export default Carousel;

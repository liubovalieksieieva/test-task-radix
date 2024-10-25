import { useState } from "react";

const productImages = [
  "/images/iphone1.png",
  "/images/iphone2.webp",
  "/images/iphone3.webp",
  "/images/iphone4.webp",
];
const ImageSlider = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  const handleNextImage = () => {
    setSelectedImage((prevImage) => (prevImage + 1) % productImages.length);
  };

  const handlePrevImage = () => {
    setSelectedImage((prevImage) =>
      prevImage === 0 ? productImages.length - 1 : prevImage - 1
    );
  };
  return (
    <div className="image-slider">
      <div className="slider-image">
        <button onClick={handlePrevImage} className="slider-button">
          ‹
        </button>
        <div className="img">
          <img
            src={productImages[selectedImage]}
            alt="Product"
            className="product-image"
          />
        </div>

        <button onClick={handleNextImage} className="slider-button">
          ›
        </button>
      </div>
      <div className="image-thumbnails">
        {productImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Thumbnail ${index + 1}`}
            className={`thumbnail ${index === selectedImage ? "active" : ""}`}
            onClick={() => setSelectedImage(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;

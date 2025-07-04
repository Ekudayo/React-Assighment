import { useState } from "react";
import styles from "../ImageGalery/imageGalery.module.css"; // Importing the CSS module for styling

const ImageGalery = () => {
  const images = [
    "https://picsum.photos/id/1018/600/400",
    "https://picsum.photos/id/1025/600/400",
    "https://picsum.photos/id/1041/600/400",
    "https://picsum.photos/id/1060/600/400",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const toggleFullscreen = () => {
    setFullscreen(!fullscreen);
  };

  return (
    <div
      className={`${styles.galleryContainer} ${
        fullscreen ? styles.fullscreen : ""
      }`}
    >
      <h2>🖼️ Image Gallery</h2>
      <div className={styles.imageWrapper}>
        <img src={images[currentIndex]} alt="Gallery" />
      </div>

      <div className={styles.controls}>
        <button onClick={goToPrev}>⟵ Prev</button>
        <button onClick={toggleFullscreen}>
          {fullscreen ? "Exit Fullscreen" : "Fullscreen"}
        </button>
        <button onClick={goToNext}>Next ⟶</button>
      </div>

      <p>
        {currentIndex + 1} / {images.length}
      </p>
    </div>
  );
};

export default ImageGalery;

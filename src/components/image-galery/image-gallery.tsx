import React from "react";
import styles from "./image.gallery.module.css";
import ImageGalleryItem from "./image-galery-item";

interface ImageGalleryProps {
  images: Array<{ id: number; webformatURL: string; largeImageURL: string }>;
  onImageClick: (largeImageURL: string) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  onImageClick,
}) => {
  return (
    <div className="">
      <ul className={styles.gallery}>
        {images.map((image) => (
          <ImageGalleryItem
            key={image.id}
            image={image}
            onImageClick={onImageClick}
          />
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;

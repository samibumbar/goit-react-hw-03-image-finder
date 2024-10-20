import React from "react";
import styles from "./image.gallery.module.css";

interface ImageGalleryItemProps {
  image: { webformatURL: string; largeImageURL: string };
  onImageClick: (largeImageURL: string) => void;
}

const ImageGalleryItem: React.FC<ImageGalleryItemProps> = ({
  image,
  onImageClick,
}) => {
  return (
    <li
      className={styles["gallery-item"]}
      onClick={() => onImageClick(image.largeImageURL)}
    >
      <img className={styles.img} src={image.webformatURL} alt="" />
    </li>
  );
};

export default ImageGalleryItem;

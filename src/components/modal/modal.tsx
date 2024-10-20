import React, { useEffect } from "react";
import styles from "./modal.module.css";

interface ModalProps {
  largeImageURL: string;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ largeImageURL, onClose }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return (
    <div className={styles.owerlay} onClick={handleOverlayClick}>
      <div className={styles.modal}>
        <img className={styles["mmodal-img"]} src={largeImageURL} alt="" />
      </div>
    </div>
  );
};

export default Modal;

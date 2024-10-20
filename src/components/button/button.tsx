import React from "react";
import styles from "./button.module.css";

interface ButtonProps {
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <div className={styles["btn-container"]}>
      <button type="button" className={styles.btn} onClick={onClick}>
        Load more
      </button>
    </div>
  );
};

export default Button;

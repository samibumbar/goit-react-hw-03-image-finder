import React from "react";
import styles from "./loader.module.css";
import { Circles } from "react-loader-spinner";

const Loader: React.FC = () => {
  return (
    <div className={styles.loader}>
      <Circles color="#00BFFF" height={60} width={60} />
    </div>
  );
};

export default Loader;

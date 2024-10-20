import React, { useState } from "react";
import styles from "./searchbar.module.css";

interface SearchbarProps {
  onSubmit: (query: string) => void;
}

const Searchbar: React.FC<SearchbarProps> = ({ onSubmit }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() === "") return;
    onSubmit(input.trim());
    setInput("");
  };

  return (
    <header className={styles.searchbar}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <button type="submit" className={styles.button}>
          <span className={styles["button-icon"]}>🔍</span>
        </button>
        <input
          className={styles.input}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

export default Searchbar;

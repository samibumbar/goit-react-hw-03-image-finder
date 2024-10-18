import React from "react";
import styles from "./feedback-option.module.css";

type FeedbackOptionProps = {
  options: string[];
  onLeaveFeedback: (type: string) => void;
};

const FeedbackOptions: React.FC<FeedbackOptionProps> = ({
  options,
  onLeaveFeedback,
}) => {
  return (
    <div className={styles.feedbackButtons}>
      {options.map((option) => (
        <button
          key={option}
          onClick={() => onLeaveFeedback(option)}
          className={styles.button}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;

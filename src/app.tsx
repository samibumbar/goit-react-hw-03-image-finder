import {
  FeedbackOptions,
  Section,
  Statistics,
  Notification,
} from "./components";
import React, { useState } from "react";
import styles from "./app.module.css";

const App: React.FC = () => {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleFeedback = (type: string) => {
    const feedbackMap: Record<string, keyof typeof state> = {
      "😊": "good",
      "😐": "neutral",
      "😢": "bad",
    };

    setState((prevState) => ({
      ...prevState,
      [feedbackMap[type]]: prevState[feedbackMap[type]] + 1,
    }));
  };

  const countTotalFeedback = () => state.good + state.neutral + state.bad;

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total > 0 ? Math.round((state.good / total) * 100) : 0;
  };

  const totalFeedback = countTotalFeedback();

  return (
    <div className={styles.containerFeedback}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={["😊", "😐", "😢"]}
          onLeaveFeedback={handleFeedback}
        />
      </Section>

      {totalFeedback > 0 ? (
        <Section title="Statistics">
          <Statistics
            good={state.good}
            neutral={state.neutral}
            bad={state.bad}
            total={totalFeedback}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
};

export default App;

import styles from "./statistic.module.css";

type StatisticsProps = {
  good: number;
  neutral: number;
  bad: number;
  total: number;
  positivePercentage: number;
};
const Statistics: React.FC<StatisticsProps> = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div className={styles.lists}>
      <p className={styles.p}>Good:{good}</p>
      <p className={styles.p}>Neutral:{neutral}</p>
      <p className={styles.p}>Bad:{bad}</p>
      <p className={styles.p}>Total:{total}</p>
      <p className={styles.p}>Positive Feedback: {positivePercentage}%</p>
    </div>
  );
};
export default Statistics;

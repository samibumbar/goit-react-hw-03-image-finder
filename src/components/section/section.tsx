import styles from "./section.module.css";
type SectionProps = {
  title: string;
  children: React.ReactNode;
};
const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <section>
      <h2 className={styles.h2}>{title}</h2>
      {children}
    </section>
  );
};
export default Section;

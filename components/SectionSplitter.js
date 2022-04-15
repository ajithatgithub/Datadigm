import styles from "../styles/Components/SectionSplitter.module.css";

const SectionSplitter = ({ title, descriptionTop, descriptionBottom }) => {
  return (
    <div className={styles.grid}>
      <div className={styles.grid_left}>
        <h1>{title}</h1>
      </div>
      <div className={styles.grid_right}>
        <p>{descriptionTop}</p>
        <span>{descriptionBottom}</span>
      </div>
    </div>
  );
};

export default SectionSplitter;

import styles from "../styles/Components/SectionLayout.module.css";

const SectionLayout = ({ children }) => {
  return (
    <section className={styles.main} data-scroll>
      <div className={styles.content}>
        <div className={styles.container}>{children}</div>
      </div>
    </section>
  );
};

export default SectionLayout;

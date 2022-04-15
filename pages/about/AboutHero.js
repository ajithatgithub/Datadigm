import styles from "../../styles/About/AboutHero.module.css";

const AboutHero = () => {
  return (
    <section data-scroll className={styles.main}>
      <div className={styles.content}>
        <div className={styles.container}>
          {/* Hero title */}
          <div className={styles.hero}>
            <div className={styles.wrapper}>
              <h1>
                Not just to stay alive,
                <span>But to keep on Innovating</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;

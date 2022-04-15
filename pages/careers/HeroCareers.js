import Image from "next/image";

import styles from "../../styles/Careers/HeroCareers.module.css";
import CareersHeroImage from "../../public/images/careers/img_CareersHero.png";

const HeroCareers = () => {
  return (
    <section className={styles.main} data-scroll>
      <div className={styles.outerGrid}>
        <div className={styles.outerGridLeft}>
          <div className={styles.content}>
            <div className={styles.container}>
              <div className={styles.body} data-scroll data-scroll-speed="1">
                <h1>Join the Team</h1>
                <p>Find the right next opportunity for your career</p>
                <div className={styles.btn}>Explore</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.outerGridRight}>
          <div className={styles.imageContainer}>
            <Image src={CareersHeroImage} alt="Careers Showcase" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroCareers;

import Image from "next/image";

import HeroDotImage from "../../public/images/services/DotOrange.png";
import HeroImage from "../../public/images/services/Services_Hero.png";
import styles from "../../styles/Services/HeroSection.module.css";

const HeroSection = () => {
  return (
    <section className={styles.main} data-scroll>
      <div className={styles.content}>
        <div className={styles.container}>
          <div className={styles.grid}>
            <div className={styles.grid_left}>
              <div className={styles.wrapper}>
                <h1>Data plays Major Role</h1>
                <p>
                  Transform into a Data-Driven organization and Take Decision
                  based Analytics and Insights
                </p>
                <div className={styles.btn}>Learn More</div>
              </div>
            </div>
            <div className={styles.grid_right}>
              <div className={styles.image_container}>
                <Image src={HeroDotImage} alt="Hero_Showcase" />
              </div>
              <div className={styles.image_overlay}>
                <Image src={HeroImage} alt="Hero_Showcase" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

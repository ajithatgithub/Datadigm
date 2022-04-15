import HeroImage from "../../public/images/hero/Hero_1.png";
import HeroDotImage from "../../public/images/hero/hero_bg_dots.png";
import Image from "next/image";

import styles from "../../styles/home/Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.main} data-scroll>
      <div className={styles.outer_grid}>
        <div className={styles.outer_grid_left}>
          <div className={styles.content}>
            <div className={styles.container}>
              <div className={styles.hero_body_container}>
                <div className={styles.hero_body_container_left}>
                  <div className={styles.hero_body}>
                    <h1 data-scroll data-scroll-speed="1">
                      Technology consulting with prime focus on Data
                    </h1>
                    <p data-scroll data-scroll-speed="1">
                      Get your data strategy right, implement modernizing Data
                      Platforms, optimize investments with Business intelligence
                      and make business decisions right.
                    </p>
                    <div
                      className={styles.btn}
                      data-scroll
                      data-scroll-speed="1"
                      data-scroll-delay="0.01"
                    >
                      Explore
                    </div>
                  </div>
                </div>
                <div className={styles.hero_body_container_right}>
                  <div
                    className={styles.image_container}
                    data-scroll
                    data-scroll-speed="2"
                  >
                    <Image
                      src={HeroDotImage}
                      alt="Hero_Showcase"
                      width={200}
                      height={100}
                    />
                  </div>
                  <div className={styles.image_overlay}>
                    <Image src={HeroImage} alt="Hero_Showcase" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.outer_grid_right}></div>
      </div>
    </section>
  );
};

export default Hero;

import styles from "../../styles/home/SubHero.module.css";
import SubHeroImage from "../../public/images/subhero/sub_hero.png";
import Image from "next/image";

const SubHero = () => {
  return (
    <>
      <div
        className={styles.header}
        data-scroll
        data-scroll-speed="1"
        data-scroll-delay="0.01"
      >
        <h3>
          Digital transformation and software development consulting that
          provides cutting-edge engineering solutions to organizations
        </h3>
      </div>
      <div className={styles.body_grid}>
        <div className={styles.body_grid_left}>
          <div
            className={styles.image_container}
            data-scroll
            data-scroll-speed="1"
            data-scroll-delay="0.01"
          >
            <Image
              src={SubHeroImage}
              alt="subHero_showcase"
              height={600}
              width={450}
            />
          </div>
        </div>
        <div className={styles.body_grid_right}>
          <div className={styles.subhero_body}>
            <h1 data-scroll data-scroll-speed="1" data-scroll-delay="0.01">
              Take Business Decisions based on your Data
            </h1>
            <p data-scroll data-scroll-speed="1" data-scroll-delay="0.01">
              Get your data strategy right, implement modernizing Data
              Platforms, optimize investments with Business intelligence and
              make business decisions right.
            </p>
            <div
              className={styles.btn}
              data-scroll
              data-scroll-speed="1"
              data-scroll-delay="0.01"
            >
              Learn More
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubHero;

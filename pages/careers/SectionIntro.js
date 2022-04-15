import Image from "next/image";
import styles from "../../styles/Careers/SectionIntro.module.css";

const SectionIntro = ({ titleT, titleB, section, imagePath }) => {
  return (
    <div className={styles.grid}>
      <div className={styles.grid_left}>
        <div className={styles.header}>
          <h1 data-scroll data-scroll-speed="1" data-scroll-delay="0.01">
            {titleT}
          </h1>
          <span data-scroll data-scroll-speed="2" data-scroll-delay="0.02">
            {titleB}
          </span>
        </div>
      </div>
      <div className={styles.grid_right}>
        <div className={styles.image_container}>
          {imagePath ? (
            <Image
              src={require(`../../public/images/careers/${imagePath}`)}
              alt="Our Services"
            />
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SectionIntro;

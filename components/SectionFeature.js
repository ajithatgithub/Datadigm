import Image from "next/image";

import styles from "../styles/Components/SectionFeature.module.css";
import HeroDotImage from "../public/images/hero/hero_bg_dots.png";

const SectionFeature = ({
  category,
  title,
  description,
  section,
  imageSrc,
  flexDirectionInvert,
  boxShadow = true,
}) => {
  const ImagePath = require(`../public/images/${section}/${imageSrc}`);

  return (
    <div className={styles.item}>
      <div className={styles.main_title}>
        <div data-scroll data-scroll-speed="1">
          <h1>{title}</h1>
        </div>
      </div>

      <div
        className={flexDirectionInvert ? styles.item_invert : styles.item_grid}
      >
        <div className={styles.item_grid_left}>
          <div
            className={styles.item_wrapper}
            data-scroll
            data-scroll-speed="0"
            data-scroll-delay="0"
          >
            <div className={styles.category}>{category}</div>
            <h1>{title}</h1>
            <p>{description}</p>
            <div className={styles.btn}>Learn More</div>
          </div>
        </div>
        <div
          className={styles.item_grid_right}
          data-scroll
          data-scroll-speed="0"
          data-scroll-delay="0"
        >
          {/* <div className={styles.image_overlay}>
            <Image
              src={HeroDotImage}
              alt="Hero_Showcase"
              height={120}
              width={250}
            />
          </div> */}
          <div
            className={
              boxShadow ? styles.image_container : styles.image_container_shadow
            }
          >
            <Image src={ImagePath} alt={title} placeholder="blur" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFeature;

import Image from "next/image";
import SectionLayout from "../../components/SectionLayout";
import Left from "../../public/images/about/l.jpg";
import Right from "../../public/images/about/r.jpg";

import styles from "../../styles/About/StoryImage.module.css";

const StoryImage = () => {
  return (
    <div className={styles.grid} data-scroll data-scroll-speed="2">
      <div
        className={styles.grid_left}
        data-scroll
        data-scroll-call="dynamicBackground"
        data-scroll-repeat
      >
        <div className={styles.image_container}>
          <Image
            src={Left}
            alt="Our Story"
            data-scroll
            data-scroll-speed="-2"
          />
        </div>
      </div>
      <div
        className={styles.grid_right}
        data-scroll
        data-scroll-call="dynamicBackground"
        data-scroll-repeat
      >
        <div className={styles.image_container}>
          <Image
            src={Right}
            alt="Our Story"
            data-scroll
            data-scroll-speed="-2"
          />
        </div>
      </div>
    </div>
  );
};

export default StoryImage;

import OurApproachImage from "../../public/images/about/OurApproach.jpg";
import Image from "next/image";

import styles from "../../styles/About/ApproachImage.module.css";

const ApproachImage = () => {
  return (
    <div data-scroll data-scroll-speed="1">
      <div
        className={styles.image_container}
        data-scroll
        data-scroll-call="dynamicBackground"
        data-scroll-repeat
      >
        <Image
          src={OurApproachImage}
          alt="Our Story"
          data-scroll
          data-scroll-speed="-2"
        />
      </div>
    </div>
  );
};

export default ApproachImage;

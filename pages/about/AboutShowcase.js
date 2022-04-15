import Image from "next/image";
import styles from "../../styles/About/AboutShowcase.module.css";
import ShowcaseImage from "../../public/images/about/Showcase.jpg";
import { useLocomotiveScroll } from "react-locomotive-scroll";

import { useRef } from "react";

const AboutShowcase = () => {
  return (
    <section className={styles.main} data-scroll data-scroll-speed="2">
      <div
        className={styles.image_container}
        data-scroll
        data-scroll-call="dynamicBackground"
        data-scroll-repeat
      >
        <Image
          src={ShowcaseImage}
          alt="Showcase About"
          data-scroll
          data-scroll-speed="-2"
        />
      </div>
    </section>
  );
};

export default AboutShowcase;

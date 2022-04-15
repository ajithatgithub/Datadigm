import styles from "../../styles/About/Achievements.module.css";
import { useState } from "react";
import CarouselContainer from "./CarouselContainer";
import Link from "next/link";

const caroselData = [{}];

const Achievements = () => {
  const [selected, setSelected] = useState(1);

  const handleSelected = (e) => {};

  return (
    <div className={styles.wrapper} data-scroll>
      <h1>Some of our Achievements </h1>
      <CarouselContainer />
      <div className={styles.ViewAll}>
        <Link href="/posts">
          <a>
            <div className={styles.btn}>
              <span>View All</span>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Achievements;

import styles from "../styles/Components/SectionHighlight.module.css";
import second from "../public/images/Icons/1.png";

import Image from "next/image";

const projectData = [
  {
    id: 1,
    title: "Challenging Projects",
    image: "1.png",
  },
  {
    id: 2,
    title: "Flat hierarchy",
    image: "2.png",
  },
  {
    id: 3,
    title: "Work-life",
    image: "3.png",
  },
  {
    id: 4,
    title: "Education",
    image: "4.png",
  },
];

const SectionHighlight = () => {
  return (
    <section className={styles.body} data-scroll>
      <div className={styles.portfolio_container}>
        <div className={styles.portfolio_wrapper}>
          <div className={styles.header}>
            {projectData.map(({ title, image }, index) => (
              <div
                className={styles.feature}
                data-scroll
                data-scroll-speed="-1"
                key={index}
              >
                <div className={styles.imageContainer}>
                  <Image
                    src={require(`../public/images/Icons/${image}`)}
                    alt="feature Image"
                    width={50}
                    height={50}
                  />
                </div>
                <h1>{title}</h1>
              </div>
            ))}
          </div>
          {/* Description */}
          <div className={styles.footer}>
            <p>
              We’re a team of professionals who are smart, passionate, and
              committed to having fun innovating and helping businesses succeed.
              The bottom line: We understand that everything we do has an impact
              – from your career to your livelihood - and we take that to heart.
              Make a difference, truly enjoy your work, and build the career
              you’ve always wanted — with Datadigm!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionHighlight;

import Image from "next/image";
import styles from "../../styles/Careers/Team.module.css";

const Team = () => {
  return (
    <div className={styles.grid}>
      <div className={styles.grid_left}>
        <div className={styles.header} data-scroll>
          <h1>Meet Our Team</h1>
          <p>
            At Datadigm you can work with organizations you love. We know how
            important it is to find a great fit, and we work hard to find
            opportunities that feel good for you as a professional, and as a
            person.
          </p>
        </div>
      </div>
      <div className={styles.grid_right}>
        {[1, 2, 3].map((item, index) => (
          <div
            className={styles.imageContainer}
            data-scroll
            data-scroll-speed="1"
            data-scroll-delay="0.01"
            key={index}
          >
            <Image
              src={require(`../../public/images/Our Team/${item}.jpg`)}
              alt="Our Team"
              width={400}
              height={250}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;

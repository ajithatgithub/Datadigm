import styles from "../../styles/About/TechTrends.module.css";
import Image from "next/image";

// import img_1 from "../../public/images/techtrends/1.png";

const techTrends = [
  { id: 1, imagePath: "../../public/images/techtrends/1.png" },
  { id: 2, imagePath: "../../public/images/techtrends/2.png" },
  { id: 3, imagePath: "../../public/images/techtrends/3.png" },
  { id: 4, imagePath: "../../public/images/techtrends/4.png" },
  { id: 5, imagePath: "../../public/images/techtrends/5.png" },
  { id: 6, imagePath: "../../public/images/techtrends/6.png" },
  { id: 7, imagePath: "../../public/images/techtrends/7.png" },
  { id: 8, imagePath: "../../public/images/techtrends/8.png" },
  { id: 9, imagePath: "../../public/images/techtrends/9.png" },
  { id: 10, imagePath: "../../public/images/techtrends/10.png" },
  { id: 11, imagePath: "../../public/images/techtrends/11.png" },
  { id: 12, imagePath: "../../public/images/techtrends/12.png" },
  { id: 13, imagePath: "../../public/images/techtrends/13.png" },
  { id: 14, imagePath: "../../public/images/techtrends/14.png" },
  { id: 15, imagePath: "../../public/images/techtrends/15.png" },
];

const TechTrends = () => {
  // const ImagePath = require(`../../public/images/techtrends/1.png`);

  return (
    <div className={styles.wrapper} data-scroll>
      <h1>Keeping Up with Latest Tech Trends</h1>
      <div className={styles.list_tems}>
        {techTrends.map((item, index) => (
          <div className={styles.item} key={index}>
            <Image
              src={require(`../../public/images/techtrends/${item.id}.png`)}
              alt="tech trends"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechTrends;

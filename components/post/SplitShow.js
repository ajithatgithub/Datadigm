import styles from "../../styles/Components/Post/SplitShow.module.css";
import SplitShowItem from "./SplitShowItem";

const SplitShow = ({ left, right }) => {
  return (
    <div className={styles.main}>
      <div className={styles.grid_left}>
        {left &&
          left.map((item, index) => (
            <SplitShowItem
              key={index}
              title={item.title}
              image={item.coverImage}
              slug={item.slug}
            />
          ))}
      </div>
      <div className={styles.grid_right}>
        {right &&
          right.map((item, index) => (
            <SplitShowItem
              key={index}
              title={item.title}
              image={item.coverImage}
              slug={item.slug}
            />
          ))}
      </div>
    </div>
  );
};

export default SplitShow;

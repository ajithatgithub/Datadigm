import styles from "../../styles/Components/Post/SplitShowItem.module.css";
import Image from "next/image";
import Link from "next/link";

const SplitShowItem = ({ title, image, slug }) => {
  return (
    <div className={styles.item} data-scroll data-scroll-speed="1">
      <Link href={`/posts/${slug}`}>
        <a>
          <div
            className={styles.imageContainer}
            data-scroll
            data-scroll-call="dynamicBackground"
            data-scroll-repeat
          >
            {image ? (
              <Image
                src={image}
                alt="image"
                width={280}
                height={380}
                layout="responsive"
                data-scroll
                data-scroll-speed="-2"
              />
            ) : (
              <div></div>
            )}
          </div>
          <div className={styles.title}>{title}</div>
        </a>
      </Link>
    </div>
  );
};

export default SplitShowItem;

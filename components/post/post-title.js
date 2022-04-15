import styles from "../../styles/Components/Post/PostTitle.module.css";

export default function PostTitle({ children }) {
  return <h1 className={styles.title}>{children}</h1>;
}

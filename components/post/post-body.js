// import markdownStyles from "./markdown-styles.module.css";
import styles from "../../styles/Components/Post/PostBody.module.css";
import Link from "next/link";

export default function PostBody({ content }) {
  return (
    <>
      <div className={styles.main}>
        <span>Solution</span>
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
      <div className={styles.footer}>
        <Link href="/posts">
          <a>
            <span>Back to All Posts</span>
          </a>
        </Link>
      </div>
    </>
  );
}

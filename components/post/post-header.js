import Avatar from "../post/avatar";
import DateFormatter from "../post/date-formatter";
import CoverImage from "../post/cover-image";
import PostTitle from "../post/post-title";

export default function PostHeader({ title }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
    </>
  );
}

import { useParams, Link } from "react-router-dom";

import { useAppSelector } from "../../app/hooks";
import { selectPostById } from "./postsSlice";
export default function SinglePostPage() {
  const { postId } = useParams();

  //return a single post that whose id matches postId
  const post = useAppSelector((state) => selectPostById(state, postId!));

  console.log("single post: ", post);

  if (!post) {
    return (
      <section>
        <h1>Post not found!</h1>
      </section>
    );
  }

  return (
    <section>
      <article>
        <h2>{post.title}</h2>
        <p className="post-content">{post.content}</p>
        <Link to={`/editPost/${post.id}`}>Edit Post</Link>
      </article>
    </section>
  );
}

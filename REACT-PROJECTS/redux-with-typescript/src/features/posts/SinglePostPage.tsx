import { useParams, Link } from "react-router-dom";

import { useAppSelector } from "../../app/hooks";
import { selectPostById } from "./postsSlice";
import PostAuthor from "../../components/PostAuthor";
import TimeAgo from "../../components/TimeAgo";
import ReactionButton from "../../components/ReactionButton";
import { selectCurrentUsername } from "../auth/authSlice";

export default function SinglePostPage() {
  const params = useParams();
  const { postId } = params;
  const currentUserId = useAppSelector(selectCurrentUsername)!;

  console.log("SinglePostPage postId:", postId);

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

  const canEdit = currentUserId === post?.user;
  return (
    <section>
      <article>
        <h2>{post.title}</h2>
        <p className="post-content">{post.content}</p>
        <PostAuthor userId={post.user} />
        <TimeAgo timestamp={post.date} />
        <ReactionButton post={post} />
        {canEdit && (
          <Link to={`/editPost/${postId}`} className="button">
            Edit Post
          </Link>
        )}
        <Link to="/posts" className="button">Back to Posts</Link>
      </article>
    </section>
  );
}

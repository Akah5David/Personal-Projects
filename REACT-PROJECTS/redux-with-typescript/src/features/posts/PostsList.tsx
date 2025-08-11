import { Link } from "react-router-dom";

import { useAppSelector } from "../../app/hooks";
import { selectPosts } from "./postsSlice";
import PostAuthor from "../../components/PostAuthor";
import TimeAgo from "../../components/TimeAgo";
import ReactionButton from "../../components/ReactionButton";

export const PostsList = () => {
  const posts = useAppSelector(selectPosts);
  const sortedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  const renderedPosts = sortedPosts.map((post) => (
    <article className="post-excerpt" key={post.id}>
      <Link to={`/posts/${post.id}`} className="post-title">
        {post.title}
      </Link>
      <p className="post-content">{post.content.substring(0, 100)}</p>
      <PostAuthor userId={post.user} />
      <TimeAgo timestamp={post.date} />
      <ReactionButton post={post} />
    </article>
  ));

  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
};

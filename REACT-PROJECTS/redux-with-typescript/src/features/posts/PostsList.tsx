import { Link } from "react-router-dom";
import React, { useEffect } from "react";

import Spinner from "../../components/Spinner";
import PostAuthor from "../../components/PostAuthor";
import TimeAgo from "../../components/TimeAgo";
import ReactionButtons from "../../components/ReactionButton";

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  // selectPosts,
  selectPostById,
  selectPostIds,
  selectPostsStatus,
  selectPostsError,
  fetchPosts,
  // type Post,
} from "./postsSlice";

interface postExcerptProps {
  postId: string;
}

const PostExcerpt = React.memo(function PostExcerpt({
  postId,
}: postExcerptProps) {
  const post = useAppSelector((state) => selectPostById(state, postId));

  return (
    <article key={post.id}>
      <h3>
        <Link to={`/posts/${post.id}`}>{post.title}</Link>
      </h3>
      <div>
        <PostAuthor userId={post.user} />
        <TimeAgo timestamp={post.date} />
      </div>
      <p className="post-content">{post.content.substring(0, 100)}</p>
      <ReactionButtons post={post} />
    </article>
  );
});

export const PostsList = () => {
  const dispatch = useAppDispatch();
  // const postsState = useAppSelector(selectPosts);
  const postStatus = useAppSelector(selectPostsStatus);
  const postsError = useAppSelector(selectPostsError);
  const orderedPostIds = useAppSelector(selectPostIds);

  useEffect(() => {
    if (postStatus === "idle") {
      dispatch(fetchPosts());
    }
  }, [postStatus, dispatch]);

  let content: React.ReactNode;

  if (postStatus === "pending") {
    content = <Spinner text="loading..." />;
  } else if (postStatus === "succeeded") {
    // const sortedPosts = postsState.posts.entities
    //   .slice()
    //   .sort((a, b) => b.date.localeCompare(a.date));

    content = orderedPostIds.map((postId) => (
      <PostExcerpt key={postId} postId={postId} />
    ));
  } else if (postStatus === "failed") {
    content = <div>{postsError}</div>;
  }

  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {content}
    </section>
  );
};

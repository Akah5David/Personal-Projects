import { useParams, useNavigate } from "react-router-dom";
import React from "react";

import { postUpdated } from "../features/posts/postsSlice";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { selectPostById } from "../features/posts/postsSlice";

export default function EditPostForm() {
  const navigate = useNavigate();
  const { postId } = useParams();
  const dispatch = useAppDispatch();
  const post = useAppSelector((state) => selectPostById(state, postId!));

  interface AddFormElements extends HTMLFormControlsCollection {
    postTitle: HTMLInputElement;
    postContent: HTMLTextAreaElement;
  }

  interface AddFormElements extends HTMLFormElement {
    elements: AddFormElements;
  }

  const handleSubmit = (e: React.FormEvent<AddFormElements>) => {
    e.preventDefault();

    const { elements } = e.currentTarget;
    const title = elements.postTitle.value;
    const content = elements.postContent.value;

    console.log(post);

    if (!(title && content) || !post) {
      return (
        <section>
          <h1>Post not found!</h1>
        </section>
      );
    }

    dispatch(postUpdated({ id: post.id, title, content }));
    navigate(`/post/:${postId}`);
  };

  return (
    <section>
      <h2>Edit Post</h2>
      <form className="form-data" onSubmit={handleSubmit}>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          name="postTitle"
          id="postTitle"
          defaultValue={post?.title}
          required
        />
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          defaultValue={post?.title}
          required
        ></textarea>

        <button>Save Post</button>
      </form>
    </section>
  );
}

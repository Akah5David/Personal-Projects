import { PostsList } from "./PostsList";
import { AddPostForm } from "./AddPostForm";


export function PostsMainPage() {
  return (
    <main>
      <PostsList />
      <AddPostForm />
    </main>
  );
}

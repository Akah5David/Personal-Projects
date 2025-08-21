import { useParams, Link } from "react-router-dom";

import { useAppSelector } from "../../app/hooks";
import { selectUserById } from "./usersSlice";
import { selectPostsByUser } from "../posts/postsSlice";

export default function SpecificUserPage() {
  const params = useParams();
  const userId = params.userId;

  const user = useAppSelector((state) => selectUserById(state, userId!));
  const postsOfUser = useAppSelector((state) =>
    selectPostsByUser(state, userId!)
  );

  if (!user) {
    return (
      <section>
        <h2>User not found!</h2>
      </section>
    );
  }

  const listOfUserPosts = postsOfUser.map((post) => (
    <li key={post.id}>
      <Link to={`/posts/${post.id}`}>{post.title}</Link>
    </li>
  ));

  return (
    <section>
      <h2>{user?.name}</h2>
      <ul>{listOfUserPosts}</ul>
    </section>
  );
}

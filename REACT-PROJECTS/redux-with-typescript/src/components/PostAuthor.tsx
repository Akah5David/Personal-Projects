import { useAppSelector } from "../app/hooks";
import { selectUserById } from "../features/users/usersSlice";

export interface postAuthorProps {
  userId: string;
}
export default function PostAuthor({ userId }: postAuthorProps) {
  const author = useAppSelector((state) => selectUserById(state, userId));

  return <span id = "author">By {author?.name ?? "Unknown author"}</span>;
}

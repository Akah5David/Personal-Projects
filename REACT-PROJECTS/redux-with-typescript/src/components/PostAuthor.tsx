import { useAppSelector } from "../app/hooks";
import { selectUserById } from "../features/users/usersSlice";

export interface postAuthorProps {
  userId: string;
  showPrefix?: boolean;
}

export default function PostAuthor({
  userId,
  showPrefix = true,
}: postAuthorProps) {
  const author = useAppSelector((state) => selectUserById(state, userId));

  return (
    <span id="author">
      {showPrefix ? "by " : null}
      {author?.name ?? "Unknown author"}
    </span>
  );
}

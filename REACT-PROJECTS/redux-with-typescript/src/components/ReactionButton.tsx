import { useAppDispatch } from "../app/hooks";
import {
  type Post,
  type ReactionName,
  reactionAdded,
} from "../features/posts/postsSlice";

interface ReactionProps {
  post: Post;
}

export default function ReactionButton({ post }: ReactionProps) {
  const dispatch = useAppDispatch();

  const reactionEmoji: Record<ReactionName, string> = {
    thumbsUp: "👍",
    hooray: "🎉",
    heart: "❤️",
    rocket: "🚀",
    eyes: "👀",
  };

  //converting object into an array of key value pairs without mutating the original array.
  const reactionButtons = Object.entries(reactionEmoji);

  return (
    <>
      {reactionButtons.map(([emojiName, emoji]) => {
        const reaction = emojiName as ReactionName;
        return (
          <button
            key={reaction}
            type="button"
            className="muted-button reaction-button"
            onClick={() =>
              dispatch(reactionAdded({ postId: post.id, reaction: reaction }))
            }
          >
            {emoji} {post.reactions[reaction]}
          </button>
        );
      })}
    </>
  );
}

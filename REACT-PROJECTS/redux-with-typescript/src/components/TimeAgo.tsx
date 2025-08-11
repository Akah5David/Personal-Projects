import { parseISO, formatDistanceToNow } from "date-fns";
interface TimeAgoProps {
  timestamp: string;
}

export default function TimeAgo({ timestamp }: TimeAgoProps) {
  let timeAgo = "";
  if (timestamp) {
    const date = parseISO(timestamp); // Parse the ISO date string to a javascript Date object

    const timePeriod = formatDistanceToNow(date); // Get the time period from now

    timeAgo = `${timePeriod} ago`; // Format the time period
  }
  return (
    <time dateTime={timestamp} title={timestamp}>
      &nbsp; <i>{timeAgo}</i>
    </time>
  );
}

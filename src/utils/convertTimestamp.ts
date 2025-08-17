import { formatDistanceToNow } from "date-fns";

export const convertTimestampToReadableDate = (created_datetime: string) => {

  if (!created_datetime) return

  const date = new Date(created_datetime);
  const formattedDate = formatDistanceToNow(date, { addSuffix: true });

  return formattedDate
}
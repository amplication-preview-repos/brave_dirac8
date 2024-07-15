import { Comment as TComment } from "../api/comment/Comment";

export const COMMENT_TITLE_FIELD = "commentator";

export const CommentTitle = (record: TComment): string => {
  return record.commentator?.toString() || String(record.id);
};

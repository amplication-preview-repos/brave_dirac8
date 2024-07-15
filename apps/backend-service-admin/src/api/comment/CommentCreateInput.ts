import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";

export type CommentCreateInput = {
  content?: string | null;
  commentator?: string | null;
  post?: PostWhereUniqueInput | null;
  commentUser?: string | null;
};

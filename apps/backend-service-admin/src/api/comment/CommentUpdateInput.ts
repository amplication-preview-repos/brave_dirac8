import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";

export type CommentUpdateInput = {
  content?: string | null;
  commentator?: string | null;
  post?: PostWhereUniqueInput | null;
  commentUser?: string | null;
};

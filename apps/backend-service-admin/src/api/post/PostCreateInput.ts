import { CommentCreateNestedManyWithoutPostsInput } from "./CommentCreateNestedManyWithoutPostsInput";

export type PostCreateInput = {
  title?: string | null;
  content?: string | null;
  author?: string | null;
  comments?: CommentCreateNestedManyWithoutPostsInput;
  postAuthor?: string | null;
};

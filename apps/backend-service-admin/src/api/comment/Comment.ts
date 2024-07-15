import { Post } from "../post/Post";

export type Comment = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  content: string | null;
  commentator: string | null;
  post?: Post | null;
  commentUser: string | null;
};

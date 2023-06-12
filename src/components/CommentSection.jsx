import { CreateComment } from "./CreateComment";
import { Post } from "./Post";

import "./CommentSection.css";

export function CommentSection() {
  return (
    <div className="wrapper">
      <CreateComment />
      <Post />
    </div>
  );
}

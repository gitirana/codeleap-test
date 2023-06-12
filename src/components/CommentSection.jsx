import { CreateComment } from "./CreateComment";
import { Post } from "./Post";

import "./styles/CommentSection.css";

export function CommentSection() {
  return (
    <div className="wrapper">
      <CreateComment />
      <Post />
    </div>
  );
}

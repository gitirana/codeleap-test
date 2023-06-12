import { Button } from "./Button";
import "./styles/CreateComment.css";

export function CreateComment() {
  return (
    <div className="container">
      <strong className="title">What’s on your mind?</strong>

      <span className="label">Title</span>
      <input type="text" placeholder="Hello world" />

      <span className="label">Content</span>
      <textarea placeholder="Content here" />

      <Button name="Create" />
    </div>
  );
}

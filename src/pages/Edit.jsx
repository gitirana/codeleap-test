import { Button } from "../components/Button";
import Modal from "react-modal";

export function Edit() {
  return (
    <div className="wrapper">
      <Modal isOpen={true} className="delete" overlayClassName="overlay">
        <strong className="title">Edit item</strong>

        <span className="label">Title</span>
        <input type="text" placeholder="Hello world" />

        <span className="label">Content</span>
        <textarea placeholder="Content here" />

        <div className="buttons">
          <Button name="Cancel" type="secondary" />
          <Button name="Delete" type="save" hasIcon={true} />
        </div>
      </Modal>
    </div>
  );
}

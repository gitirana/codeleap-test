import { Button } from "../components/Button";

import Modal from "react-modal";
import "./styles/Delete.css";

export function Delete() {
  return (
    <div className="wrapper">
      <Modal isOpen={true} className="delete" overlayClassName="overlay">
        <strong className="title">
          Are you sure you want to delete this item?
        </strong>

        <div className="buttons">
          <Button name="Cancel" type="secondary" />
          <Button name="Delete" type="error" hasIcon={true} />
        </div>
      </Modal>
    </div>
  );
}

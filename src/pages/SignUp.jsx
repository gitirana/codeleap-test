import Modal from "react-modal";
import { Button } from "../components/Button";

import "./styles/SignUp.css";

export function SignUp() {
  return (
    <div className="wrapper">
      <Modal isOpen={true} className="modal" overlayClassName="overlay">
        <strong className="title">Welcome to CodeLeap network!</strong>

        <span className="label">Please enter your username</span>
        <input type="text" placeholder="John doe" />

        <Button />
      </Modal>
    </div>
  );
}

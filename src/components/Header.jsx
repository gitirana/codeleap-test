import "./Header.css";
import { Trash, PencilLine } from "@phosphor-icons/react";

export function Header(props) {
  return (
    <div className="Header">
      <strong className="title">{props.title}</strong>

      <div className="toolbar">
        {props.hasIcon && <Trash className="icon" size={24} />}
        {props.hasIcon && <PencilLine className="icon" size={24} />}
      </div>
    </div>
  );
}

import { Warning, FloppyDisk } from "@phosphor-icons/react";
import "./Button.css";

export function Button(props) {
  return (
    <footer>
      <button className={props.type}>
        {props.hasIcon && props.type === "error" ? (
          <Warning />
        ) : (
          props.type === "save" && <FloppyDisk />
        )}
        {props.name}
      </button>
    </footer>
  );
}

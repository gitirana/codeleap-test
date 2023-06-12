import "./Header.css";

export function Header(props) {
  return (
    <div className="Header">
      <strong className="title">{props.title}</strong>
    </div>
  );
}

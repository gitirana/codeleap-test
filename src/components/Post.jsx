import { Header } from "./Header";
import "./styles/Post.css";

export function Post() {
  return (
    <div className="container post">
      <Header title="My First Post at CodeLeap Network" hasIcon="true" />

      <div className="postSection">
        <div className="author">
          <strong>@Victor</strong>
          <time>25 minutos atrás</time>
        </div>

        <span className="postContent">
          Curabitur suscipit suscipit tellus. Phasellus consectetuer vestibulum
          elit. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas. Maecenas egestas arcu quis ligula
          mattis placerat. Duis vel nibh at velit scelerisque suscipit. Duis
          lobortis massa imperdiet quam. Aenean posuere, tortor sed cursus
          feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis
          lacus. Fusce a quam. Nullam vel sem. Nullam cursus lacinia erat.
        </span>
      </div>
    </div>
  );
}

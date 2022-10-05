import { CSSProperties } from "react";
import styled from "styled-components";
import { ITodo } from "./types/Todo";

interface Props extends ITodo {
  onDelete: (id: string) => void;
  onMarkIsDone: (id: string) => void;
}

function ToDo({ id, description, isDone, onDelete, onMarkIsDone }: Props) {
  const styles: CSSProperties = {
    color: isDone ? "green" : "black",
  };

  return (
    <TodoListItem style={styles}>
      {description}
      <button className="clickable" onClick={() => onDelete(id)}>
        Delete
      </button>
      <button className="clickable" onClick={() => onMarkIsDone(id)}>
        Done
      </button>
    </TodoListItem>
  );
}

export default ToDo;

// Styled components skapar ett unikt id som gör att CSS-reglerna aldrig
// krockar.
// Däremot har inline styles prio över allt annat. Vilket vi har på rad 16.
const TodoListItem = styled.li`
  cursor: pointer;
`;

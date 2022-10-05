import { ITodo } from "./types/Todo";
import ToDo from "./ToDo";
interface Props {
  todos: ITodo[];
  onDelete: (id: string) => void;
  onMarkIsDone: (id: string) => void;
}

function ToDoList({ todos, onDelete, onMarkIsDone }: Props) {
  return (
    <ul>
      {todos.map((todo) => (
        <ToDo
          key={todo.id}
          onDelete={onDelete}
          onMarkIsDone={onMarkIsDone}
          {...todo}
        />
      ))}
    </ul>
  );
}

export default ToDoList;

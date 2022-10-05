import { useState } from "react";
import TodoForm from "./TodoForm";
import ToDoList from "./ToDoList";
import { ITodo } from "./types/Todo";
import functions from "./functions";

function App() {
  const todosInDb: ITodo[] = [
    { id: "1", description: "Do this...", isDone: false },
    { id: "2", description: "Then this...", isDone: false },
    { id: "3", description: "Then that...", isDone: false },
  ];

  // Genom att sätta typen ITodo[] till useState så behöver man inte fylla
  // statet direkt.
  const [todos, setTodos] = useState<ITodo[]>(todosInDb);

  const handleDelete = (id: string) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  const handleMarkIsDone = (id: string) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isDone = true;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const handleAdd = (todo: ITodo) => {
    setTodos([...todos, todo]);
  };

  // Importeras endast för att testa typescript från functions.ts
  const {
    max,
    landscape,
    rectangleArea,
    triangleArea,
    circleArea,
    tellFortune,
    calculateDogAge,
    dogAgeWithGivenFactor,
    daysOfSupplies,
    toCelsius,
    toFahrenheit,
    ageInSeconds,
    area,
    checkSpeed,
  } = functions;

  return (
    <div>
      <TodoForm onAdd={handleAdd} arrayLength={todos.length} />
      <ToDoList
        todos={todos}
        onDelete={handleDelete}
        onMarkIsDone={handleMarkIsDone}
      />
    </div>
  );
}

export default App;

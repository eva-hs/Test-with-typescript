import { ChangeEvent, FormEvent, useState } from "react";
import { ITodo } from "./types/Todo";

interface Props {
  onAdd: (todo: ITodo) => void;
  arrayLength: number;
}

function TodoForm({ onAdd, arrayLength }: Props) {
  const [value, setValue] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Räknar upp id så vi kan lägga till mer än en sak i listan
    const newId: string = String(arrayLength + 1);

    onAdd({ id: newId, description: value, isDone: false });

    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={value} onChange={handleChange} />
    </form>
  );
}

export default TodoForm;

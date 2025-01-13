import React, { useState } from "react";

interface TaskFormProps {
  onAddTask: (text: string) => void;
}

export default function TaskForm({ onAddTask }: TaskFormProps) {
  const [taskText, setTaskText] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (taskText.trim() === "") return; //Não adiciona task vazia

    onAddTask(taskText);
    setTaskText("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nova tarefa..."
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />

        <button type="submit">Adicionar</button>
      </form>
    </>
  );
}

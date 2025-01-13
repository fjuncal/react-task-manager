import React, { useState } from "react";
import { styled } from "styled-components";
import { useTaskContext } from "../context/TaskContextType";

export default function TaskForm() {
  const [taskText, setTaskText] = useState<string>("");
  const { addTask } = useTaskContext();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (taskText.trim() === "") return; //Não adiciona task vazia

    addTask(taskText);
    setTaskText("");
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Nova tarefa..."
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />

        <Button type="submit">Adicionar</Button>
      </Form>
    </>
  );
}

const Form = styled.form`
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
`;

const Input = styled.input`
  flex: 1;
  padding: 8px;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

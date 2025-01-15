import { createContext, ReactNode, useContext, useState } from "react";
import { Task } from "../types/Task";

type FilterType = "all" | "completed" | "active";

interface TaskContextType {
  tasks: Task[];
  addTask: (text: string) => void;
  toggleTask: (id: number) => void;
  deleteTask: (id: number) => void;
  filter: FilterType;
  setFilter: (filter: FilterType) => void;
}

//criando contexto vazio com valores padrão
const TaskContext = createContext<TaskContextType | undefined>(undefined);

// Provedor do contexto
export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, text: "Estudar React com TypeScript", completed: false },
    { id: 2, text: "Fazer exercícios", completed: true },
  ]);

  const [filter, setFilter] = useState<FilterType>("all");

  const addTask = (text: string) => {
    const newTask: Task = {
      id: tasks.length + 1,
      text,
      completed: false,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const toggleTask = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, toggleTask, deleteTask, filter, setFilter }}
    >
      {children}
    </TaskContext.Provider>
  );
};

// Hook personalizado para consumir o contexto
export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTaskContext must be used within a TaskProvider");
  }
  return context;
};

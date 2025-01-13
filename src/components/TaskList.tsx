import { styled } from "styled-components";
import { Task } from "../types/Task";

interface TaskListProps {
  task: Task[];
  onToggleTask: (id: number) => void;
}

export default function TaskList({ task, onToggleTask }: TaskListProps) {
  return (
    <>
      <List>
        {task.map((task) => (
          <ListItem key={task.id}>
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
            >
              {task.text}
            </span>
            <button onClick={() => onToggleTask(task.id)}>
              {task.completed ? "Desmarcar" : "Marcar"}
            </button>
          </ListItem>
        ))}
      </List>
    </>
  );
}

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  border-bottom: 1px solid #ccc;

  &:last-child {
    border-bottom: none;
  }

  span {
    flex: 1;
  }

  button {
    margin-left: 8px;
    background-color: #007bff;
    color: white;
    border: none;
    padding: 4px 8px;
    cursor: pointer;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

import { styled } from "styled-components";
import { useTaskContext } from "../context/TaskContextType";
import { Link } from "react-router-dom";

export default function TaskList() {
  const { tasks, toggleTask, deleteTask, filter } = useTaskContext();

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "active") return !task.completed;
    return true;
  });
  return (
    <>
      <List>
        {filteredTasks.map((task) => (
          <ListItem key={task.id}>
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
            >
              <Link to={`/task/${task.id}`}>{task.text}</Link>
            </span>
            <button onClick={() => toggleTask(task.id)}>
              {task.completed ? "Desmarcar" : "Marcar"}
            </button>
            <button onClick={() => deleteTask(task.id)}>Excluir</button>
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
    cursor: pointer;

    a {
      text-decoration: none;
      color: inherit;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  button {
    margin-left: 8px;
    padding: 4px 8px;
    border: none;
    cursor: pointer;

    &:nth-child(1) {
      background-color: #007bff;
      color: white;

      &:hover {
        background-color: #0056b3;
      }
    }

    &:nth-child(2) {
      background-color: #dc3545;
      color: white;

      &:hover {
        background-color: #a71d2a;
      }
    }
  }
`;

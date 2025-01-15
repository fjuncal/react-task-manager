import { useTaskContext } from "../context/TaskContextType";

export default function TaskFilter() {
  const { filter, setFilter } = useTaskContext();
  return (
    <div>
      <button
        onClick={() => setFilter("all")}
        style={{ fontWeight: filter === "all" ? "bold" : "normal" }}
      >
        Todas
      </button>
      <button
        onClick={() => setFilter("active")}
        style={{ fontWeight: filter === "active" ? "bold" : "normal" }}
      >
        Ativas
      </button>
      <button
        onClick={() => setFilter("completed")}
        style={{ fontWeight: filter === "completed" ? "bold" : "normal" }}
      >
        Concluídas
      </button>
    </div>
  );
}

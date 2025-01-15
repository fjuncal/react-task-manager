import { styled } from "styled-components";
import { useTaskContext } from "../context/TaskContextType";

export default function TaskFilter() {
  const { filter, setFilter } = useTaskContext();
  return (
    <FilterContainer>
      <FilterButton
        onClick={() => setFilter("all")}
        isActive={filter === "all"}
      >
        Todas
      </FilterButton>
      <FilterButton
        onClick={() => setFilter("active")}
        isActive={filter === "active"}
      >
        Ativas
      </FilterButton>
      <FilterButton
        onClick={() => setFilter("completed")}
        isActive={filter === "completed"}
      >
        Concluídas
      </FilterButton>
    </FilterContainer>
  );
}

const FilterContainer = styled.div`
  display: flex;
  gap: 8px;
  margin: 16px 0;
`;

// Botão estilizado
const FilterButton = styled.button<{ isActive: boolean }>`
  padding: 8px 16px;
  font-size: 14px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: ${({ isActive }) => (isActive ? "#007bff" : "#e0e0e0")};
  color: ${({ isActive }) => (isActive ? "white" : "#333")};
  font-weight: ${({ isActive }) => (isActive ? "bold" : "normal")};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ isActive }) => (isActive ? "#0056b3" : "#c0c0c0")};
  }
`;

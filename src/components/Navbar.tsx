import { Link } from "react-router-dom";
import { styled } from "styled-components";

export default function Navbar() {
  return (
    <Nav>
      <Link to="/">Inicio</Link>
      <Link to={"/about"}>Sobre</Link>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;

  a {
    text-decoration: none;
    color: #007bff;
    font-weight: bold;

    &:hover {
      color: #0056b3;
    }
  }
`;

import styled from "styled-components";

const Button = styled.button`
  background-color: ${({ bg }) => (bg ? "#8A1C4A" : "white")};
  color: ${({ color }) => (color ? "#8A1C4A" : "white")};
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  font-size: 1.1rem;
  cursor: pointer;
  padding: 1rem 1.2rem;
  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;

export default Button;

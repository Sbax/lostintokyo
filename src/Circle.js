import styled from "styled-components";
import { theme } from "./style/theme";

const Circle = styled.div`
  cursor: pointer;
  border-radius: 50%;
  background: ${theme.offwhite};
  color: ${theme.offblack};

  height: 3rem;
  width: 3rem;

  > * {
    width: 1rem;
    height: 1rem;

    opacity: 0.75;
  }

  display: flex;
  justify-content: center;
  align-items: center;

  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);

  transition: 300ms ease-in-out all;
  transition-property: box-shadow opacity;

  &:hover {
    box-shadow: 0 10px 15px -8px rgba(0, 0, 0, 0.4),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
    opacity: 0.95;
  }
`;

export default Circle;

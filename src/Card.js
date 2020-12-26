import styled from "styled-components";
import { theme } from "./style/theme";

const Card = styled.article`
  position: relative;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  border-radius: 1rem;

  overflow: hidden;

  max-width: 25rem;
  padding: 1rem;

  background: ${theme.offwhite};
  color: ${theme.offblack};

  ${({ background }) => background && `background-image: url('${background}');`}
  background-size: cover;
  background-position: center;

  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);

  transition: 300ms ease-in-out all;
  transition-property: box-shadow opacity;

  > * {
    z-index: 1;
  }

  a {
    color: ${theme.primaryDark};
    transition: 300ms ease-in-out opacity;

    &:hover {
      opacity: 0.75;
    }
  }
`;

export default Card;

import React from "react";
import styled from "styled-components";
import { theme } from "./style/theme";
import { Link } from "wouter";

const Container = styled.main`
  background: ${theme.gradient};
  color: ${theme.offwhite};
`;

const Section = styled.section`
  height: 100%;
  margin: auto;

  @media only screen and (min-width: ${theme.breakpoints.desktop}) {
    width: ${theme.breakpoints.tablet};
  }

  font-size: 2rem;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  line-height: 1.5;

  > * + * {
    margin-top: 1rem;
  }

  a {
    padding: 0 0.5rem;
    text-decoration: none;
    background: ${theme.offwhite};
    color: ${theme.primaryDark};

    transition: 300ms ease-in-out background;

    &:hover {
      background: rgba(255, 255, 255, 0.5);
    }
  }
`;

const NotFound = () => {
  return (
    <Container>
      <Section>
        <span>Pagina non trovata</span>
        <p>（・∩・）？</p>
        <Link href="/">Torna alla Home</Link>
      </Section>
    </Container>
  );
};

export default NotFound;

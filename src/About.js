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

  padding: 2rem;

  @media only screen and (min-width: ${theme.breakpoints.desktop}) {
    width: ${theme.breakpoints.tablet};
  }

  font-size: 2rem;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  line-height: 1.5;

  > p {
    text-align: center;
  }

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

const About = () => {
  return (
    <Container>
      <Section>
        <p>
          Il sito è fatto da <a href="https://mb.maletta.space/">me</a>, ma i
          luoghi sono ovviamente presi dall'intramontabile serie{" "}
          <a href="https://www.youtube.com/watch?v=dH3sLuKjBGc&list=PLdQMek47cvQwxNO4-M_BUP3xVgEI_0NAj">
            Lost In Tokyo
          </a>{" "}
          di <a href="https://www.twitch.tv/dariomocciatwitch">Dario Moccia</a>.
        </p>
        <p>
          Le immagini vengono dalle API di{" "}
          <a href="https://yelp.com/">yelp.com</a> e{" "}
          <a href="https://cloud.google.com/maps-platform/places">
            Google Places
          </a>
          .
        </p>

        <Link href="/">Torna alla Home</Link>
      </Section>
    </Container>
  );
};

export default About;

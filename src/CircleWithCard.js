import React from "react";
import styled from "styled-components";
import { Link } from "wouter";
import Card from "./Card";
import Circle from "./Circle";
import { theme } from "./style/theme";

const Container = styled.div`
  cursor: pointer;
  display: flex;
  font-size: 2rem;
  font-weight: bold;
  color: ${theme.offblack};

  > * + * {
    margin-left: 1rem;
  }

  > *:last-child {
    flex: 1;
    width: 100%;
    justify-content: center;

    @media only screen and (max-width: ${theme.breakpoints.mobile}) {
      display: none;
    }
  }

  > ${Circle} {
    width: 4rem;
    height: 4rem;

    > * {
      opacity: 1;
      width: 2.2rem;
      height: 2.2rem;
    }
  }
`;

const CircleWithCard = ({ icon, title, link }) => {
  const Icon = icon;
  return (
    <Link href={link}>
      <Container>
        <Circle>
          <Icon />
        </Circle>
        <Card>{title}</Card>
      </Container>
    </Link>
  );
};

export default CircleWithCard;

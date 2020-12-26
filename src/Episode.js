import React, { useRef } from "react";
import styled from "styled-components";
import { Link } from "wouter";
import Circle from "./Circle";
import PlaceCard from "./PlaceCard";
import { ReactComponent as Left } from "./svgs/left-arrow.svg";
import { ReactComponent as Right } from "./svgs/right-arrow.svg";

const List = styled.section`
  padding: 1rem 0.5rem;
  display: flex;
  overflow: scroll;
  ::-webkit-scrollbar {
    width: 0px; /* Remove scrollbar space */
    background: transparent; /* Optional: just make scrollbar invisible */
  }

  > * {
    flex-shrink: 0;
  }

  > * + * {
    margin-left: 1rem;
  }

  a {
    color: black;
    text-decoration: none;
  }
`;

const Title = styled.h1`
  padding: 0 1rem;
  font-size: 2rem;
  font-weight: bold;

  display: flex;
  align-items: center;

  > * + * {
    margin-left: 1rem;
  }
`;

const Position = styled.section`
  display: flex;
  padding: 0 0.5rem;

  > * + * {
    margin-left: 1rem;
  }
`;

const Episode = ({ episode, places }) => {
  const scrollRef = useRef();

  const moveLeft = () => {
    const parent = scrollRef.current;

    parent.scrollTo({
      behavior: "smooth",
      left:
        parent.scrollLeft -
        parent.firstElementChild.getBoundingClientRect().width,
    });
  };
  const moveRight = () => {
    const parent = scrollRef.current;

    parent.scrollTo({
      behavior: "smooth",
      left:
        parent.scrollLeft +
        parent.firstElementChild.getBoundingClientRect().width,
    });
  };
  return (
    <>
      <Title>
        <span>Episodio {episode}</span>

        <Position>
          <Circle onClick={moveLeft}>
            <Left />
          </Circle>
          <Circle onClick={moveRight}>
            <Right />
          </Circle>
        </Position>
      </Title>

      <List ref={scrollRef}>
        {places.map((place) => (
          <Link to={`place/${place.slug}`}>
            {"" /* this fixes the links somehow */}
            <PlaceCard key={place.name} place={place} />
          </Link>
        ))}
      </List>
    </>
  );
};

export default Episode;

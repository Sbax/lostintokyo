import React from "react";
import PlaceCard from "./PlaceCard";
import styled from "styled-components";

const Container = styled.section`
  display: flex;
  overflow: scroll;
  padding: 1rem;

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
`;

const Places = ({ places }) => {
  return (
    <Container>
      {places.map((place) => (
        <PlaceCard key={place.name} place={place} />
      ))}
    </Container>
  );
};

export default Places;

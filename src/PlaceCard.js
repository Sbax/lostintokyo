import React from "react";
import styled from "styled-components";
import { theme } from "./style/theme";
import { ReactComponent as NoImage } from "./svgs/noimage.svg";
import { Link } from "wouter";

const Container = styled.article`
  cursor: pointer;
  overflow: hidden;

  height: 22rem;
  width: 13rem;
  background-image: ${theme.gradient};

  border-radius: 1rem;

  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);

  display: flex;
  justify-content: flex-end;
  flex-direction: column;

  padding: 1rem 0.5rem;

  position: relative;

  color: ${theme.offwhite};

  &:before,
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }

  &:after {
    ${({ background }) =>
      background && `background-image: url('${background}');`}
    background-size: cover;
    background-position: top, top;
    opacity: 0.5;

    transition: 300ms ease-in-out opacity;
  }

  &:before {
    background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.75) 0%,
      rgba(0, 0, 0, 0.05) 55%
    );

    z-index: 1;
  }

  &:hover {
    &:after {
      opacity: 1;
    }
  }

  > * {
    position: relative;
    z-index: 2;
  }

  > * + * {
    margin-top: 0.5rem;
  }
`;

const Title = styled.h1`
  font-size: 1.3rem;
  font-weight: 800;
`;

const Subtitle = styled.h2`
  font-size: 1rem;
  opacity: 0.75;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const NoImageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  opacity: 0.3;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  font-weight: bold;

  > svg {
    width: 2rem;
    margin-bottom: 1rem;
  }
`;

const PlaceCard = ({ place }) => {
  const { name, slug, japaneseName, photo } = place;

  return (
    <Link href={`place/${slug}`}>
      <Container background={photo}>
        {!photo && (
          <NoImageContainer>
            <NoImage />
            ヽ(｀○´)/
          </NoImageContainer>
        )}
        <Title>{name}</Title>
        <Subtitle>{japaneseName}</Subtitle>
      </Container>
    </Link>
  );
};

export default PlaceCard;

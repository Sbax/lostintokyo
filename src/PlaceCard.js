import React from "react";
import styled from "styled-components";
import Card from "./Card";
import Icon from "./Icon";
import { theme } from "./style/theme";
import { ReactComponent as SecondWave } from "./svgs/home-wave.svg";
import { ReactComponent as NoImage } from "./svgs/noimage.svg";
import { ReactComponent as Wave } from "./svgs/other-wave.svg";

const Container = styled(Card)`
  cursor: pointer;
  width: 25rem;
  height: 20rem;
  padding: 0;

  > * {
    color: ${theme.offwhite};
  }

  &:hover {
    box-shadow: 0 10px 15px -8px rgba(0, 0, 0, 0.4),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
    opacity: 0.95;
  }
`;

const Description = styled.div`
  background: ${theme.offwhite};
  color: ${theme.offblack};
  display: flex;
  flex-direction: row;

  min-height: 5rem;
  padding: 1rem;
  padding-top: 0;
  z-index: 1;

  > * + * {
    margin-left: 1rem;
  }
`;

const Titles = styled.div`
  min-width: 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;

  > * + * {
    margin-top: 0.33rem;
  }
`;

const Title = styled.h1`
  font-size: 1.2rem;
  font-weight: 800;

  line-height: 1.3em;
  max-height: 1.3em;

  vertical-align: top;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Subtitle = styled.h2`
  font-size: 0.8rem;
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
  z-index: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  font-weight: bold;

  color: ${theme.offwhite};
  background-image: ${theme.gradient};
  opacity: 0.75;
  padding-bottom: 4rem;

  > svg {
    width: 2rem;
    margin-bottom: 1rem;
  }
`;

const Waves = styled.div`
  position: relative;

  > * {
    position: absolute;
    bottom: 0;
    z-index: 2;

    &.second-wave {
      z-index: 0;
      opacity: 0.65;
      color: ${theme.primary};
      bottom: 7px;
    }
  }
`;

const PlaceCard = ({ place }) => {
  const { name, japaneseName, what, photo } = place;

  return (
    <Container background={photo}>
      {!photo && (
        <NoImageContainer>
          <NoImage />
          ヽ(｀○´)/
        </NoImageContainer>
      )}

      <Waves>
        <Wave />
        <SecondWave className="second-wave" />
      </Waves>
      <Description>
        <Icon type={what} />
        <Titles>
          <Title>{name}</Title>
          <Subtitle>{japaneseName}</Subtitle>
        </Titles>
      </Description>
    </Container>
  );
};

export default PlaceCard;

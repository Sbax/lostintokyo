import React from "react";
import styled from "styled-components";
import { Link } from "wouter";
import Circle from "./Circle";
import CircleWithCard from "./CircleWithCard";
import MapContainer from "./MapContainer";
import { theme } from "./style/theme";
import { ReactComponent as Gate } from "./svgs/japanese-gate.svg";
import { ReactComponent as Left } from "./svgs/left-arrow.svg";
import { ReactComponent as Right } from "./svgs/right-arrow.svg";
import { ReactComponent as Wave } from "./svgs/wave.svg";

const Page = styled.section`
  height: 100%;
  background: ${theme.offwhite};

  .leaflet-container {
    height: 20rem;
  }

  line-height: 1.4rem;
`;

const Purple = styled.div`
  color: ${theme.offwhite};

  padding: 2rem;
  min-height: 50vh;
  background: ${theme.gradient};
  display: flex;

  flex-direction: column;

  position: relative;

  .wave {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 0;
  }
`;

const Episode = styled.h2`
  font-size: 1.5rem;
  opacity: 0.8;
`;

const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: bold;
`;

const Subtitle = styled.h2`
  opacity: 0.75;
`;

const Address = styled.a`
  > span {
    opacity: 0.75;
  }
`;

const Note = styled.p`
  max-width: 40rem;
  margin-bottom: 1rem;
`;

const Container = styled.div`
  margin: auto;

  @media only screen and (min-width: ${theme.breakpoints.desktop}) {
    width: ${theme.breakpoints.tablet};
  }

  position: relative;
  z-index: 1;
`;

const General = styled.section`
  z-index: 1;

  > * + * {
    margin-top: 0.5rem;
  }
`;

const InfoSection = styled(Container)`
  padding: 2rem 0;

  display: flex;
  justify-content: space-between;

  height: 18rem;
  overflow: visible;

  @media only screen and (max-width: ${theme.breakpoints.tablet}) {
    height: auto;
    flex-direction: column;

    > * + * {
      margin-top: 1rem;
    }
  }

  > * {
    @media only screen and (min-width: ${theme.breakpoints.tablet}) {
      max-width: 50%;
    }
    flex: 1;
  }
`;

const Picture = styled.section`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;

  @media only screen and (max-width: ${theme.breakpoints.tablet}) {
    justify-content: center;
  }

  img {
    position: relative;
    z-index: 1;

    width: 25rem;
    max-width: 80vw;
    height: auto;

    border-radius: 1rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }
`;

const MapSection = styled(Container)`
  width: 100%;
  padding-bottom: 2rem;
  margin: auto auto -7rem auto;

  .leaflet-container {
    width: 50%;

    @media only screen and (max-width: ${theme.breakpoints.tablet}) {
      margin: auto;
      width: 80vw;
    }

    border-radius: 1rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }
`;

const Navbar = styled(Container)`
  max-width: ${theme.breakpoints.desktop};
  width: 100%;

  justify-content: space-between;
  align-items: flex-start;

  display: flex;
`;

const Links = styled.div`
  display: flex;

  > * + * {
    margin-left: 1rem;
  }
`;

const PlacePage = ({ place, next, previous }) => {
  const { name, address, lat, lng, episode, note, japaneseName, photo } = place;

  const link = `https://www.google.com/maps/search/${place.name
    .split(" ")
    .join("+")}+${place.address.split(" ").join("+")}`;

  return (
    <Page>
      <Purple>
        <Navbar>
          <CircleWithCard title="Home" icon={Gate} link="/" />
          <Links>
            {previous && (
              <Link href={`/place/${previous.slug}`}>
                <Circle>
                  <Left />
                </Circle>
              </Link>
            )}

            {next && (
              <Link href={`/place/${next.slug}`}>
                <Circle>
                  <Right />
                </Circle>
              </Link>
            )}
          </Links>
        </Navbar>
        <InfoSection>
          <General>
            <Episode>Episodio {episode}</Episode>
            <Title>{name}</Title>
            <Subtitle>{japaneseName}</Subtitle>

            <Address href={link}>
              <span>{address}</span>
            </Address>

            <Note>{note}</Note>
          </General>
          {photo && (
            <Picture>
              <img src={photo} alt={name} />
            </Picture>
          )}
        </InfoSection>

        <MapSection>
          <MapContainer lat={lat} lng={lng} />
        </MapSection>

        <Wave className="wave" />
      </Purple>
    </Page>
  );
};

export default PlacePage;

import * as L from "leaflet";
import React, { useRef, useState } from "react";
import {
  AttributionControl,
  Map,
  Marker,
  Popup,
  TileLayer,
  ZoomControl,
} from "react-leaflet";
import styled from "styled-components";
import { Link } from "wouter";
import camera from "./assets/camera.png";
import drink from "./assets/drink.png";
import food from "./assets/food.png";
import shop from "./assets/shop.png";
import stay from "./assets/stay.png";
import GenericCard from "./Card";
import Circle from "./Circle";
import CircleWithCard from "./CircleWithCard";
import { getPreferences, savePreferences } from "./fetchData";
import Icon from "./Icon";
import PlaceCard from "./PlaceCard";
import { theme } from "./style/theme";
import { ReactComponent as Wave } from "./svgs/home-wave.svg";
import { ReactComponent as Gate } from "./svgs/japanese-gate.svg";
import { ReactComponent as Left } from "./svgs/left-arrow.svg";
import { ReactComponent as OtherWave } from "./svgs/other-wave.svg";
import { ReactComponent as Right } from "./svgs/right-arrow.svg";

const urls = {
  Eat: food,
  Buy: shop,
  See: camera,
  Stay: stay,
  Drink: drink,
};

const tokyo = [35.680429, 139.769135];

const MapSection = styled.section`
  position: relative;
  flex: 1;

  .leaflet-container {
    width: 100%;
    height: 100%;
  }
`;

const Places = styled.section`
  display: none;

  @media only screen and (min-width: ${theme.breakpoints.tablet}) {
    display: block;
  }

  position: absolute;
  right: 0;
  top: 0;
  z-index: 9999;
  height: 100%;

  transition: 300ms ease-in-out margin;

  &:not(.expanded) {
    margin-right: -20rem;
  }

  > ${Circle} {
    position: absolute;
    left: -3rem;
    top: 1rem;
    z-index: 9999;
  }
`;

const List = styled.div`
  overflow: auto;
  height: 100%;

  padding: 0.5rem 1rem;

  > * {
    padding: 0.5rem 0;
  }
`;

const Container = styled.main`
  display: flex;
  flex-direction: column;

  position: relative;
  overflow: hidden;
`;

const Cards = styled.section`
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 9999;

  > * + * {
    margin-top: 1rem;
  }
`;

const Card = styled(GenericCard)`
  width: auto;
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const Filters = styled.div`
  display: none;
  @media only screen and (min-width: ${theme.breakpoints.tablet}) {
    display: flex;
  }

  position: relative;
  z-index: 1;
  margin-top: 1rem;

  color: ${theme.offblack};

  > * {
    flex: 1;
    width: 5rem;
  }

  > * + * {
    margin-left: 1rem;
  }
`;

const Waves = styled.div`
  position: absolute;
  top: -2px;
  left: 0;
  z-index: 9998;

  width: 100%;
  pointer-events: none;

  > * {
    position: absolute;
    top: 0;
    left: 0;

    color: ${theme.offwhite};
    transform: scaleY(-1);
    z-index: 1;

    opacity: 0.8;
    &.other-wave {
      top: 1px;
      z-index: 2;
      color: ${theme.primaryDark};
      opacity: 0.65;
    }
  }
`;

const Toggle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  cursor: pointer;

  transition: 300ms ease-in-out opacity;
  opacity: 0.3;

  &.active {
    opacity: 1;
  }

  &:hover {
    opacity: 0.75;
  }

  > span {
    margin-top: 0.5rem;
  }
`;

const MapPage = ({ places }) => {
  const scrollRef = useRef();

  const [position, setPosition] = useState(tokyo);
  const [zoom, setZoom] = useState(13);

  const savedPreferences = getPreferences();
  const [expanded, setExpanded] = useState(savedPreferences.expanded);
  const [activeFilters, changeActiveFilters] = useState(
    savedPreferences.activeFilters || ["Eat", "Buy", "See", "Stay", "Drink"]
  );

  const isActive = (item) => activeFilters.includes(item);
  const toggleFilter = (filter) => {
    const newFilters = (() => {
      if (isActive(filter))
        return activeFilters.filter((item) => item !== filter);

      return [...activeFilters, filter];
    })();

    savePreferences({
      expanded,
      activeFilters: newFilters,
    });

    changeActiveFilters(newFilters);
  };

  const toggleExpanded = () => {
    savePreferences({
      expanded: !expanded,
      activeFilters,
    });

    setExpanded(!expanded);
  };

  const filtered = places.filter(({ what }) => activeFilters.includes(what));

  const goToPlaceOnMap = (place) => {
    setPosition([place.lat, place.lng]);
    setZoom(16);
  };

  return (
    <Container>
      <MapSection>
        <Waves>
          <Wave />
          <OtherWave className="other-wave" />
        </Waves>

        <Cards>
          <CircleWithCard title="Lost In Tokyo" icon={Gate} link="/" />
          <Card>
            Filtra per categoria
            <Filters>
              <Toggle
                className={isActive("Eat") && "active"}
                onClick={() => toggleFilter("Eat")}
              >
                <Icon type="Eat" />
                <span>Cibo</span>
              </Toggle>
              <Toggle
                className={isActive("See") && "active"}
                onClick={() => toggleFilter("See")}
              >
                <Icon type="See" />
                <span>Da Vedere</span>
              </Toggle>
              <Toggle
                className={isActive("Drink") && "active"}
                onClick={() => toggleFilter("Drink")}
              >
                <Icon type="Drink" />
                <span>Bar e Pub</span>
              </Toggle>
              <Toggle
                className={isActive("Buy") && "active"}
                onClick={() => toggleFilter("Buy")}
              >
                <Icon type="Buy" />
                <span>Shopping</span>
              </Toggle>
              <Toggle
                className={isActive("Stay") && "active"}
                onClick={() => toggleFilter("Stay")}
              >
                <Icon type="Stay" />
                <span>Hotel</span>
              </Toggle>
            </Filters>
          </Card>
        </Cards>
        <Map
          center={position}
          zoom={zoom}
          zoomControl={false}
          attributionControl={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
            url={`https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png?api_key=${process.env.REACT_APP_STADIA_API}`}
            maxZoom={20}
          />
          <AttributionControl position="bottomleft" prefix={false} />
          <ZoomControl position="bottomleft" />
          {filtered.map(
            ({ lat, lng, slug, what, name, japaneseName, address }) => {
              const url = urls[what];
              const icon = L.icon({
                iconUrl: url,
                iconRetinaUrl: url,
                iconSize: [64, 64],
                iconAnchor: [32, 64],
                popupAnchor: [0, -52],
              });

              return (
                <Marker
                  key={slug}
                  position={[lat, lng]}
                  icon={icon}
                  onClick={() => {
                    const item = document.getElementById(slug);

                    scrollRef.current.scrollTo({
                      top: item.offsetTop,
                      behavior: "smooth",
                    });
                  }}
                >
                  <Popup>
                    <div>{name}</div>
                    <div>{japaneseName}</div>
                    <div>{address}</div>

                    <Link href={`/place/${slug}`}>Visualizza i dettagli</Link>
                  </Popup>
                </Marker>
              );
            }
          )}
        </Map>
      </MapSection>

      <Places className={expanded && "expanded"}>
        <Circle onClick={() => toggleExpanded()}>
          {expanded ? <Right /> : <Left />}
        </Circle>

        <List ref={scrollRef}>
          {filtered.map((place) => (
            <div
              id={place.slug}
              key={place.slug}
              onClick={() => goToPlaceOnMap(place)}
            >
              <PlaceCard place={place} />
            </div>
          ))}
        </List>
      </Places>
    </Container>
  );
};

export default MapPage;

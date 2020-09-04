import React from "react";
import Places from "./Places";
import styled from "styled-components";
import { Route, Link, Switch } from "wouter";
import PlacePage from "./PlacePage";
import { theme } from "./style/theme";
import About from "./About";
import NotFound from "./NotFound";

const Title = styled.h1`
  padding: 0 1rem;
  font-size: 2rem;
  font-weight: bold;
`;

const Navbar = styled.header`
  background: ${theme.gradient};
  color: ${theme.offwhite};

  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > span {
    font-size: 2rem;
    font-weight: bold;
  }

  & + * {
    margin-top: 1rem;
  }
`;

const Main = ({ places }) => {
  const episodes = Array.from(
    new Set(places.map(({ episode }) => episode))
  ).sort();

  return (
    <main>
      <Switch>
        <Route path="/">
          <>
            <Navbar>
              <span>Lost In Tokyo</span>

              <Link href="/about">About</Link>
            </Navbar>
            {episodes.map((episode) => (
              <section>
                <Title>Episodio {episode}</Title>
                <Places
                  places={places.filter((place) => place.episode === episode)}
                />
              </section>
            ))}
          </>
        </Route>

        <Route path="/place/:slug">
          {({ slug }) => {
            const index = places.findIndex((item) => item.slug === slug);

            const place = places[index];
            const next = places[index + 1];
            const previous = places[index - 1];

            return <PlacePage place={place} next={next} previous={previous} />;
          }}
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route>
          <NotFound />
        </Route>
      </Switch>
    </main>
  );
};

export default Main;

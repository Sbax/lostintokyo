import React from "react";
import { Route, Switch } from "wouter";
import About from "./About";
import Home from "./Home";
import MapPage from "./MapPage";
import NotFound from "./NotFound";
import PlacePage from "./PlacePage";

const Main = ({ places }) => {
  const episodes = Array.from(
    new Set(places.map(({ episode }) => episode))
  ).sort((a, b) => a - b);

  return (
    <Switch>
      <Route path="/">
        <Home episodes={episodes} places={places} />
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

      <Route path="/map">
        <MapPage places={places} />
      </Route>

      <Route path="/about">
        <About />
      </Route>

      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
};

export default Main;

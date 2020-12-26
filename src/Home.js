import React from "react";
import styled from "styled-components";
import { Link } from "wouter";
import Card from "./Card";
import CircleWithCard from "./CircleWithCard";
import Episode from "./Episode";
import Footer from "./Footer";
import { theme } from "./style/theme";
import { ReactComponent as Wave } from "./svgs/home-wave.svg";
import { ReactComponent as Map } from "./svgs/japan.svg";
import { ReactComponent as Gate } from "./svgs/japanese-gate.svg";

const Page = styled.section`
  background: ${theme.gradient};

  display: flex;
  flex-direction: column;
`;

const Purple = styled.section`
  color: ${theme.offwhite};
  background-image: ${theme.gradient};
  position: relative;
  padding: 1rem;

  > * {
    position: relative;
    z-index: 1;
  }

  > svg {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 0;
  }
`;

const White = styled.section`
  background: ${theme.offwhite};
  color: ${theme.offblack};
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;

  padding: 1rem 0;
  color: ${theme.offblack};
`;

const Column = styled.div`
  display: flex;

  > * + * {
    margin-left: 1rem;
  }

  margin-bottom: 1rem;
`;

const Paragraph = styled.p`
  line-height: 1.4;
`;

const Home = ({ episodes, places }) => {
  return (
    <Page>
      <Purple>
        <Header>
          <Column>
            <CircleWithCard title="Lost In Tokyo" icon={Gate} link="/" />
            <CircleWithCard title="Vai alla mappa" icon={Map} link="/map" />
          </Column>
          <Card>
            <Paragraph>
              Tutti i luoghi dell'intramontabile serie{" "}
              <a href="https://www.youtube.com/watch?v=dH3sLuKjBGc&list=PLdQMek47cvQwxNO4-M_BUP3xVgEI_0NAj">
                Lost In Tokyo
              </a>{" "}
              di{" "}
              <a href="https://www.twitch.tv/dariomocciatwitch">Dario Moccia</a>
              .
            </Paragraph>
            <Paragraph>
              Per tutte le info sul sito e i contenuti visita la pagina{" "}
              <Link href="/about">about</Link>.
            </Paragraph>
          </Card>
        </Header>
        <Wave />
      </Purple>
      <White>
        {episodes.map((episode) => (
          <Episode
            key={episode}
            episode={episode}
            places={places
              .sort((a, b) =>
                a.favorite === b.favorite ? 0 : a.favorite ? -1 : 1
              )
              .filter((place) => place.episode === episode)}
          />
        ))}

        <Footer />
      </White>
    </Page>
  );
};

export default Home;

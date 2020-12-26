import React from "react";
import styled from "styled-components";
import { colors } from "./style/theme";
import { ReactComponent as Camera } from "./svgs/camera.svg";
import { ReactComponent as Noodles } from "./svgs/noodles.svg";
import { ReactComponent as Shopping } from "./svgs/shopping-cart.svg";
import { ReactComponent as Soda } from "./svgs/soda.svg";
import { ReactComponent as Suitcase } from "./svgs/suitcase.svg";

const types = {
  Eat: {
    color: colors.cinnabar,
    icon: Noodles,
  },
  See: {
    color: colors.highland,
    icon: Camera,
  },
  Buy: {
    color: colors.jelly,
    icon: Shopping,
  },
  Drink: {
    color: colors.tango,
    icon: Soda,
  },
  Stay: {
    color: colors.portage,
    icon: Suitcase,
  },
};

const Container = styled.div`
  width: 3.5em;
  height: 3.5em;

  padding: 0.75em;
  border-radius: 50%;

  color: white;
  background: ${({ color }) => color};

  > svg {
    width: 100%;
    height: 100%;
  }
`;

const Icon = ({ type }) => {
  const { color, icon } = types[type];

  const Component = icon;
  return (
    <Container color={color}>
      <Component />
    </Container>
  );
};

export default Icon;

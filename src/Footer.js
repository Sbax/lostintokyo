import React from "react";
import styled from "styled-components";
import { theme } from "./style/theme";

const Container = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 1rem;

  color: #a3a3a3;

  line-height: 1.2rem;
  font-size: 0.8rem;

  a {
    color: ${theme.primaryDark};
  }
`;

const Footer = () => {
  return (
    <Container>
      <p>
        Vengono raccolti dati anonimi di navigazione rispettando GDPR, PECR,
        CCPA e senza utilizzare cookie.
      </p>

      <p>
        Le icone sono realizzate da vari artisti e sono disponibili su{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </p>
    </Container>
  );
};

export default Footer;

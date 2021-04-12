import React, { useEffect } from "react";
import styled from "styled-components";
import "@fontsource/share-tech-mono";
import Aos from "aos";
import "aos/dist/aos.css";
import { StyledH1, StyledH3 } from "./components/text";
import { Grid } from "@material-ui/core";
import GridCont from "./components/GridCont";
import Button from "./components/Button"

const StyledContentProyect = styled.div`
  display: flex;
  place-content: center;
  background: linear-gradient(
    0deg,
    ${(props) => props.theme.carmine} 0%,
    ${(props) => props.theme.carmine} 0%,
    ${(props) => props.theme.softBlack} 70%
  );
  min-height: 100vh;
`;

const StyledDivProyect = styled.div`
  width: 85%;
  background-color: #0e0e0e;
  text-align: center;
  border: double 10px #3e0001;
  border-radius: 1%;
  position: relative;
`;

const StyledIcon = styled.i`
  background-color: #000000;
  border: #b70939 solid 3px;
  padding: 7px;
  border-radius: 20px;
  color: #bbbbbb;
`;

const StyledH2 = styled.h2`
  padding-left: 10px;
  margin: 0;
`;

const StyledFirm = styled.h3`
position: absolute;
bottom: 0;
left: 2vh;
color: #680721;
`;


function Contact() {
  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <StyledContentProyect id="contacto">
      <StyledDivProyect>
        <StyledH1>Conversemos</StyledH1>
        <StyledH3>
          Santiago Fernandez <br />
          santiagofernandezdelasierra@gmail.com <br />
          +598 96 064 698 - Uruguay
        </StyledH3>
        <GridCont container>
          <Grid item xs={3}>
            <a href="https://github.com/Santiagofer4" target="_blank" rel="noreferrer">
              <StyledIcon className="fab fa-github fa-5x"></StyledIcon>
            </a>
          </Grid>
          <Grid item xs={3}>
            <a href="https://wa.me/0059896064698" target="_blank" rel="noreferrer">
              <StyledIcon className="fab fa-whatsapp fa-5x"></StyledIcon>
            </a>
          </Grid>
          <Grid item xs={3}>
            <a href="mailto: santiagofernandezdelasierra@gmail.com">
              <StyledIcon className="far fa-envelope fa-5x"></StyledIcon>
            </a>
          </Grid>
          <Grid item xs={3}>
            <a href="https://www.linkedin.com/in/santiagofernandezdelasierra/" target="_blank" rel="noreferrer">
              <StyledIcon className="fab fa-linkedin fa-5x"></StyledIcon>
            </a>
          </Grid>
        </GridCont>
        <a href="https://drive.google.com/file/d/1e0moUCfBpp6tppuH8Ht0aT48UQhH-iPE/view" style={{ textDecoration: 'none' }} target="_blank" rel="noreferrer">
          <Button>
            <i className="fas fa-file-download fa-2x"></i>
            <StyledH2>Curriculum</StyledH2>
          </Button>
          </a>
<StyledFirm>Creado con amor por <br/> Santiago Fernandez</StyledFirm>
      </StyledDivProyect>
    </StyledContentProyect>
  );
}

export default Contact;

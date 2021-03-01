import React from "react";
import styled from "styled-components";
import "@fontsource/share-tech-mono";

const StyledDiv = styled.div`
  margin: 5vh auto;
  width: 80%;
  font-family: "Share Tech Mono";
    background-color: ${(props) => props.theme.maroon};
`;

const StyledH1 = styled.h1`
  font-size: 2.5rem;
  text-align: justify;
  margin: 3vh 0px;
`;
const StyledH2 = styled.h2`
  font-size: 1.8rem;
  text-align: justify;
  margin-top: 3vh;
  border-bottom: solid 5px #000000;
  padding-bottom: 5px;
  width: fit-content;
`;

function Welcome() {
  return (
    <StyledDiv>
      <StyledH2>¡Bienvenido!</StyledH2>
      <StyledH1>
        Soy Santiago Fernández, desarrollador Full stack enfocado en el
        front-end. Desarrollador freelance viviendo en Uruguay, tengo 20 años y experiencia trabajando en proyectos ambiciosos buscando facilitar soluciones a diferentes problemas.
      </StyledH1>
    </StyledDiv>
  );
}

export default Welcome;

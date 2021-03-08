import React, { useEffect } from "react";
import styled from "styled-components";
import "@fontsource/share-tech-mono";
import Aos from "aos";
import "aos/dist/aos.css";
import QuizAppWeb from "./ProjectsParts/QuizAppWeb";
import WineStore from "./ProjectsParts/WineStore";

const StyledContentProyect = styled.div`
  display: flex;
  place-content: center;
  background: linear-gradient(
    0deg,
    rgba(115, 0, 2, 1) 0%,
    rgba(62, 0, 1, 1) 28%,
    rgba(14, 14, 14, 1) 80%
  );
  min-height: 100vh;
`;

const StyledDivProyect = styled.div`
  width: 85%;
  background-color: #0e0e0e;
  text-align: center;
  color: ${(props) => props.theme.maroon};
  border: double 10px #3e0001;
  border-radius: 1%;
  margin: 3vh 0vh;
`;

const StyledH1 = styled.h1`
  margin-bottom: 2vh;
  font-size: 3rem;
  color: ${(props) => props.theme.maroon};
`;

function Proyects() {
  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <StyledContentProyect id="proyectos">
      <StyledDivProyect>
        <StyledH1 data-aos="fade-right">Proyectos</StyledH1>
        <WineStore />
        <QuizAppWeb />
      </StyledDivProyect>
    </StyledContentProyect>
  );
}

export default Proyects;

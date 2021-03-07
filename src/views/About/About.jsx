import React, { useEffect } from "react";
import styled from "styled-components";
import "@fontsource/share-tech-mono";
import img from "../../config/Untitled_auto_x1-removebg-preview1.png";
import Aos from "aos";
import "aos/dist/aos.css";

const StyledDiv = styled.div`
  font-family: "Share Tech Mono";
  background-color: ${(props) => props.theme.softBlack};
  padding: 5vh 15px;
  margin: 0px;
  border-bottom: double #3e0001 10px
`;

const StyledH1 = styled.h1`
  margin: 0vh 0vw 4vw 7vw;
  font-size: 3rem;
  color: ${(props) => props.theme.maroon};
`;

const StyledContent = styled.div`
  font-weight: 700;
  font-size: 1.2rem;
  text-align: justify;
  width: fit-content;
  display: flex;
  padding: 10px 8vw 10px 7vw;
  align-items: center;
  color: ${(props) => props.theme.maroon};
`;

const StyledImg = styled.img`
  margin-right: 5vw;
  background-color: ${(props) => props.theme.softGrey};
  border: solid;
  border-radius: 12%;
`;

function About() {
  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <>
      <StyledDiv>
        <StyledH1 data-aos="fade-right">Sobre mi...</StyledH1>

        <StyledContent>
          <StyledImg data-aos="fade-right" src={img} alt="Foto Santiago Fernandez" />
          <div>
          <h3 data-aos="fade-right">
            Siempre busco expandir mis conocimientos, centrándome en las zonas
            en las que tengo mas dificultad. Actualmente me encuentro en
            búsqueda de un trabajo el cual me permita adquirir experiencia.
          </h3>
          <h3 data-aos="fade-right">
            Recientemente graduado del bootcamp 'soyHenry' (700hs) después de
            meses de dedicación y trabajo en proyectos muy ambiciosos Como
            desarrollador disfruto de aprender constantemente tecnologías nuevas
            y perfeccionar las ya aprendidas.
          </h3>
          <h3 data-aos="fade-right">
            Me gustan los desafíos que me hacen salir de mi zona de confort y la
            satisfacción de concretarlos.
          </h3>
          </div>
        </StyledContent>
      </StyledDiv>
    </>
  );
}

export default About;

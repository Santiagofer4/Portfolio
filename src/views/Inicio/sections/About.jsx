import React from "react";
import styled from "styled-components";
import "@fontsource/share-tech-mono";
import img from '../../../config/Untitled_auto_x1-removebg-preview1.png'

const StyledDiv = styled.div`
  font-family: "Share Tech Mono";
  background-color: ${(props) => props.theme.softBlack};
  padding: 15px;
  margin: 0px;
`;

const StyledH1 = styled.h1`
  margin: 4vw 0vw 4vw 7vw;
  font-size: 3rem;
  color:${(props) => props.theme.maroon};
`;

const StyledH3 = styled.h3`
  font-weight: 200;
  font-size: 1.2rem;
  text-align: justify;
  width: fit-content;
  display: flex;
  padding: 10px 8vw 10px 7vw;
  align-items: center;
  color:${(props) => props.theme.maroon};
`;

const StyledImg = styled.img`
margin-right: 5vw;
    background-color: #101010;
    border: solid;
    border-radius: 12%;
`;



function About() {
  return (
    <StyledDiv>
      <StyledH1>Sobre mi...</StyledH1>

      <StyledH3>
      <StyledImg src={img} Style="
    margin-right: 5vw;
" alt='Foto Santiago Fernandez'/>
      Siempre busco expandir mis conocimientos, centrándome en las zonas en las que tengo mas dificultad. Actualmente me encuentro en búsqueda de un trabajo el cual me permita adquirir experiencia.<br/><br/><br/> Recientemente graduado del bootcamp 'soyHenry' (700hs) después de meses de dedicación y trabajo en proyectos muy ambiciosos
      Como desarrollador disfruto de aprender constantemente tecnologías nuevas y perfeccionar las ya aprendidas. <br/><br/><br/>Me gustan los desafíos que me hacen salir de mi zona de confort y la satisfacción de concretarlos.
      
      </StyledH3>
      
    </StyledDiv>
  )
}

export default About

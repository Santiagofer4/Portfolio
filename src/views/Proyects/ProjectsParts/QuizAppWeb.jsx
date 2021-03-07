import React, { useEffect } from "react";
import styled from "styled-components";
import "@fontsource/share-tech-mono";
import Quiz from "../components/Img/QuizWeb.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { Button } from "@material-ui/core";
import {StyledDiv , StyledContent } from "../components/Divs/DivsQuizApp"


const StyledH1 = styled.h1`
  font-size: 2rem;
  color: ${(props) => props.theme.maroon};
`;

const StyledImg = styled.img`
  margin-right: 5vw;
  background-color: ${(props) => props.theme.softGrey};
  border: solid;
  border-radius: 12%;
  width: 500px;
`;

function QuizAppWeb() {
  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <>
      <StyledDiv>
        <StyledContent>
        <div>
          <StyledImg
            data-aos="fade-right"
            src={Quiz}
            alt="Foto Santiago Fernandez"
          />
          <Button>ssfffffff</Button>
          </div>
          <div>
            <StyledH1 data-aos="fade-right">Quiz-App</StyledH1>
            <h3 data-aos="fade-right">
              Con la pandemia y las clases online, muchas plataformas que
              permitían hacer pruebas online, comenzaron a utilizarse en masa,
              muchas de estas páginas presentaban muchos problemas para los
              profesores e instituciones, de allí surge nuestro proyecto
            </h3>
            <h3 data-aos="fade-right">
              QuizApp es un servicio para instituciones que desean
              realizar exámenes online. Está pensado para funcionar a gran escala y es
              completamente funcional. La página web está orientada a la
              administración del dueño, instituciones y profesores, mientras que
              los alumnos utilizarían la aplicación Mobile para realizar las
              pruebas
            </h3>
          </div>
        </StyledContent>
      </StyledDiv>
    </>
  );
}

export default QuizAppWeb;

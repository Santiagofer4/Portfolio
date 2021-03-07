import React, { useEffect } from "react";
import styled from "styled-components";
import "@fontsource/share-tech-mono";
import Wine from "../components/Img/Wine.png";
import Aos from "aos";
import "aos/dist/aos.css";
import {StyledDiv , StyledContent } from "../components/Divs/DivsWine"


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

function WineStore() {
  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <>
      <StyledDiv>
        <StyledContent>
          <StyledImg
            data-aos="fade-right"
            src={Wine}
            alt="Foto Santiago Fernandez"
          />
          <div>
            <StyledH1 data-aos="fade-right">Wine-Store</StyledH1>
            <h3 data-aos="fade-right">
              Proyecto Ecommerce del bootcamp "soyHenry". Una tienda
              online de vinos completamente funcional donde se pueden realizar compras y pagar con tarjeta Visa, Mastercard o MercadoPago.
              Cuenta además de la interfaz para que el administrador pueda cargar los productos y gestionar las ordenes
            </h3>
            <h3 data-aos="fade-right">
              En el proyecto se usaron todas las tecnologías mencionadas en la imagen. Se trabajó en un grupo
              de 6 programadores usando metodología SCRUM.
            </h3>
          </div>
        </StyledContent>
      </StyledDiv>
    </>
  );
}

export default WineStore;

import { Grid } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import Button from "./components/Buttons";

const StyledDiv = styled.div`
  font-family: "Share Tech Mono";
  background-color: ${(props) => props.theme.softBlack};
  padding: 8vh 0 5vh;
  border-bottom: double #3e0001 10px;
`;

function DirectAccess() {
  return (
    <StyledDiv>
      <Grid container style={{ fontSize: '30px' }} justify="space-evenly">
        <Grid item>
          <a href="#proyectos" style={{ textDecoration: 'none' }}>
            <Button display="block">
              <i className="fas fa-project-diagram fa-10x"></i>
              <h3 style={{ fontSize: '20px' }}>Proyectos</h3>
            </Button>
          </a>
        </Grid>
        <Grid item>
        <a href="#tecnologias" style={{ textDecoration: 'none' }}>
          <Button display="block">
            <i className="fas fa-toolbox fa-10x"></i>
            <h3 style={{ fontSize: '20px' }}>Tecnologías</h3>
          </Button>
          </a>
        </Grid>
        <Grid item>
        <a href="#contacto" style={{ textDecoration: 'none' }}>
          <Button display="block">
            <i className="fas fa-mail-bulk fa-10x"></i>
            <h3 style={{ fontSize: '20px' }}>Contacto</h3>
          </Button>
          </a>
        </Grid>
      </Grid>
    </StyledDiv>
  );
}

export default DirectAccess;

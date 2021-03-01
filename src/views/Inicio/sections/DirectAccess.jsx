import { Grid } from '@material-ui/core'
import React from 'react'
import styled from "styled-components";
import Button from './components/Botones/AccesoDirecto'


const StyledDiv = styled.div`
  font-family: "Share Tech Mono";
  background-color: ${(props) => props.theme.softBlack};
  padding-top: 8vh;
`;


function DirectAccess() {
    return (
        <StyledDiv>
            <Grid container Style="font-size: 30px;" justify="space-evenly" >
                <Grid item direction="column" justify="center" >
                    <Button display="block"><i class="fas fa-toolbox fa-10x"></i><h3>Habilidades</h3></Button>
                </Grid>
                <Grid item direction="column" justify="center">
                    <Button display="block"><i class="fas fa-project-diagram fa-10x"></i><h3>Proyectos</h3></Button>
                </Grid>
                <Grid item direction="column">
                    <Button display="block"><i class="fas fa-mail-bulk fa-10x"></i><h3>Contacto</h3></Button>
                </Grid>
            </Grid>
        </StyledDiv>
    )
}

export default DirectAccess

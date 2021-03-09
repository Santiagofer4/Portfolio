import React, { useEffect } from "react";
import styled from "styled-components";
import "@fontsource/share-tech-mono";
import Aos from "aos";
import "aos/dist/aos.css";
import express from "./components/icons/express.png";
import sequelize from "./components/icons/sequelize.png";
import sql from "./components/icons/sql.png";
import Grid from "./components/Grid";
import GridCont from "./components/GridCont";
import { StyledH1, StyledH3 } from "./components/text";

const StyledContentProyect = styled.div`
  display: flex;
  place-content: center;
  background: linear-gradient(
    0deg,
    rgba(14, 14, 14, 1) 10%,
    rgba(62, 0, 1, 1) 40%,
    rgba(115, 0, 2, 1) 70%
  );
  min-height: 100vh;
`;

const StyledDivProyect = styled.div`
  width: 85%;
  background-color: #0e0e0e;
  text-align: center;
  border: double 10px #3e0001;
  border-radius: 1%;
`;

function Skills() {
  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <StyledContentProyect id="tecnologias">
      <StyledDivProyect>
        <StyledH1 data-aos="fade-right">Tecnologías</StyledH1>
        <StyledH3 data-aos="fade-right">
          Estas son algunas de las tecnologías con las que trabajo:
        </StyledH3>
        <GridCont justify="center" container>
          <Grid data-aos="fade-down-right" item xs={3}>
            <i className="fab fa-js fa-10x"></i>
            <p>JavaScript</p>
          </Grid>
          <Grid data-aos="fade-down" item xs={3}>
            <i className="fab fa-react fa-10x"></i>
            <p>React</p>
          </Grid>
          <Grid data-aos="fade-down-left" item xs={3}>
            <img
              style={{ width: '150px' }}
              src="https://img.icons8.com/ios/150/000000/redux.png"
              alt="redux"
            />
            <p>Redux</p>
          </Grid>
          <Grid data-aos="fade-right" item xs={3}>
            <i className="fab fa-node fa-9x"></i>
            <p>Node</p>
          </Grid>
          <Grid data-aos="fade-up" item xs={3}>
            <img style={{ width: '150px' }} src={express} alt="express" />
            <p>Express</p>
          </Grid>
          <Grid data-aos="fade-left" item xs={3}>
            <img style={{ width: '150px' }} src={sql} alt="Sql" />
            <p>SQL</p>
          </Grid>
          <Grid data-aos="fade-up-right" item xs={3}>
            <img
              src="https://img.icons8.com/ios/150/000000/postgreesql.png"
              alt="postgre sql"
            />
            <p>PostgreSQL</p>
          </Grid>
          <Grid data-aos="fade-up" item xs={3}>
            <img style={{ width: '150px' }} src={sequelize} alt="sequelize" />
            <p>Sequelize</p>
          </Grid>
          <Grid data-aos="fade-up-left" item xs={3}>
            <i className="fab fa-less fa-10x"></i>
            <p>Less</p>
          </Grid>
        </GridCont>
      </StyledDivProyect>
    </StyledContentProyect>
  );
}

export default Skills;

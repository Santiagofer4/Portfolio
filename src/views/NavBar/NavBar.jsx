import React from "react";
import styled from "styled-components";
import "@fontsource/share-tech-mono";

const StyledDiv = styled.div`
  font-family: "Share Tech Mono";
  background-color: ${(props) => props.theme.softBlack};
  padding: 1vw;
  text-align: center;
  display: flex;
  margin: 0px;
`;


const StyledH1 = styled.h1`
  font-size: 3rem;
  color:${(props) => props.theme.maroon};
  margin: 2vh 7vw;
`;

function NavBar() {
  return (
    <StyledDiv>
      <StyledH1>Full stack Developer</StyledH1>
    </StyledDiv>
  );
}

export default NavBar;

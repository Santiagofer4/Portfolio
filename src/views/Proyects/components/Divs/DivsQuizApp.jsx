import styled from "styled-components";
import "@fontsource/share-tech-mono";

export const StyledDiv = styled.div`
  font-family: "Share Tech Mono";
  background-color: ${(props) => props.theme.softBlack};
  padding: 5vh 15px 0vh 15px;
  margin: 0px;
`;

export const StyledContent = styled.div`
  font-weight: 700;
  font-size: 1.2rem;
  text-align: justify;
  width: fit-content;
  display: flex;
  padding: 10px 1vw 10px 2vw;
  align-items: center;
  color: ${(props) => props.theme.maroon};
`;

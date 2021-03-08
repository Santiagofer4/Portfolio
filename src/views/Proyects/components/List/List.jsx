import styled from "styled-components";
import "@fontsource/share-tech-mono";

export const StyledUl = styled.ul`
  display: flex;
  list-style: none;
  flex-wrap: wrap;
  margin-right: 5vw;
  margin: 1vh 3vw 0vh 0vw;
  padding: 0px;
  place-content: center;
`;

export const StyledLi = styled.li`
//   color: ${(props) => props.theme.maroon};
  color: #920028;
  filter: drop-shadow(2px 3px 2px black);
  margin: 2px;
  padding: 3px;
  border: 2px solid #86002e;
  border-radius: 5px;
  font-weight: 700;
  font-size: 1.2rem;
`;

import styled from "styled-components";


export const StyledImg = styled.img`
  margin-right: 3vw;
  background-color: ${(props) => props.theme.softGrey};
  border: solid #551a8b;
  border-radius: 30px;
  width: 500px;
  @media (min-width: 720px) {
    width: 430px;
  }
`;
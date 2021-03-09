import styled from "styled-components";
import Button from "@material-ui/core/Button";

export default styled(Button)`
  && {
    color: ${(props) => props.theme.carmine};
    background-color: #060606;
    padding: 7px 13px;
    border: double 5px;
    margin-top: 3vh;
  }
`;

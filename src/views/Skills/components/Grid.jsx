import styled from "styled-components";
import Grid from "@material-ui/core/Grid";

export default styled(Grid)`
 && {
    max-width: 90%;
    margin: 10px;
    background-color: #aaa;
    border: black solid 3px;
    padding: 5px;
    border-radius: 20px;
  }
  &:hover {
    background-color: #920028;
    filter: drop-shadow(2px 2px 2px black);
    transition: background-color 0.3s;
  }
`;
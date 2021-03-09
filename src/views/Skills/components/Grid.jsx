import styled from "styled-components";
import Grid from "@material-ui/core/Grid";

export default styled(Grid)`
 && {
  max-width: 90%;
  margin: 10px;
  background-color: #aaa;
  border: #b70939 dashed 6px;
  padding: 4px;
  border-radius: 20px;
  }
  &:hover {
    background-color: ${(props) => props.theme.carmine};
    filter: drop-shadow(0px 0px 2px #b70939);
    transition: background-color 0.3s;
    border: black dashed 6px;
padding: 4px;
  }
`;
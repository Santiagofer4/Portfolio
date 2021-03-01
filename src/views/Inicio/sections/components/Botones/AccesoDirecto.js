import styled from "styled-components";
import Button from "@material-ui/core/Button";

export default styled(Button)`
 && {
   display: block;
   color:${(props) => props.theme.maroon};
  }
`;
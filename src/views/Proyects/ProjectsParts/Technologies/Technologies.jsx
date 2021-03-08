import React, { useEffect } from "react";
import { StyledLi, StyledUl } from "../../components/List/List";
import Aos from "aos";

function Technologies({ tech }) {

  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <StyledUl data-aos="fade-right">
      {tech.map((technology) => <StyledLi key={technology} >{technology}</StyledLi>)}
    </StyledUl>
  );
}

export default Technologies;

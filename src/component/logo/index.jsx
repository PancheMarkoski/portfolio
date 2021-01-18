import React from "react";
import styled from "styled-components";

import portfolioLogo from "../../assets/images/logo-transparent.gif";


const HeaderLogoBox = styled.div`
   position: absolute;
    top: 0.2rem;
    left: 0.2rem;
`;

const HeaderLogo = styled.img`
  width: 8em;
  height: 8em;
`;

 const Logo = (props) => {
  return (
    <HeaderLogoBox>
      <HeaderLogo src={portfolioLogo}/>
    </HeaderLogoBox>
  );
}

export default Logo;
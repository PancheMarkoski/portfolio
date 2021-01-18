import React from 'react'
import styled from 'styled-components'

import BackgroundImage from "../../assets/images/hero-img.jpg";
import Logo from '../../component/logo'
import HeaderText from '../../component/headerText'
import { HamburgerMenu } from "../../component/hamburgerMenu";

const Header = styled.header`
  background-image: linear-gradient(to right bottom, rgba(171, 184, 186, 0.8), rgba(51, 55, 56, 0.8)), url(${BackgroundImage});
  height: 95vh;
  background-size: cover;
  background-position: top;
  clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
  position: relative;    
`;

const TopSection = () => {
    return (
        
            <Header>
                <Logo />
                <HeaderText />
                <HamburgerMenu />
            </Header>
        
    )
}

export default TopSection

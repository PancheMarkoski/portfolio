import React from 'react'
import styled, {keyframes} from 'styled-components'

import HeaderBtn from '../headerBtn/headerBtn';

const moveInLeft = keyframes`
 0% {
    opacity: 0;
    transform: translateX(-10rem); }
  80% {
    opacity: 1;
    transform: translateX(0.5rem); }
  100% {
    opacity: 1;
    transform: translate(0); }
`;

const moveInRight = keyframes`
    0% {
    opacity: 0;
    transform: translateX(10rem); }
  80% {
    opacity: 1;
    transform: translateX(-0.5rem); }
  100% {
    opacity: 1;
    transform: translate(0); }
`;

const HeaderTextBox = styled.div`
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
`;

const HeadingPrimary = styled.h1`
    color: #ffffff;
    text-transform: uppercase;    
`;

const HeadingPrimaryMain = styled.span`
    display: block;
    font-size: 3.5rem;
    font-weight: 900;
    letter-spacing: 1.2rem;
    animation-name: ${moveInLeft};
    animation-duration: 1s;
    animation-timing-function: ease-out;
`;

const HeadingPrimarySub = styled.span`
    display: block;
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: 1.7rem;
    animation: ${moveInRight} 1s ease-out;
    margin-bottom: 6rem;
`;

const HeaderText = () => {
    return (
        <HeaderTextBox>
            <HeadingPrimary>
                <HeadingPrimaryMain>Hi, I`m Panche</HeadingPrimaryMain>
                <HeadingPrimarySub>Web Developer</HeadingPrimarySub>
            </HeadingPrimary>
            <HeaderBtn />
        </HeaderTextBox>
    )
}

export default HeaderText

import React from 'react'
import styled, {keyframes} from 'styled-components'

const moveInButton = keyframes`
    0% {
    opacity: 0;
    transform: translateY(3rem);
  }

  100% {
    opacity: 1;
    transform: translate(0);
  }
`;

const Btn = styled.a`
  text-transform: uppercase;
  padding: 1.5rem 4rem;
  border-radius: 10rem;
  position: relative;
  display: inline-block; 
  text-decoration: none;
  background-color: #fff;
  color: #777;

  &:hover {
  transform: translateY(-0.3rem);
  box-shadow: 0 1rem 2rem;
  cursor: pointer; }

  &:active {
  transform: translateY(-0.1rem);
  box-shadow: 0 0.5rem 1rem; }

  &::after{
  content: "";
  display: inline-block;
  width: 100%;
  height: 100%;
  border-radius: 10rem;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  transition: all 0.4s;
  background-color: #fff;
  }

  &:hover::after {
  transform: scaleX(1.4) scaleY(1.8);
  opacity: 0;
}

  animation: ${moveInButton} 0.5s ease-out 0.75s;
  animation-fill-mode: backwards;

`;

const headerBtn = () => {
    return (
        <Btn>My Projects</Btn>
    )
}

export default headerBtn

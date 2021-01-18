import React from 'react'
import styled, {keyframes} from 'styled-components'

const FadeIn = keyframes`
    0% {opacity:0;}
    100% {opacity:1;}
`;

const Title = styled.h2`
    color: #ffffff;
    animation: ${FadeIn} ease 1s;
    padding-top: 12rem;
    padding-bottom: 4rem;
`;

const myProjectTitle = (props) => {
    const {title} = props;
    return (
        <Title> 
            {title}
        </Title>
    )
}

export default myProjectTitle

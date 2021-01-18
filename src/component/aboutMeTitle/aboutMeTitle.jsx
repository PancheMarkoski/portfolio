import React from 'react'
import styled, {keyframes} from 'styled-components'

const FadeIn = keyframes`
    0% {opacity:0;}
    100% {opacity:1;}
`;

const Title = styled.h2`
    color: #777;
    animation: ${FadeIn} ease 1s;
    
`;

const aboutMeTitle = (props) => {
    const {title} = props;
    return (
        <Title> 
            {title}
        </Title>
    )
}

export default aboutMeTitle

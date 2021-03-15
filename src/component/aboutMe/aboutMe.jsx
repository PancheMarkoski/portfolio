import React from 'react'
import styled from 'styled-components'

import ImgUrl from '../../assets/images/IMG_201.jpg'

const PrimaryContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 0 20rem;
`;

const TextContainerLeft = styled.div`
    width: 50rem;
`;

const ImgContainerRight = styled.div`
      border-radius: 50%;
      background-image: linear-gradient(to right bottom,rgb(126 126 122 / 18%),#fffe9c1c), url(${ImgUrl});
      height: 22rem;
      width: 22rem;
      background-size: cover;
      background-position-y: center;   
      box-shadow: 2px 5px 5px #333738cc;
`;

const aboutMe = () => {
    return (
        <PrimaryContainer>
            <TextContainerLeft>"I'm a Front-End Developer who have serious passion for UI effects, animations and creating intuitive, dynamic user experiences.
Let's make something special."</TextContainerLeft>
            <ImgContainerRight src={ImgUrl} />
        </PrimaryContainer>
    )
}

export default aboutMe

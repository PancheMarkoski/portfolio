import React from 'react'
import styled from 'styled-components'

import MyProjectTitle from '../../component/myProjectTitle/myProjectTitle'
import ProjectImg from '../../assets/images/projects.jpg';
import Swiper from '../../component/swiper/swiper'

const MyProjectContainer = styled.div`
    width: 100%;
    text-align: center;
    height: 95vh;
    padding-top: 4rem;
    clip-path: polygon(0 20%, 100% 0, 100% 80%, 0% 100%);
    //background-image: linear-gradient(to right bottom, rgba(171, 184, 186, 0.8), rgba(51, 55, 56, 0.8)), url(${ProjectImg});
    background-size: cover;
    background-position: top;
    margin-top: 3rem;
    background-color: rgb(80, 80, 90);
`;

const myProjectSection = () => {
    return (
        <MyProjectContainer>
            <MyProjectTitle title='My Projects' />
            <Swiper />
        </MyProjectContainer>
    )
}

export default myProjectSection

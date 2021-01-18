import React from 'react'
import styled from 'styled-components'

import AboutMeTitle from '../../component/aboutMeTitle/aboutMeTitle'
import AboutMe from '../../component/aboutMe/aboutMe'

const AboutMeContainer = styled.div`
    width: 100%;
    text-align: center;
    height: 50vh;
    padding-top: 4rem;
`;

const aboutMeSecondSection = () => {
    return (
        <AboutMeContainer>
            <AboutMeTitle title='About Me'/>
            <AboutMe />
        </AboutMeContainer>
    )
}

export default aboutMeSecondSection

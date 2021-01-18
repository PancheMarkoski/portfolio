import React from 'react'
import styled from 'styled-components'

import ContactMe from '../../component/contactMe/contactMe'

const Footer = styled.div`
clip-path: polygon(0 20%, 100% 0, 100% 100%, 0% 100%);;
height: 95vh;
background-color: #444;
margin-top: -14.4rem;
position: relative;
`;

const footer = () => {
    return (
        <Footer>
            <ContactMe />
        </Footer>
    )
}

export default footer

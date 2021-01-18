import React from 'react'
import styled from 'styled-components'

// linear-gradient(to right bottom, rgba(171, 184, 186, 0.8), rgba(51, 55, 56, 0.8)), url()
// import ProjectImg from '../../assets/images/projecImg.jpg'

const CardSecondDiv = styled.div`
    background-image: linear-gradient(to right bottom, rgba(171, 184, 186, 0.8), rgba(51, 55, 56, 0.8));
    height: 100%;
`;


const Card = styled.div`
    //background-image: linear-gradient(to right bottom, rgba(171, 184, 186, 0.8), rgba(51, 55, 56, 0.8));
    background-size: cover;
    background-position: top;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
    border-radius: 5px;
    width: 80%;
    height: 35vh;
    text-align: center;
    color: white;
    margin-left: 10%;
`;

const Title = styled.div`
    font-size: 2.5rem;
    padding-top: 1rem;
`;

const Icon = styled.div`
    margin: 2rem 0;
`;




const Btn = styled.a`
    display: block;
    background: #f6b352;
    color: white;
    padding: 1.5rem 0rem;
    border-radius: 0.5rem;
    box-shadow: rgba(0, 0, 0, 0.9);
    transition: all 200ms ease-in-out;
    text-decoration: none;
    position: absolute;
    bottom: 0;
    width: 80%;
    &:hover {
      background: #f68657;
    }
  
`;


const card = (props) => {

    
    return (
        <Card  style={{
            backgroundImage: `url(${props.projectImg})`
          }}> 
          <CardSecondDiv>
            <Title>{props.title}</Title>
            <Icon><props.icon size = '6rem'/></Icon>
            <Btn>{props.btn}</Btn>
            </CardSecondDiv>
        </Card> 
    )
}

export default card

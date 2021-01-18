import React from 'react'
import styled from 'styled-components'
import emailjs from 'emailjs-com'

import { FaRegEnvelope } from 'react-icons/fa';
import { IoPhonePortraitOutline } from "react-icons/io5";

function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_btni77y', 'template_lp34068', e.target, 'user_Z3Bs9IxU1oBOjMA2wC14U')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
}

const Form = styled.form`
  width: 77rem;
  height: 49rem;
  background: #e6e6e6;
  border-radius: 0.8rem;
  box-shadow: 0 0 4rem -1rem #000;
  padding: 2rem 3rem;
  max-width: calc(100vw - 4rem);
  box-sizing: border-box;
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Title = styled.h1`
    margin: 1rem 0;
    padding-bottom: 1rem;
    width: 18.0rem;
    color: #444;
    border-bottom: 0.3rem solid #444;
`;

const Paragraph = styled.p`
    &:before{
        content: attr(type);
        display: block;
        margin: 2.8rem 0 0;
        font-size: 1.6rem;
        color: #5a5a5a;
    }
`;

const Input = styled.input`
    width: 100%;
    padding: 1rem;
    box-sizing: border-box;
    background: none;
    outline: none;
    resize: none;
    border: 0;
    transition: all 0.3s;
    border-bottom: 0.2rem solid #bebed2;
    font-size: 1.35rem;
        &:focus {
            border-bottom: 0.2rem solid #78788c;
        }
`;

const Btn = styled.button`
  float: right;
  padding: 0.8rem 1.2rem;
  margin: 0.8rem 0 0;
  border: 0.2rem solid #78788c;
  background: 0;
  color: #5a5a6e;
  cursor: pointer;
  transition: all 0.3s;
        &:hover {
            background: #78788c;
            color: #fff;
        }
`;

const FooterContactForm = styled.div`
  content: "Hi";
  position: absolute;
  bottom: -1.5rem;
  right: -2rem;
  background: #50505a;
  color: #fff;
  width: 32rem;
  padding: 1.6rem 0.4rem 1.6rem 0;
  border-radius: 0.6rem;
  font-size: 1.3rem;
  box-shadow: 1rem 1rem 4rem -1,4rem #000;
`;

const Phone = styled.span`
    margin: 0 0.5rem 0 1.5rem;
`;

const Envelope = styled.span`
    margin: 0 0.5rem 0 1.5rem;
`;

function contactMe() {
    return (
        <Form onSubmit={sendEmail}>
            <Title>Contact Me</Title>
            <Paragraph type='Name:'></Paragraph>
            <Input placeholder="Write your name here.." name="name"></Input>
            <Paragraph type='Email:'></Paragraph>
            <Input placeholder="Let me know how to contact you back.." name="email"></Input>
            <Paragraph type='Message:'></Paragraph>
            <Input placeholder="What would you like to tell me.." name="message"></Input>
            <Btn type='submit'>Send Message</Btn>
            <FooterContactForm>
                <Phone><IoPhonePortraitOutline /></Phone>
                070208545   
                <Envelope><FaRegEnvelope /></Envelope>
                panchemarkoski@gmail.com
            </FooterContactForm>
        </Form>
    )
}

export default contactMe

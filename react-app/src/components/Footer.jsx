import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';
import { Facebook, Instagram, Twitter, LinkedIn, WhatsApp } from '@mui/icons-material';

const Container = styled.div`
  background-color: #1a1a1a;
  color: white;
  padding: 60px 0 30px;
`;

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  
  ${mobile({ gridTemplateColumns: "1fr", gap: "30px" })}
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  font-size: 20px;
  margin-bottom: 20px;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 50px;
    height: 2px;
    background-color: #8e262f;
  }
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  margin-bottom: 12px;
`;

const Link = styled.a`
  color: #ccc;
  text-decoration: none;
  transition: color 0.3s ease;
  
  &:hover {
    color: #8e262f;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 15px;
`;

const ContactIcon = styled.div`
  margin-right: 10px;
  color: #8e262f;
`;

const ContactText = styled.div`
  color: #ccc;
  line-height: 1.5;
`;

const SocialIcons = styled.div`
  display: flex;
  margin-top: 20px;
`;

const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  margin-right: 10px;
  color: white;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #8e262f;
    transform: translateY(-3px);
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 50px;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: #888;
  font-size: 14px;
`;

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Column>
          <Title>About Us</Title>
          <ContactText>
            We are defined by standardized quality and perfection to our craft. 
            We have been making timber products since 1935. For generations we have 
            dedicated ourselves creating products that cater for various developments.
          </ContactText>
          <SocialIcons>
            <SocialIcon href="https://facebook.com" target="_blank">
              <Facebook />
            </SocialIcon>
            <SocialIcon href="https://instagram.com" target="_blank">
              <Instagram />
            </SocialIcon>
            <SocialIcon href="https://twitter.com" target="_blank">
              <Twitter />
            </SocialIcon>
            <SocialIcon href="https://linkedin.com" target="_blank">
              <LinkedIn />
            </SocialIcon>
            <SocialIcon href="https://wa.me/254721917816" target="_blank">
              <WhatsApp />
            </SocialIcon>
          </SocialIcons>
        </Column>
        
        <Column>
          <Title>Quick Links</Title>
          <List>
            <ListItem>
              <Link href="/">Home</Link>
            </ListItem>
            <ListItem>
              <Link href="/about">About Us</Link>
            </ListItem>
            <ListItem>
              <Link href="/products">Products</Link>
            </ListItem>
            <ListItem>
              <Link href="/services">Services</Link>
            </ListItem>
            <ListItem>
              <Link href="/projects">Projects</Link>
            </ListItem>
            <ListItem>
              <Link href="/contact">Contact Us</Link>
            </ListItem>
          </List>
        </Column>
        
        <Column>
          <Title>Products</Title>
          <List>
            <ListItem>
              <Link href="/products/doors">Doors</Link>
            </ListItem>
            <ListItem>
              <Link href="/products/flooring">Flooring</Link>
            </ListItem>
            <ListItem>
              <Link href="/products/kitchens">Kitchens</Link>
            </ListItem>
            <ListItem>
              <Link href="/products/wardrobes">Wardrobes</Link>
            </ListItem>
            <ListItem>
              <Link href="/products/joinery">Joinery</Link>
            </ListItem>
            <ListItem>
              <Link href="/products/processed-timber">Processed Timber</Link>
            </ListItem>
          </List>
        </Column>
        
        <Column>
          <Title>Contact Info</Title>
          <ContactItem>
            <ContactIcon>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="currentColor"/>
              </svg>
            </ContactIcon>
            <ContactText>
              69, Enterprise Road, Industrial Area Nairobi
            </ContactText>
          </ContactItem>
          <ContactItem>
            <ContactIcon>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" fill="currentColor"/>
              </svg>
            </ContactIcon>
            <ContactText>
              +254 721 917 816 / +254 728976780
            </ContactText>
          </ContactItem>
          <ContactItem>
            <ContactIcon>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="currentColor"/>
              </svg>
            </ContactIcon>
            <ContactText>
              info@woodproductskenya.co.ke<br />
              customercare@woodproductskenya.co.ke
            </ContactText>
          </ContactItem>
        </Column>
      </Wrapper>
      
      <Copyright>
        © {new Date().getFullYear()} Wood Products Kenya. All rights reserved.
      </Copyright>
    </Container>
  );
};

export default Footer;

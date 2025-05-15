import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';
import { Facebook, Instagram, Twitter, WhatsApp } from '@mui/icons-material';

// Import TikTok icon (since it's not available in Material UI)
const TikTokIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

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
  
  ${mobile({ 
    gridTemplateColumns: "1fr", 
    gap: "30px" 
  })}
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const LogoColumn = styled(Column)`
  align-items: flex-start;
`;

const Title = styled.h3`
  font-size: 20px;
  margin-bottom: 20px;
  position: relative;
  font-family: 'Playfair Display', serif;
  font-weight: 400;
  letter-spacing: 0.5px;
  
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

const Logo = styled.img`
  width: 160px;
  margin-bottom: 20px;
  
  ${mobile({ 
    width: '140px',
    marginBottom: '15px'
  })}
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  margin-bottom: 12px;
  font-family: 'Raleway', sans-serif;
  font-weight: 300;
  letter-spacing: 0.3px;
`;

const Link = styled.a`
  color: #ccc;
  text-decoration: none;
  transition: color 0.3s ease;
  font-family: 'Raleway', sans-serif;
  font-weight: 300;
  letter-spacing: 0.3px;
  
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
  font-family: 'Raleway', sans-serif;
  font-weight: 300;
  letter-spacing: 0.3px;
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
  font-family: 'Raleway', sans-serif;
  font-weight: 300;
  letter-spacing: 0.3px;
`;

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <LogoColumn>
          <Logo src="images/marple1.jpg" alt="Maple Wood Products Logo" />
          <ContactText>
            We are defined by standardized quality and perfection to our craft. 
            We have been making timber products since 2018. For years we have 
            dedicated ourselves creating products that cater for various developments.
          </ContactText>
          <SocialIcons>
            <SocialIcon href="https://instagram.com/Maple_Wood_Products" target="_blank" aria-label="Instagram">
              <Instagram />
            </SocialIcon>
            <SocialIcon href="https://tiktok.com/@Maple_Wood_Products" target="_blank" aria-label="TikTok">
              <TikTokIcon />
            </SocialIcon>
            <SocialIcon href="https://wa.me/254795683399" target="_blank" aria-label="WhatsApp">
              <WhatsApp />
            </SocialIcon>
          </SocialIcons>
        </LogoColumn>
        
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
              <Link href="/products/Accessories">Accessories</Link>
            </ListItem>
            <ListItem>
              <Link href="/products/Others">Others</Link>
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
              Eastern Bypass Opposite Shell Petrol Station
            </ContactText>
          </ContactItem>
          <ContactItem>
            <ContactIcon>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" fill="currentColor"/>
              </svg>
            </ContactIcon>
            <ContactText>
              +254 795683399 
            </ContactText>
          </ContactItem>
          <ContactItem>
            <ContactIcon>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="currentColor"/>
              </svg>
            </ContactIcon>
            <ContactText>
              info@maplewoodproducts.co.ke<br />
            </ContactText>
          </ContactItem>
        </Column>
      </Wrapper>
      
      <Copyright>
        © {new Date().getFullYear()} Maple Wood Products. All rights reserved.
      </Copyright>
    </Container>
  );
};

export default Footer;

import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';
import LogoImage from '../images/marple1.jpg'; // Import the logo directly

// Custom SVG icons for better accuracy
const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);

// TikTok icon with accurate SVG path
const TikTokIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

// WhatsApp icon with accurate SVG path
const WhatsAppIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
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
  gap: 12px;
`;

const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background-color: ${props => props.bgColor || 'rgba(255, 255, 255, 0.1)'};
  color: ${props => props.textColor || 'white'};
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }
`;

const CopyrightContainer = styled.div`
  margin-top: 50px;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: #888;
  font-size: 14px;
  font-family: 'Raleway', sans-serif;
  font-weight: 300;
  letter-spacing: 0.3px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
  
  ${mobile({ 
    flexDirection: "column",
    gap: "10px",
    textAlign: "center"
  })}
`;

const Copyright = styled.div``;

const DesignCredit = styled.div`
  a {
    color: #888;
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: #8e262f;
    }
  }
`;

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <LogoColumn>
          <Logo src={LogoImage} alt="Maple Wood Products Logo" />
          <ContactText>
            We are defined by standardized quality and perfection to our craft. 
            We have been making timber products since 2018. For years we have 
            dedicated ourselves creating products that cater for various developments.
          </ContactText>
          <SocialIcons>
            <SocialIcon 
              href="https://instagram.com/Maple_Wood_Products" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Instagram"
              bgColor="#E1306C"
            >
              <InstagramIcon />
            </SocialIcon>
            <SocialIcon 
              href="https://tiktok.com/@Maple_Wood_Products" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="TikTok"
              bgColor="#000000"
            >
              <TikTokIcon />
            </SocialIcon>
            <SocialIcon 
              href="https://wa.me/254795683399" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              bgColor="#25D366"
            >
              <WhatsAppIcon />
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
      
      <CopyrightContainer>
        <Copyright>
          © {new Date().getFullYear()} Maple Wood Products. All rights reserved.
        </Copyright>
        <DesignCredit>
          Designed by <a href="https://savannahinc.co.ke" target="_blank" rel="noopener noreferrer">Savannah Inc</a>
        </DesignCredit>
      </CopyrightContainer>
    </Container>
  );
};

export default Footer;

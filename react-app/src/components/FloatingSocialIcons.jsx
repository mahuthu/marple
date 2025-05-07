import React from 'react';
import styled from 'styled-components';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import { mobile } from '../responsive';

// TikTok icon component since it's not in Material UI
const TikTokIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const Container = styled.div`
  position: fixed;
  right: 20px;
  bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  z-index: 1000;
  
  ${mobile({
    right: '10px',
    bottom: '10px',
    gap: '8px',
    transform: 'scale(0.85)',
    transformOrigin: 'bottom right'
  })}
`;

const IconWrapper = styled.a`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #8e262f;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  opacity: 0.9;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  }
  
  ${mobile({
    width: '40px',
    height: '40px',
    '& svg': {
      fontSize: '1.2rem'
    }
  })}
`;

const FloatingSocialIcons = () => {
  return (
    <Container>
      <IconWrapper 
        href="https://wa.me/254795683399" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="WhatsApp"
      >
        <WhatsAppIcon fontSize="medium" />
      </IconWrapper>
      <IconWrapper 
        href="https://instagram.com/Maple_Wood_Products" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Instagram"
      >
        <InstagramIcon fontSize="medium" />
      </IconWrapper>
      <IconWrapper 
        href="https://tiktok.com/@Maple_Wood_Products" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="TikTok"
      >
        <TikTokIcon />
      </IconWrapper>
    </Container>
  );
};

export default FloatingSocialIcons; 
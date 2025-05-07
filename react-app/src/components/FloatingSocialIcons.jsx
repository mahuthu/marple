import React, { useState, useEffect } from 'react';
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
  right: 0;
  bottom: 50px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  z-index: 1000;
  padding: 10px;
  
  /* Ensure container stays within viewport on all devices */
  max-width: 100vw;
  box-sizing: border-box;
  
  ${mobile({
    right: '0',
    bottom: '30px',
    padding: '5px',
    gap: '5px',
  })}
`;

const IconWrapper = styled.a`
  width: 45px;
  height: 45px;
  border-radius: 4px;
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
    width: '35px',
    height: '35px',
    '& svg': {
      fontSize: '1.1rem'
    }
  })}
`;

// Optional collapsible functionality for mobile
const ToggleButton = styled.button`
  display: none;
  width: 35px;
  height: 35px;
  border-radius: 4px;
  background-color: #ffffff;
  color: #8e262f;
  border: none;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  align-items: center;
  justify-content: center;
  
  ${mobile({
    display: 'flex',
  })}
`;

const FloatingSocialIcons = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [screenWidth, setScreenWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 0
  );

  // Track screen width for responsive adjustments
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setScreenWidth(window.innerWidth);
      };
      
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  // Auto-collapse on small screens
  useEffect(() => {
    // Adjust this breakpoint based on your mobile breakpoint
    const mobileBreakpoint = 768;
    if (screenWidth <= mobileBreakpoint) {
      setIsCollapsed(true);
    } else {
      setIsCollapsed(false);
    }
  }, [screenWidth]);

  return (
    <Container>
      {!isCollapsed && (
        <>
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
        </>
      )}
      <ToggleButton 
        onClick={() => setIsCollapsed(!isCollapsed)}
        aria-label={isCollapsed ? "Show social media icons" : "Hide social media icons"}
      >
        {isCollapsed ? "+" : "−"}
      </ToggleButton>
    </Container>
  );
};

export default FloatingSocialIcons;
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

// Main container with adjusted position
const Container = styled.div`
  position: fixed;
  right: 20px; /* Move further from the right edge */
  bottom: 50px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  z-index: 1000;
  padding: 10px;
  
  /* Ensure container stays within viewport */
  max-width: calc(100vw - 40px); /* Adjust based on right position */
  box-sizing: border-box;
  
  ${mobile({
    right: '15px', /* Still keep some distance on mobile */
    bottom: '30px',
    padding: '5px',
    gap: '5px',
  })}
  
  /* Extra direct media query for safety */
  @media screen and (max-width: 480px) {
    right: 15px;
  }
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
      fontSize: '1.1rem',
      width: '20px',
      height: '20px'
    }
  })}
`;

// Toggle button with fixed positioning - no negative margins
const ToggleButton = styled.button`
  width: 35px;
  height: 35px;
  border-radius: 4px;
  background-color: #ffffff;
  color: #8e262f;
  border: none;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  display: none;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: bold;
  
  ${mobile({
    display: 'flex',
    position: 'static', /* Don't use relative positioning */
    marginLeft: '0'     /* Remove negative margin */
  })}
  
  /* Extra direct media query for safety */
  @media screen and (max-width: 480px) {
    display: flex;
  }
`;

const IconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  
  ${mobile({
    gap: '5px'
  })}
`;

const FloatingSocialIcons = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Track screen width for responsive adjustments
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Initialize on mount
    if (typeof window !== 'undefined') {
      checkMobile();
      setIsCollapsed(window.innerWidth <= 768);
      window.addEventListener('resize', checkMobile);
      return () => window.removeEventListener('resize', checkMobile);
    }
  }, []);

  // Update collapsed state when mobile state changes
  useEffect(() => {
    setIsCollapsed(isMobile);
  }, [isMobile]);

  return (
    <Container>
      {!isCollapsed && (
        <IconsContainer>
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
        </IconsContainer>
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
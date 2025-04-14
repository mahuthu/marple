import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';
import { Link } from 'react-router-dom';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Container = styled.div`
  background-color: #f9f9f9;
  padding: 80px 0;
  margin: 40px 0;
  font-family: 'Montserrat', sans-serif;
`;

const Wrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.2rem;
  color: #333;
  margin-bottom: 20px;
  position: relative;
  padding-bottom: 15px;
  font-weight: 600;
  letter-spacing: 1px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 2px;
    background-color: #8e262f;
  }

  ${mobile({ fontSize: "1.8rem" })}
`;

const Description = styled.p`
  font-size: 1rem;
  color: #666;
  max-width: 700px;
  margin-bottom: 35px;
  line-height: 1.8;
  font-weight: 400;
`;

const ContactButton = styled(Link)`
  background-color: #8e262f;
  color: white;
  padding: 12px 35px;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;
  margin-bottom: 35px;
  letter-spacing: 0.5px;

  &:hover {
    background-color: #6d1d24;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(142, 38, 47, 0.2);
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 25px;
  margin-top: 15px;
`;

const SocialIcon = styled.a`
  color: #333;
  font-size: 1.5rem;
  transition: all 0.3s ease;
  opacity: 0.8;

  &:hover {
    color: #8e262f;
    transform: translateY(-3px);
    opacity: 1;
  }
`;

const CallToAction = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Let's Get Connected</Title>
        <Description>
          Please reach out to us, we want to guide and advise you on our products. 
          We are available on social media, WhatsApp, Email and Call. Don't hesitate 
          please ask all your questions to our customer service team.
        </Description>
        <ContactButton to="/contact">Contact Us</ContactButton>
        <SocialIcons>
          <SocialIcon href="https://wa.me/254721917816" target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon fontSize="medium" />
          </SocialIcon>
          <SocialIcon href="https://www.facebook.com/woodproductskenya" target="_blank" rel="noopener noreferrer">
            <FacebookIcon fontSize="medium" />
          </SocialIcon>
          <SocialIcon href="https://www.instagram.com/woodproductskenya" target="_blank" rel="noopener noreferrer">
            <InstagramIcon fontSize="medium" />
          </SocialIcon>
          <SocialIcon href="https://www.youtube.com/woodproductskenya" target="_blank" rel="noopener noreferrer">
            <YouTubeIcon fontSize="medium" />
          </SocialIcon>
          <SocialIcon href="https://www.linkedin.com/company/woodproductskenya" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon fontSize="medium" />
          </SocialIcon>
        </SocialIcons>
      </Wrapper>
    </Container>
  );
};

export default CallToAction; 
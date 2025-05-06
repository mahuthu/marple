import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';
import { Link } from 'react-router-dom';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

// TikTok icon component since it's not in Material UI
const TikTokIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const Container = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/floors4.jpeg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 80px 0;
  margin: 40px 0;
  font-family: 'Montserrat', sans-serif;
  color: white;

  ${mobile({
    padding: "60px 0",
    margin: "30px 0"
  })}
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
  color: white;
  margin-bottom: 20px;
  position: relative;
  padding-bottom: 15px;
  font-weight: 600;
  letter-spacing: 1px;
  font-family: 'Playfair Display', serif;
  font-weight: 400;
  letter-spacing: 1px;
  opacity: ${props => props.isVisible ? 1 : 0};
  transform: ${props => props.isVisible ? 'translateY(0)' : 'translateY(20px)'};
  transition: opacity 0.7s ease, transform 0.7s ease;

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
  color: rgba(255, 255, 255, 0.9);
  max-width: 700px;
  margin-bottom: 35px;
  line-height: 1.8;
  font-weight: 400;
  font-family: 'Raleway', sans-serif;
  font-weight: 300;
  letter-spacing: 0.3px;
  opacity: ${props => props.isVisible ? 1 : 0};
  transform: ${props => props.isVisible ? 'translateY(0)' : 'translateY(20px)'};
  transition: opacity 0.7s ease, transform 0.7s ease;
  transition-delay: 0.1s;
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
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
  letter-spacing: 0.5px;
  opacity: ${props => props.isVisible ? 1 : 0};
  transform: ${props => props.isVisible ? 'translateY(0)' : 'translateY(20px)'};
  transition: opacity 0.7s ease, transform 0.7s ease, background-color 0.3s ease, box-shadow 0.3s ease;
  transition-delay: 0.2s;

  &:hover {
    background-color: #6d1d24;
    transform: ${props => props.isVisible ? 'translateY(-2px)' : 'translateY(20px)'};
    box-shadow: 0 4px 8px rgba(142, 38, 47, 0.2);
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 25px;
  margin-top: 15px;
  opacity: ${props => props.isVisible ? 1 : 0};
  transition: opacity 0.7s ease;
  transition-delay: 0.3s;
`;

const SocialIcon = styled.a`
  color: white;
  font-size: 1.5rem;
  transition: all 0.3s ease;
  opacity: 0.8;
  transform: ${props => props.isVisible ? 'translateY(0)' : 'translateY(10px)'};
  transition: transform 0.5s ease, color 0.3s ease, opacity 0.3s ease;
  transition-delay: ${props => `${0.3 + props.index * 0.1}s`};

  &:hover {
    color: #8e262f;
    transform: translateY(-3px);
    opacity: 1;
  }
`;

const CallToAction = () => {
  const [visibleElements, setVisibleElements] = useState({});
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonRef = useRef(null);
  const socialIconsRef = useRef(null);
  const iconRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.dataset.id;
          setVisibleElements(prev => ({ ...prev, [id]: true }));
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe elements
    if (titleRef.current) {
      titleRef.current.dataset.id = 'title';
      observer.observe(titleRef.current);
    }
    if (descriptionRef.current) {
      descriptionRef.current.dataset.id = 'description';
      observer.observe(descriptionRef.current);
    }
    if (buttonRef.current) {
      buttonRef.current.dataset.id = 'button';
      observer.observe(buttonRef.current);
    }
    if (socialIconsRef.current) {
      socialIconsRef.current.dataset.id = 'socialIcons';
      observer.observe(socialIconsRef.current);
    }

    iconRefs.current.forEach((ref, index) => {
      if (ref) {
        ref.dataset.id = `icon-${index}`;
        observer.observe(ref);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Container>
      <Wrapper>
        <Title ref={titleRef} isVisible={visibleElements.title}>Let's Get Connected</Title>
        <Description ref={descriptionRef} isVisible={visibleElements.description}>
          Please reach out to us, we want to guide and advise you on our products. 
          We are available on social media, WhatsApp, Email and Call. Don't hesitate 
          please ask all your questions to our customer service team.
        </Description>
        <ContactButton 
          ref={buttonRef} 
          isVisible={visibleElements.button} 
          to="/contact"
        >
          Contact Us
        </ContactButton>
        <SocialIcons ref={socialIconsRef} isVisible={visibleElements.socialIcons}>
          <SocialIcon 
            ref={el => iconRefs.current[0] = el} 
            isVisible={visibleElements['icon-0']} 
            index={0}
            href="https://wa.me/254795683399" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <WhatsAppIcon fontSize="medium" />
          </SocialIcon>
          <SocialIcon 
            ref={el => iconRefs.current[1] = el} 
            isVisible={visibleElements['icon-1']} 
            index={1}
            href="https://www.facebook.com/Maple_Wood_Products" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FacebookIcon fontSize="medium" />
          </SocialIcon>
          <SocialIcon 
            ref={el => iconRefs.current[2] = el} 
            isVisible={visibleElements['icon-2']} 
            index={2}
            href="https://www.instagram.com/Maple_Wood_Products" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <InstagramIcon fontSize="medium" />
          </SocialIcon>
          <SocialIcon 
            ref={el => iconRefs.current[3] = el} 
            isVisible={visibleElements['icon-3']} 
            index={3}
            href="https://www.youtube.com/Maple_Wood_Products" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <YouTubeIcon fontSize="medium" />
          </SocialIcon>
          <SocialIcon 
            ref={el => iconRefs.current[4] = el} 
            isVisible={visibleElements['icon-4']} 
            index={4}
            href="https://www.tiktok.com/@Maple_Wood_Products" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <TikTokIcon />
          </SocialIcon>
        </SocialIcons>
      </Wrapper>
    </Container>
  );
};

export default CallToAction; 
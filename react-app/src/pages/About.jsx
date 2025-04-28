import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Announcement from '../components/Announcement';

// Styled components
const Container = styled.div`
  width: 100%;
`;

const HeroSection = styled.div`
  height: 60vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/interior1.webp');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  
  ${mobile({ height: "40vh" })}
`;

const HeroTitle = styled.h1`
  font-size: 60px;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 2px;
  opacity: ${props => props.isVisible ? 1 : 0};
  transform: ${props => props.isVisible ? 'translateY(0)' : 'translateY(30px)'};
  transition: opacity 0.8s ease, transform 0.8s ease;
  
  ${mobile({ fontSize: "36px" })}
`;

const HeroSubtitle = styled.p`
  font-size: 20px;
  max-width: 800px;
  margin: 0 auto;
  opacity: ${props => props.isVisible ? 1 : 0};
  transform: ${props => props.isVisible ? 'translateY(0)' : 'translateY(30px)'};
  transition: opacity 0.8s ease, transform 0.8s ease;
  transition-delay: 0.2s;
  
  ${mobile({ fontSize: "16px" })}
`;

const ContentSection = styled.div`
  padding: 80px 0;
`;

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Section = styled.div`
  margin-bottom: 80px;
  
  ${mobile({ marginBottom: "50px" })}
`;

const SectionTitle = styled.h2`
  font-size: 36px;
  margin-bottom: 30px;
  text-align: center;
  position: relative;
  opacity: ${props => props.isVisible ? 1 : 0};
  transform: ${props => props.isVisible ? 'translateY(0)' : 'translateY(20px)'};
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background-color: #8e262f;
  }
  
  ${mobile({ fontSize: "28px" })}
`;

const SectionContent = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  opacity: ${props => props.isVisible ? 1 : 0};
  transform: ${props => props.isVisible ? 'translateY(0)' : 'translateY(30px)'};
  transition: opacity 0.7s ease, transform 0.7s ease;
  transition-delay: 0.2s;
  
  ${mobile({ flexDirection: "column" })}
`;

const TextContent = styled.div`
  flex: 1;
`;

const Paragraph = styled.p`
  font-size: 16px;
  line-height: 1.8;
  color: #555;
  margin-bottom: 20px;
`;

const ImageContent = styled.div`
  flex: 1;
  height: 400px;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  
  ${mobile({ height: "300px", width: "100%" })}
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`;

const MissionVisionContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  margin-top: 40px;
  opacity: ${props => props.isVisible ? 1 : 0};
  transform: ${props => props.isVisible ? 'translateY(0)' : 'translateY(30px)'};
  transition: opacity 0.7s ease, transform 0.7s ease;
  transition-delay: 0.2s;
  
  ${mobile({ gridTemplateColumns: "1fr" })}
`;

const MissionVisionCard = styled.div`
  background-color: #f9f9f9;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
  }
`;

const CardTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
  position: relative;
  padding-bottom: 15px;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 2px;
    background-color: #8e262f;
  }
`;

const CardText = styled.p`
  font-size: 16px;
  line-height: 1.8;
  color: #555;
`;

const CoreValuesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 40px;
  opacity: ${props => props.isVisible ? 1 : 0};
  transform: ${props => props.isVisible ? 'translateY(0)' : 'translateY(30px)'};
  transition: opacity 0.7s ease, transform 0.7s ease;
  transition-delay: 0.2s;
  
  ${mobile({ gridTemplateColumns: "1fr" })}
`;

const ValueCard = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  text-align: center;
  transition: all 0.3s ease;
  opacity: ${props => props.isVisible ? 1 : 0};
  transform: ${props => props.isVisible ? 'translateY(0)' : 'translateY(20px)'};
  transition: opacity 0.5s ease, transform 0.5s ease;
  transition-delay: ${props => `${0.1 + props.index * 0.1}s`};
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
`;

const ValueIcon = styled.div`
  width: 80px;
  height: 80px;
  margin: 0 auto 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f9f9f9;
  border-radius: 50%;
  color: #8e262f
  font-size: 30px;
`;

const ValueTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 15px;
  color: #333;
`;

const ValueText = styled.p`
  font-size: 14px;
  line-height: 1.6;
  color: #666;
`;

const About = () => {
  const [visibleElements, setVisibleElements] = useState({});
  const heroTitleRef = useRef(null);
  const heroSubtitleRef = useRef(null);
  const whoWeAreTitleRef = useRef(null);
  const whoWeAreContentRef = useRef(null);
  const missionVisionTitleRef = useRef(null);
  const missionVisionContainerRef = useRef(null);
  const coreValuesTitleRef = useRef(null);
  const coreValuesContainerRef = useRef(null);
  const valueCardRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    };

    // Create observer for hero elements
    const heroObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.dataset.id;
          setVisibleElements(prev => ({ ...prev, [id]: true }));
          heroObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Create observer for section elements
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.dataset.id;
          setVisibleElements(prev => ({ ...prev, [id]: true }));
          sectionObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Create observer for value cards
    const cardObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.dataset.id;
          setVisibleElements(prev => ({ ...prev, [id]: true }));
          cardObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe hero elements
    if (heroTitleRef.current) {
      heroTitleRef.current.dataset.id = 'heroTitle';
      heroObserver.observe(heroTitleRef.current);
    }
    if (heroSubtitleRef.current) {
      heroSubtitleRef.current.dataset.id = 'heroSubtitle';
      heroObserver.observe(heroSubtitleRef.current);
    }

    // Observe section elements
    if (whoWeAreTitleRef.current) {
      whoWeAreTitleRef.current.dataset.id = 'whoWeAreTitle';
      sectionObserver.observe(whoWeAreTitleRef.current);
    }
    if (whoWeAreContentRef.current) {
      whoWeAreContentRef.current.dataset.id = 'whoWeAreContent';
      sectionObserver.observe(whoWeAreContentRef.current);
    }
    if (missionVisionTitleRef.current) {
      missionVisionTitleRef.current.dataset.id = 'missionVisionTitle';
      sectionObserver.observe(missionVisionTitleRef.current);
    }
    if (missionVisionContainerRef.current) {
      missionVisionContainerRef.current.dataset.id = 'missionVisionContainer';
      sectionObserver.observe(missionVisionContainerRef.current);
    }
    if (coreValuesTitleRef.current) {
      coreValuesTitleRef.current.dataset.id = 'coreValuesTitle';
      sectionObserver.observe(coreValuesTitleRef.current);
    }
    if (coreValuesContainerRef.current) {
      coreValuesContainerRef.current.dataset.id = 'coreValuesContainer';
      sectionObserver.observe(coreValuesContainerRef.current);
    }

    // Observe value cards
    valueCardRefs.current.forEach((ref, index) => {
      if (ref) {
        ref.dataset.id = `valueCard-${index}`;
        cardObserver.observe(ref);
      }
    });

    return () => {
      heroObserver.disconnect();
      sectionObserver.disconnect();
      cardObserver.disconnect();
    };
  }, []);

  return (
    <Container>
      <Announcement/>
      <Navbar />
      <HeroSection>
        <div>
          <HeroTitle ref={heroTitleRef} isVisible={visibleElements.heroTitle}>About Us</HeroTitle>
          <HeroSubtitle ref={heroSubtitleRef} isVisible={visibleElements.heroSubtitle}>Your trusted partner in quality wood products since 2018</HeroSubtitle>
        </div>
      </HeroSection>
      
      <ContentSection>
        <Wrapper>
          <Section>
            <SectionTitle ref={whoWeAreTitleRef} isVisible={visibleElements.whoWeAreTitle}>Who We Are?</SectionTitle>
            <SectionContent ref={whoWeAreContentRef} isVisible={visibleElements.whoWeAreContent}>
              <TextContent>
                <Paragraph>
                  Marple Wood Products Ltd has carried out various interior fit out work for well renowned developers. Our experience in interior fit-outs enables us to carry out large-scale projects to the highest standards of quality within a given cost and time frame.
                </Paragraph>
                <Paragraph>
                  From concept to completion, we combine the practical with the aesthetic, creating grace and opulence in all the work we do. We are defined by standardized quality and perfection to our craft.
                </Paragraph>
                <Paragraph>
                  We have been making timber products since 2018. For generations we have dedicated ourselves creating products that cater for various developments. It's a team effort requiring creativity, engineering, innovation and experience.
                </Paragraph>
              </TextContent>
              <ImageContent>
                <Image src="/images/interior2.avif" alt="Wood Products Workshop" />
              </ImageContent>
            </SectionContent>
          </Section>
          
          <Section>
            <SectionTitle ref={missionVisionTitleRef} isVisible={visibleElements.missionVisionTitle}>Our Mission & Vision</SectionTitle>
            <MissionVisionContainer ref={missionVisionContainerRef} isVisible={visibleElements.missionVisionContainer}>
              <MissionVisionCard>
                <CardTitle>Our Mission</CardTitle>
                <CardText>
                  We shall endeavor to provide our customers within the African Region with eco-friendly, quality building and interior solutions that comply with international standards. We strive to achieve this by empowering our employees to exceed customer expectations by providing unraveled service delivery through our experience and logical expertise.
                </CardText>
              </MissionVisionCard>
              
              <MissionVisionCard>
                <CardTitle>Our Vision</CardTitle>
                <CardText>
                  To be everyone's FIRST choice for timber related interior solutions in the region. We want to be the leading provider of the finest wood products that bring out your best ideas and help you create inspiring and captivating spaces.
                </CardText>
              </MissionVisionCard>
            </MissionVisionContainer>
          </Section>
          
          <Section>
            <SectionTitle ref={coreValuesTitleRef} isVisible={visibleElements.coreValuesTitle}>Our Core Values</SectionTitle>
            <CoreValuesContainer ref={coreValuesContainerRef} isVisible={visibleElements.coreValuesContainer}>
              <ValueCard 
                ref={el => valueCardRefs.current[0] = el} 
                isVisible={visibleElements['valueCard-0']}
                index={0}
              >
                <ValueIcon>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </ValueIcon>
                <ValueTitle>Create Happy Spaces</ValueTitle>
                <ValueText>
                  We believe in creating environments that bring joy and comfort to our clients, transforming spaces into places where people love to be.
                </ValueText>
              </ValueCard>
              
              <ValueCard 
                ref={el => valueCardRefs.current[1] = el} 
                isVisible={visibleElements['valueCard-1']}
                index={1}
              >
                <ValueIcon>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z" fill="currentColor"/>
                  </svg>
                </ValueIcon>
                <ValueTitle>Passion For Your Work</ValueTitle>
                <ValueText>
                  Our team is driven by a genuine passion for woodworking and craftsmanship, ensuring that every project receives the attention it deserves.
                </ValueText>
              </ValueCard>
              
              <ValueCard 
                ref={el => valueCardRefs.current[2] = el} 
                isVisible={visibleElements['valueCard-2']}
                index={2}
              >
                <ValueIcon>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </ValueIcon>
                <ValueTitle>Quality & Result Oriented</ValueTitle>
                <ValueText>
                  We are committed to delivering exceptional quality in every product and service, focusing on results that exceed expectations.
                </ValueText>
              </ValueCard>
              
              <ValueCard 
                ref={el => valueCardRefs.current[3] = el} 
                isVisible={visibleElements['valueCard-3']}
                index={3}
              >
                <ValueIcon>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 20H22V18C22 16.3431 20.6569 15 19 15C18.0444 15 17.1931 15.4468 16.6438 16.1429M17 20H7M17 20V18C17 17.3438 16.8736 16.717 16.6438 16.1429M7 20H2V18C2 16.3431 3.34315 15 5 15C5.95561 15 6.80686 15.4468 7.35625 16.1429M7 20V18C7 17.3438 7.12642 16.717 7.35625 16.1429M7.3562 16.1429C8.0935 15.301 9.1 14.8 10.2 14.8H13.8C14.9 14.8 15.9065 15.301 16.6438 16.1429M15 7C15 8.65685 13.6569 10 12 10C10.3431 10 9 8.65685 9 7C9 5.34315 10.3431 4 12 4C13.6569 4 15 5.34315 15 7ZM21 10C21 11.1046 20.1046 12 19 12C17.8954 12 17 11.1046 17 10C17 8.89543 17.8954 8 19 8C20.1046 8 21 8.89543 21 10ZM3 10C3 11.1046 3.89543 12 5 12C6.10457 12 7 11.1046 7 10C7 8.89543 6.10457 8 5 8C3.89543 8 3 8.89543 3 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </ValueIcon>
                <ValueTitle>Empower Yourself & Others</ValueTitle>
                <ValueText>
                  We believe in continuous learning and development, empowering our team and clients with knowledge and skills to achieve their goals.
                </ValueText>
              </ValueCard>
              
              <ValueCard 
                ref={el => valueCardRefs.current[4] = el} 
                isVisible={visibleElements['valueCard-4']}
                index={4}
              >
                <ValueIcon>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.05589 17H5.07089C5.55589 17 5.98589 16.72 6.18089 16.242L6.68089 15C6.88589 14.5 7.34589 14.2 7.83089 14.2H16.1409C16.6009 14.2 17.0109 14.37 17.2709 14.68L18.0359 15.77C18.3259 16.17 18.7659 16.4 19.2459 16.4H20.9459M21 10.5C21 14.6421 17.6421 18 13.5 18C9.35786 18 6 14.6421 6 10.5C6 6.35786 9.35786 3 13.5 3C17.6421 3 21 6.35786 21 10.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </ValueIcon>
                <ValueTitle>Eco-Friendly Workspace</ValueTitle>
                <ValueText>
                  We are committed to sustainable practices, using ethically sourced materials and implementing environmentally conscious processes in our work.
                </ValueText>
              </ValueCard>
            </CoreValuesContainer>
          </Section>
        </Wrapper>
      </ContentSection>
      
      <Footer />
    </Container>
  );
};

export default About; 
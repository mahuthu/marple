import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
  padding: 50px 0;
  background-color: #f9f9f9;
`;

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 32px;
  margin-bottom: 50px;
  color: #333;
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
`;

const FeatureSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 60px;
  flex-direction: ${props => props.reverse ? 'row-reverse' : 'row'};
  opacity: ${props => props.isVisible ? 1 : 0};
  transform: ${props => {
    if (!props.isVisible) {
      return props.reverse ? 'translateX(50px)' : 'translateX(-50px)';
    }
    return 'translateX(0)';
  }};
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  
  ${mobile({ flexDirection: 'column' })}
`;

const ImageContainer = styled.div`
  flex: 1;
  padding: 0 20px;
  
  ${mobile({ padding: '0 0 20px 0' })}
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const TextContainer = styled.div`
  flex: 1;
  padding: 0 20px;
  
  ${mobile({ padding: '0 0 20px 0' })}
`;

const FeatureTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 15px;
  color: #333;
`;

const FeatureText = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #666;
  margin-bottom: 20px;
`;

const FeatureList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const FeatureItem = styled.li`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  
  &:before {
    content: '✓';
    color: #8e262f;
    margin-right: 10px;
    font-weight: bold;
  }
`;

const WhyChooseUs = () => {
  const [visibleItems, setVisibleItems] = useState({});
  const titleRef = useRef(null);
  const featureRefs = useRef([]);

  useEffect(() => {
    const titleObserver = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setVisibleItems(prev => ({ ...prev, title: true }));
        titleObserver.unobserve(entry.target);
      }
    }, {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    });

    if (titleRef.current) {
      titleObserver.observe(titleRef.current);
    }

    // Create observers for each feature section
    const featureObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.dataset.id;
          setVisibleItems(prev => ({ ...prev, [id]: true }));
          featureObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    });

    featureRefs.current.forEach(ref => {
      if (ref) {
        featureObserver.observe(ref);
      }
    });

    return () => {
      if (titleRef.current) {
        titleObserver.unobserve(titleRef.current);
      }
      featureRefs.current.forEach(ref => {
        if (ref) {
          featureObserver.unobserve(ref);
        }
      });
    };
  }, []);

  return (
    <Container>
      <Wrapper>
        <Title ref={titleRef} isVisible={visibleItems.title}>Why Choose Us?</Title>
        
        <FeatureSection 
          ref={el => featureRefs.current[0] = el} 
          data-id="feature-1"
          isVisible={visibleItems["feature-1"]}
        >
          <ImageContainer>
            <Image src="/images/interior1.webp" alt="Quality Interior Design" />
          </ImageContainer>
          <TextContainer>
            <FeatureTitle>Expert Craftsmanship</FeatureTitle>
            <FeatureText>
              At Marple Wood Products, we pride ourselves on delivering exceptional quality in every project. 
              Our team of skilled craftsmen brings years of experience and attention to detail to 
              ensure your space is transformed into something extraordinary.
            </FeatureText>
            <FeatureList>
              <FeatureItem>Premium materials and finishes</FeatureItem>
              <FeatureItem>Precision in every detail</FeatureItem>
              <FeatureItem>Durable and long-lasting results</FeatureItem>
              <FeatureItem>Customized to your specific needs</FeatureItem>
            </FeatureList>
          </TextContainer>
        </FeatureSection>
        
        <FeatureSection 
          reverse
          ref={el => featureRefs.current[1] = el} 
          data-id="feature-2"
          isVisible={visibleItems["feature-2"]}
        >
          <ImageContainer>
            <Image src="/images/cabinets2.jpg" alt="Innovative Solutions" />
          </ImageContainer>
          <TextContainer>
            <FeatureTitle>Innovative Design Solutions</FeatureTitle>
            <FeatureText>
              We combine creativity with functionality to create spaces that not only look beautiful 
              but also work perfectly for your lifestyle. Our innovative approach ensures that every 
              project is unique and tailored to your preferences.
            </FeatureText>
            <FeatureList>
              <FeatureItem>Modern and timeless designs</FeatureItem>
              <FeatureItem>Space optimization techniques</FeatureItem>
              <FeatureItem>Eco-friendly options available</FeatureItem>
              <FeatureItem>Smart storage solutions</FeatureItem>
            </FeatureList>
          </TextContainer>
        </FeatureSection>
      </Wrapper>
    </Container>
  );
};

export default WhyChooseUs; 
import React from 'react';
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
  return (
    <Container>
      <Wrapper>
        <Title>Why Choose Us?</Title>
        
        <FeatureSection>
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
        
        <FeatureSection reverse>
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
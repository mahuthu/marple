import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
  padding: 80px 0;
  background-image: url('/images/acc2.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  color: white;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 1;
  }
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 60px;
  position: relative;
  z-index: 2;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  font-family: 'Playfair Display', serif;
  font-weight: 400;
  letter-spacing: 1px;
  
  ${mobile({ fontSize: "1.8rem", marginBottom: "40px" })}
`;

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 2;
  
  ${mobile({ flexDirection: "column", alignItems: "center" })}
`;

const MilestoneItem = styled.div`
  text-align: center;
  flex: 1;
  padding: 0 20px;
  transition: transform 0.3s ease;
  position: relative;
  
  /* Desktop vertical separator */
  &:not(:last-child)::after {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 1px;
    height: 50%;
    background-color: white;
    opacity: 0.5;
  }
  
  &:hover {
    transform: translateY(-10px);
  }
  
  ${mobile({ 
    marginBottom: "40px",
    position: "relative",
    width: "100%",
    "&:not(:last-child)::after": {
      content: '""',
      position: "absolute",
      bottom: "-20px",
      left: "50%",
      transform: "translateX(-50%)",
      width: "50%",
      height: "1px",
      backgroundColor: "white",
      opacity: "0.5",
      top: "auto",
      right: "auto"
    }
  })}
`;

const Number = styled.div`
  font-size: 60px;
  font-weight: bold;
  margin-bottom: 10px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  
  ${mobile({ fontSize: "40px" })}
`;

const Label = styled.div`
  font-size: 18px;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  
  ${mobile({ fontSize: "16px" })}
`;

const Milestones = () => {
  const [counts, setCounts] = useState([]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef(null);
  
  const milestones = [
    { id: 1, number: 7, label: "Years In Industry", suffix: "+" },
    { id: 2, number: 10, label: "Employees" },
    { id: 3, number: 150, label: "Satisfied Clients", suffix: "+" },
    { id: 4, number: 5000, label: "SQM Factory Space" }
  ];

  // Initialize counts
  useEffect(() => {
    setCounts(milestones.map(() => 0));
  }, []);

  const startAnimation = () => {
    if (hasAnimated) return;
    
    setHasAnimated(true);
    const duration = 2000; // 2 seconds
    const frameRate = 60; // 60 fps
    const totalFrames = (duration / 1000) * frameRate;
    
    milestones.forEach((milestone, index) => {
      const increment = milestone.number / totalFrames;
      let frame = 0;
      
      const animate = () => {
        if (frame >= totalFrames) {
          setCounts(prev => {
            const newCounts = [...prev];
            newCounts[index] = milestone.number;
            return newCounts;
          });
          return;
        }
        
        frame++;
        setCounts(prev => {
          const newCounts = [...prev];
          newCounts[index] = Math.min(
            Math.floor(frame * increment),
            milestone.number
          );
          return newCounts;
        });
        
        requestAnimationFrame(animate);
      };
      
      requestAnimationFrame(animate);
    });
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated) {
          startAnimation();
        }
      });
    }, options);

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <Container ref={containerRef}>
      <Title>Milestones We Have Proudly Accomplished</Title>
      <Wrapper>
        {milestones.map((milestone, index) => (
          <MilestoneItem key={milestone.id}>
            <Number>
              {counts[index]}{milestone.suffix || ''}
            </Number>
            <Label>{milestone.label}</Label>
          </MilestoneItem>
        ))}
      </Wrapper>
    </Container>
  );
};

export default Milestones;

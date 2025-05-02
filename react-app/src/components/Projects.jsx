import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
  padding: 80px 0;
  background-color: #f9f9f9;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 50px;
  font-size: 36px;
  color: #333;
  font-family: 'Playfair Display', serif;
  font-weight: 400;
  letter-spacing: 1px;
  opacity: ${props => props.isVisible ? 1 : 0};
  transform: ${props => props.isVisible ? 'translateY(0)' : 'translateY(20px)'};
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
`;

const GalleryWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  
  ${mobile({ gridTemplateColumns: "1fr" })}
`;

const ProjectCard = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  opacity: ${props => props.isVisible ? 1 : 0};
  transform: ${props => {
    if (!props.isVisible) {
      return props.index % 2 === 0 ? 'translateX(-50px)' : 'translateX(50px)';
    }
    return 'translateX(0)';
  }};
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  transition-delay: ${props => `${props.index * 0.1}s`};
  
  &:hover {
    transform: translateY(-10px);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1),
              0 6px 6px rgba(0, 0, 0, 0.05),
              0 0 0 1px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.02);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15),
                0 10px 10px rgba(0, 0, 0, 0.1),
                0 0 0 1px rgba(0, 0, 0, 0.1);
  }
`;

const ProjectInfo = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  padding: 20px;
  color: white;
`;

const ProjectTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 5px;
  font-family: 'Playfair Display', serif;
  font-weight: 400;
  letter-spacing: 0.5px;
`;

const ProjectClient = styled.p`
  font-size: 14px;
  margin-bottom: 5px;
  font-family: 'Raleway', sans-serif;
  font-weight: 300;
  letter-spacing: 0.3px;
`;

const ProjectLocation = styled.p`
  font-size: 14px;
  opacity: 0.8;
  font-family: 'Raleway', sans-serif;
  font-weight: 300;
  letter-spacing: 0.3px;
`;

const ProjectsGallery = () => {
  const [visibleItems, setVisibleItems] = useState({});
  const titleRef = useRef(null);
  const projectRefs = useRef([]);

  const projects = [
    {
      id: 1,
      title: "Alma Ridge in Karen",
      client: "Cytonn Investments",
      location: "Karen, Nairobi",
      image: "/images/wardrobe5.jpg"
    },
    {
      id: 2,
      title: "Tamarind Double Tree Hotel",
      client: "Tamarind Hotels",
      location: "Nairobi",
      image: "/images/interior4.webp"
    },
    {
      id: 3,
      title: "Galleria Gardens",
      client: "Galleria Gardens",
      location: "Karen, Nairobi",
      image: "/images/floors5.avif"
    }
  ];

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

    // Create observers for each project card
    const projectObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.dataset.id;
          setVisibleItems(prev => ({ ...prev, [id]: true }));
          projectObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    });

    projectRefs.current.forEach(ref => {
      if (ref) {
        projectObserver.observe(ref);
      }
    });

    return () => {
      if (titleRef.current) {
        titleObserver.unobserve(titleRef.current);
      }
      projectRefs.current.forEach(ref => {
        if (ref) {
          projectObserver.unobserve(ref);
        }
      });
    };
  }, []);

  return (
    <Container>
      <Title ref={titleRef} isVisible={visibleItems.title}>Our Completed Projects</Title>
      <GalleryWrapper>
        <ProjectGrid>
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              ref={el => projectRefs.current[index] = el}
              data-id={`project-${project.id}`}
              isVisible={visibleItems[`project-${project.id}`]}
              index={index}
            >
              <ProjectImage src={project.image} alt={project.title} />
              <ProjectInfo>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectClient>Client: {project.client}</ProjectClient>
                <ProjectLocation>Location: {project.location}</ProjectLocation>
              </ProjectInfo>
            </ProjectCard>
          ))}
        </ProjectGrid>
      </GalleryWrapper>
    </Container>
  );
};

export default ProjectsGallery;

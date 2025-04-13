import React, { useState } from 'react';
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
  
  &:hover {
    transform: translateY(-10px);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
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
`;

const ProjectClient = styled.p`
  font-size: 14px;
  margin-bottom: 5px;
`;

const ProjectLocation = styled.p`
  font-size: 14px;
  opacity: 0.8;
`;

const ProjectsGallery = () => {
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
  
  return (
    <Container>
      <Title>Our Completed Projects</Title>
      <GalleryWrapper>
        <ProjectGrid>
          {projects.map(project => (
            <ProjectCard key={project.id}>
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

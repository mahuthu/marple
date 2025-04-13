import React, { useState } from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
  padding: 80px 0;
  background-color: #f5f5f5;
  overflow: hidden;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 50px;
  font-size: 36px;
  color: #333;
`;

const TestimonialWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  overflow: hidden;
`;

const TestimonialSlider = styled.div`
  display: flex;
  transition: transform 0.5s ease;
  transform: translateX(${props => props.slideIndex * -100}%);
  width: 100%;
`;

const TestimonialCard = styled.div`
  min-width: 100%;
  width: 100%;
  padding: 30px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  margin: 0;
  flex-shrink: 0;
  box-sizing: border-box;
`;

const Quote = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: #555;
  margin-bottom: 20px;
  font-style: italic;
  
  ${mobile({
    fontSize: "16px",
  })}
`;

const Author = styled.div`
  display: flex;
  align-items: center;
`;

const AuthorImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: 15px;
  object-fit: cover;
`;

const AuthorInfo = styled.div``;

const AuthorName = styled.h4`
  font-size: 18px;
  margin-bottom: 5px;
  color: #333;
`;

const AuthorTitle = styled.p`
  font-size: 14px;
  color: #777;
`;

const Dots = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

const Dot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${props => props.active ? '#8e262f' : '#ccc'};
  margin: 0 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

const Testimonials = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      quote: "Very superior products, an excellent range of products from doors to prefabricated homes. Would definitely recommend this company for people who want all sorts of wood products, kitchens or wardrobes. Keep up the excellent work will be back soon to by more products from you.",
      name: "Andy Muchiri",
      title: "Buyer",
      image: "/images/testimonial1.jpg"
    },
    {
      id: 2,
      quote: "This is a great place, special wood products, made in Kenya. I was impressed with the quality and wide range of products.",
      name: "Patrick Balla",
      title: "Buyer",
      image: "/images/testimonial2.jpg"
    },
    {
      id: 3,
      quote: "Amazing work they do.. Flooring, cabinets and wardrobe and any wooden fittings you can imagine, Bravo👏",
      name: "Lynn Makenzi",
      title: "Buyer",
      image: "/images/testimonial3.jpg"
    }
  ];
  
  const handleDotClick = (index) => {
    setSlideIndex(index);
  };
  
  return (
    <Container>
      <Title>What Our Clients Say</Title>
      <TestimonialWrapper>
        <TestimonialSlider slideIndex={slideIndex}>
          {testimonials.map(testimonial => (
            <TestimonialCard key={testimonial.id}>
              <Quote>"{testimonial.quote}"</Quote>
              <Author>
                <AuthorImage src={testimonial.image} alt={testimonial.name} />
                <AuthorInfo>
                  <AuthorName>{testimonial.name}</AuthorName>
                  <AuthorTitle>{testimonial.title}</AuthorTitle>
                </AuthorInfo>
              </Author>
            </TestimonialCard>
          ))}
        </TestimonialSlider>
        <Dots>
          {testimonials.map((_, index) => (
            <Dot 
              key={index} 
              active={index === slideIndex} 
              onClick={() => handleDotClick(index)}
            />
          ))}
        </Dots>
      </TestimonialWrapper>
    </Container>
  );
};

export default Testimonials;

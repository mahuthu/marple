import { styled } from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const Container = styled.div`
  flex: 0 0 calc(33.33% - 20px);
  margin: 10px;
  height: 60vh;
  position: relative;
  background-color: #f5fbfd;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  opacity: ${props => props.isVisible ? 1 : 0};
  transform: ${props => props.isVisible ? 'translateY(0)' : 'translateY(40px)'};
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  
  &:hover {
    transform: ${props => props.isVisible ? 'translateY(-10px)' : 'translateY(40px)'};
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
  
  ${mobile({
    flex: "0 0 100%",
    height: "50vh",
    margin: "10px 0"
  })}
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 10px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  
  ${Container}:hover & {
    transform: scale(1.05);
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.7));
  padding: 20px;
  box-sizing: border-box;
  color: white;
`;

const Title = styled.h1`
  margin-bottom: 10px;
  font-size: 24px;
  font-weight: 600;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
  text-align: center;
  font-family: 'Playfair Display', serif;
  font-weight: 400;
  letter-spacing: 1px;
  
  ${mobile({
    fontSize: "1.2rem",
    marginBottom: "8px"
  })}
`;

const Description = styled.p`
  margin-bottom: 15px;
  font-size: 14px;
  line-height: 1.4;
  max-width: 85%;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  text-align: center;
  font-family: 'Raleway', sans-serif;
  font-weight: 300;
  letter-spacing: 0.3px;
  
  ${mobile({
    fontSize: "0.9rem",
    lineHeight: "1.4",
    maxWidth: "90%",
    marginBottom: "12px"
  })}
`;

const Button = styled.button`
  border: 1.5px solid white;
  padding: 8px 16px;
  background-color: transparent;
  color: white;
  cursor: pointer;
  font-weight: 500;
  border-radius: 4px;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
  letter-spacing: 0.5px;
  
  &:hover {
    background-color: white;
    color: #8e262f;
    transform: scale(1.05);
  }
  
  &:active {
    transform: scale(0.95);
  }

  ${mobile({
    padding: "8px 16px",
    fontSize: "0.8rem",
    fontWeight: "500"
  })}
`;

const CategoryItem = ({ item }) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <Container ref={containerRef} isVisible={isVisible}>
      <Link to={`/products/${item.cat}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <ImageWrapper>
          <Image src={item.img} alt={item.title} />
          <ImageOverlay>
            <Title>{item.title}</Title>
            <Description>{item.desc}</Description>
            <Button>SHOP NOW</Button>
          </ImageOverlay>
        </ImageWrapper>
      </Link>
    </Container>
  );
};

export default CategoryItem;

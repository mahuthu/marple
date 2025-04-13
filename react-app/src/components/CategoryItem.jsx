import { styled } from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

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
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
  
  ${mobile({
    flex: "0 0 calc(50% - 20px)",
    height: "40vh",
    margin: "10px",
  })}
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

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  padding: 20px;
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.4);
  transition: background-color 0.3s ease;
  
  ${Container}:hover & {
    background-color: rgba(0, 0, 0, 0.6);
  }
`;

const Title = styled.h1`
  margin-bottom: 10px;
  font-size: 24px;
  font-weight: 600;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
  
  ${mobile({
    fontSize: "1.2rem",
  })}
`;

const Description = styled.p`
  margin-bottom: 20px;
  font-size: 14px;
  line-height: 1.4;
  max-width: 80%;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  
  ${mobile({
    fontSize: "0.8rem",
    maxWidth: "90%",
  })}
`;

const Button = styled.button`
  border: 2px solid white;
  padding: 10px 20px;
  background-color: transparent;
  color: white;
  cursor: pointer;
  font-weight: 600;
  border-radius: 5px;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  
  &:hover {
    background-color: white;
    color: #8e262f;
    transform: scale(1.05);
  }
  
  &:active {
    transform: scale(0.95);
  }

  ${mobile({
    padding: "5px 10px",
    fontSize: "0.8rem",
  })}
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <Image src={item.img} alt={item.title} />
        <Info>
          <Title>{item.title}</Title>
          <Description>{item.desc}</Description>
          <Button>SHOP NOW</Button>
        </Info>
      </Link>
    </Container>
  );
};

export default CategoryItem;

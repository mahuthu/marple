import styled from "styled-components";
import { categories } from "../data";
import CategoryItem from "./CategoryItem";
import { mobile } from "../responsive";

const Container = styled.div`
    display: flex;
    padding: 50px 0;
    justify-content: space-between;
    background-color: #f9f9f9;
    flex-wrap: wrap;
    ${mobile({ 
        padding: "20px 10px",
        flexDirection: "row",
        justifyContent: "center"
    })}
`;

const Title = styled.h2`
    text-align: center;
    margin-bottom: 40px;
    font-size: 36px;
    color: #333;
    width: 100%;
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

const Categories = () => {
    return (
      <Container>
        <Title>Our Products</Title>
        {categories.map((item) => (
          <CategoryItem item={item} key={item.id} />
        ))}
      </Container>
    );
};

export default Categories;
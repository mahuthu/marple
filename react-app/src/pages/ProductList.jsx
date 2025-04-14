import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import { useLocation } from "react-router";
import { useState } from "react";
// import Subscription from "../components/Subscription";
import { categories } from "../data";
import CallToAction from "../components/CallToAction";

const Container = styled.div``;

const HeroSection = styled.div`
  height: 300px;
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 50px;
  margin-bottom: 40px;
  background: linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.3));
  ${mobile({ padding: "0 20px", height: "200px" })}
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
`;

const Title = styled.h1`
  color: white;
  font-size: 3rem;
  text-transform: uppercase;
  position: relative;
  padding-bottom: 20px;
  max-width: 600px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100px;
    height: 3px;
    background-color: #8e262f;
  }

  ${mobile({ fontSize: "2rem" })}
`;

const CategoryInfo = styled.div`
  padding: 40px;
  background-color: #f9f9f9;
  margin: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #666;
  margin-bottom: 30px;
  text-align: justify;
`;

const Subcategories = styled.div`
  margin-top: 30px;
`;

const SubcategoryTitle = styled.h3`
  font-size: 1.3rem;
  color: #333;
  margin-bottom: 15px;
  text-transform: uppercase;
`;

const SubcategoryList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 15px;
  list-style: none;
  padding: 0;
`;

const SubcategoryItem = styled.li`
  background-color: white;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }

  &::before {
    content: '✓';
    color: #8e262f;
    margin-right: 10px;
  }
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px;
  ${mobile({ flexDirection: "column" })}
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;

const Option = styled.option``;

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const currentCategory = categories.find(category => category.cat.toLowerCase() === cat.toLowerCase());

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  return (
    <Container>
      <Navbar />
      <Announcement />
      <HeroSection>
        <BackgroundImage image={currentCategory?.img} />
        <Title>{currentCategory?.title || cat}</Title>
      </HeroSection>
      
      {currentCategory && (
        <CategoryInfo>
          <Description>{currentCategory.detailedDesc}</Description>
          <Subcategories>
            <SubcategoryTitle>Our {currentCategory.title} Range Includes:</SubcategoryTitle>
            <SubcategoryList>
              {currentCategory.subcategories.map((subcategory, index) => (
                <SubcategoryItem key={index}>{subcategory}</SubcategoryItem>
              ))}
            </SubcategoryList>
          </Subcategories>
        </CategoryInfo>
      )}

      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option disabled>Color</Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
            <Option>Brown</Option>
            <Option>Maroon</Option>
          </Select>
          <Select name="size" onChange={handleFilters}>
            <Option disabled>Size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort} />
      <CallToAction />
      {/* <Subscription /> */}
      <Footer />
    </Container>
  );
};

export default ProductList;
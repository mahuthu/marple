import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
// import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
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
  opacity: ${props => props.isVisible ? 1 : 0};
  transform: ${props => props.isVisible ? 'translateX(0)' : 'translateX(-50px)'};
  transition: opacity 0.8s ease, transform 0.8s ease;

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
  opacity: ${props => props.isVisible ? 1 : 0};
  transform: ${props => props.isVisible ? 'translateY(0)' : 'translateY(30px)'};
  transition: opacity 0.7s ease-out, transform 0.7s ease-out;
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
  transition: transform 0.3s, opacity 0.3s;
  opacity: ${props => props.isVisible ? 1 : 0};
  transform: ${props => props.isVisible ? 'translateY(0)' : 'translateY(20px)'};
  transition-delay: ${props => `${0.1 + props.index * 0.05}s`};

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
  opacity: ${props => props.isVisible ? 1 : 0};
  transform: ${props => props.isVisible ? 'translateY(0)' : 'translateY(30px)'};
  transition: opacity 0.7s ease-out, transform 0.7s ease-out;
  
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
  const [visibleElements, setVisibleElements] = useState({});
  
  const titleRef = useRef(null);
  const categoryInfoRef = useRef(null);
  const filterContainerRef = useRef(null);
  const subcategoryItemRefs = useRef([]);

  const currentCategory = categories.find(category => category.cat.toLowerCase() === cat.toLowerCase());

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.dataset.id;
          setVisibleElements(prev => ({ ...prev, [id]: true }));
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe title
    if (titleRef.current) {
      titleRef.current.dataset.id = 'title';
      observer.observe(titleRef.current);
    }

    // Observe category info
    if (categoryInfoRef.current) {
      categoryInfoRef.current.dataset.id = 'categoryInfo';
      observer.observe(categoryInfoRef.current);
    }

    // Observe filter container
    if (filterContainerRef.current) {
      filterContainerRef.current.dataset.id = 'filterContainer';
      observer.observe(filterContainerRef.current);
    }

    // Observe subcategory items
    subcategoryItemRefs.current.forEach((ref, index) => {
      if (ref) {
        ref.dataset.id = `subcategoryItem-${index}`;
        observer.observe(ref);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [currentCategory]); // Re-run when category changes

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  return (
    <Container>
      <Announcement/>
      <Navbar />
      <HeroSection>
        <BackgroundImage image={currentCategory?.img} />
        <Title ref={titleRef} isVisible={visibleElements.title}>
          {currentCategory?.title || cat}
        </Title>
      </HeroSection>
      
      {currentCategory && (
        <CategoryInfo ref={categoryInfoRef} isVisible={visibleElements.categoryInfo}>
          <Description>{currentCategory.detailedDesc}</Description>
          <Subcategories>
            <SubcategoryTitle>Our {currentCategory.title} Range Includes:</SubcategoryTitle>
            <SubcategoryList>
              {currentCategory.subcategories.map((subcategory, index) => (
                <SubcategoryItem 
                  key={index}
                  ref={el => subcategoryItemRefs.current[index] = el}
                  isVisible={visibleElements[`subcategoryItem-${index}`]}
                  index={index}
                >
                  {subcategory}
                </SubcategoryItem>
              ))}
            </SubcategoryList>
          </Subcategories>
        </CategoryInfo>
      )}

      <FilterContainer ref={filterContainerRef} isVisible={visibleElements.filterContainer}>
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
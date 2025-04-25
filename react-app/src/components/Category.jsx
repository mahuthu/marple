import styled from "styled-components";
import { categories } from "../data";
import CategoryItem from "./CategoryItem";
import { mobile } from "../responsive";
import { useState, useEffect, useRef } from "react";

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
    opacity: ${props => props.isVisible ? 1 : 0};
    transform: ${props => props.isVisible ? 'translateY(0)' : 'translateY(20px)'};
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
    
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
    const [titleVisible, setTitleVisible] = useState(false);
    const titleRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const [entry] = entries;
            if (entry.isIntersecting) {
                setTitleVisible(true);
                observer.unobserve(entry.target);
            }
        }, {
            threshold: 0.2,
            rootMargin: '0px 0px -50px 0px'
        });

        if (titleRef.current) {
            observer.observe(titleRef.current);
        }

        return () => {
            if (titleRef.current) {
                observer.unobserve(titleRef.current);
            }
        };
    }, []);

    return (
      <Container>
        <Title ref={titleRef} isVisible={titleVisible}>Our Products</Title>
        {categories.map((item) => (
          <CategoryItem item={item} key={item.id} />
        ))}
      </Container>
    );
};

export default Categories;
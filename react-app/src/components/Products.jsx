import styled from 'styled-components';
import React from 'react'
import Product from './Product';
import axios from 'axios';
import { useEffect, useState } from 'react';




const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    `;

    const Products = ({ cat, filters, sort }) => {
      console.log(cat, filters, sort);
      const [products, setProducts] = useState([]);
      const [filteredProducts, setFilteredProducts] = useState([]);
    
      useEffect(() => {
        const getProducts = async () => {
          try {
            const res = await axios.get(
              cat
                ? `https://marplewoodproducts.co.ke/api/products?category=${cat}`
                : "https://marplewoodproducts.co.ke/api/products"
            );
            console.log("Products:", res.data);
            setProducts(res.data);
          } catch (err) {
            console.log("Error fetching products:", err);
            // Set empty array on error to prevent undefined errors
            setProducts([]);
          }
        };
        getProducts();
      }, [cat]);
    
      useEffect(() => {
        cat &&
          setFilteredProducts(
            products.filter((item) =>
              Object.entries(filters).every(([key, value]) =>
                item[key].includes(value)
              )
            )
          );
      }, [products, cat, filters]);
    
      useEffect(() => {
        if (sort === "newest") {
          setFilteredProducts((prev) =>
            [...prev].sort((a, b) => a.createdAt - b.createdAt)
          );
        } else if (sort === "asc") {
          setFilteredProducts((prev) =>
            [...prev].sort((a, b) => a.price - b.price)
          );
        } else {
          setFilteredProducts((prev) =>
            [...prev].sort((a, b) => b.price - a.price)
          );
        }
      }, [sort]);
    
      return (
        <Container>
          {cat
            ? filteredProducts.map((item) => <Product item={item} key={item._id} />)
            : products
                .slice(0, 20)
                .map((item) => <Product item={item} key={item._id} />)}
        </Container>
      );
    };
    
    export default Products;
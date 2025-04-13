import React, { useState } from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
  padding: 60px 0;
  background-color: #f5f5f5;
`;

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 28px;
  margin-bottom: 20px;
  text-align: center;
  color: #333;
`;

const Description = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 30px;
  text-align: center;
  max-width: 600px;
`;

const Form = styled.form`
  display: flex;
  width: 100%;
  max-width: 500px;
  
  ${mobile({ flexDirection: "column" })}
`;

const Input = styled.input`
  flex: 1;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 4px 0 0 4px;
  font-size: 16px;
  
  ${mobile({ borderRadius: "4px", marginBottom: "10px" })}
`;

const Button = styled.button`
  padding: 15px 30px;
  background-color: #8e262f;
  color: white;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #d13a54;
  }
  
  ${mobile({ borderRadius: "4px", width: "100%" })}
`;

const Newsletter = () => {
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribing email:', email);
    setEmail('');
  };
  
  return (
    <Container>
      <Wrapper>
        <Title>Sign up for our newsletter and promotions</Title>
        <Description>
          Stay updated with our latest products, offers, and woodworking tips.
        </Description>
        <Form onSubmit={handleSubmit}>
          <Input 
            type="email" 
            placeholder="Your email address" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button type="submit">Subscribe</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Newsletter;

import React, { useState } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useDispatch } from "react-redux";
import { register } from "../redux/apiCalls";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f9f9f9;
  ${mobile({ flexDirection: "column" })}
`;

const FormContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  order: 1;
  ${mobile({ 
    order: 2, 
    width: "100%", 
    padding: "10px" 
  })}
`;

const ImageContainer = styled.div`
  flex: 1;
  height: 100%;
  background: linear-gradient(
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0.1)
    ),
    url("/images/marple1.jpg");
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  order: 2;
  ${mobile({ 
    order: 1, 
    height: "200px", 
    width: "100%",
    backgroundPosition: "center"
  })}
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 500px;
  padding: 30px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  ${mobile({ 
    padding: "20px",
    maxWidth: "100%",
    boxShadow: "none",
    borderRadius: "0"
  })}
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 30px;
  color: #8e262f;
  ${mobile({ 
    fontSize: "24px", 
    marginBottom: "20px" 
  })}
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  ${mobile({ gap: "15px" })}
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  ${mobile({ gap: "15px" })}
`;

const Input = styled.input`
  flex: 1;
  min-width: 200px;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 14px;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #8e262f;
  }

  ${mobile({ 
    minWidth: "100%",
    padding: "10px",
    fontSize: "16px" 
  })}
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 10px 0;
  text-align: center;
  color: #666;
  ${mobile({ 
    fontSize: "12px",
    margin: "8px 0" 
  })}
`;

const Button = styled.button`
  width: 100%;
  border: none;
  padding: 15px;
  background-color: #8e262f;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background-color: #6d1d24;
    transform: translateY(-2px);
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  ${mobile({ 
    padding: "12px",
    fontSize: "16px" 
  })}
`;

const Register = () => {
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: ""
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputs.password !== inputs.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    register(dispatch, {
      username: inputs.username,
      email: inputs.email,
      password: inputs.password,
      phoneNumber: inputs.phoneNumber,
      firstName: inputs.firstName,
      lastName: inputs.lastName
    });
  };

  return (
    <Container>
      <FormContainer>
        <Wrapper>
          <Title>CREATE AN ACCOUNT</Title>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Input 
                name="firstName" 
                placeholder="First Name" 
                onChange={handleChange} 
              />
              <Input 
                name="lastName" 
                placeholder="Last Name" 
                onChange={handleChange} 
              />
            </Row>
            <Row>
              <Input 
                name="username" 
                placeholder="Username" 
                onChange={handleChange} 
              />
              <Input 
                name="email" 
                placeholder="Email" 
                onChange={handleChange} 
              />
            </Row>
            <Row>
              <Input 
                name="phoneNumber" 
                placeholder="Phone Number" 
                onChange={handleChange} 
              />
              <Input 
                name="password" 
                type="password" 
                placeholder="Password" 
                onChange={handleChange} 
              />
            </Row>
            <Input 
              name="confirmPassword" 
              type="password" 
              placeholder="Confirm Password" 
              onChange={handleChange} 
            />
            <Agreement>
              By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
            </Agreement>
            <Button type="submit">CREATE</Button>
          </Form>
        </Wrapper>
      </FormContainer>
      <ImageContainer />
    </Container>
  );
};

export default Register;

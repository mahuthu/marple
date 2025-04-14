import styled from "styled-components";
import { mobile } from "../responsive";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/apiCalls";
import { Link as RouterLink } from "react-router-dom";

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
  ${mobile({ order: 2, width: "100%", padding: "10px" })}
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
  max-width: 400px;
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
  color: #8e262f;
  margin-bottom: 30px;
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

const Input = styled.input`
  width: 100%;
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
    padding: "10px",
    fontSize: "16px" 
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

const StyledLink = styled(RouterLink)`
  margin: 5px 0;
  font-size: 14px;
  text-decoration: underline;
  color: #8e262f;
  text-align: center;
  display: block;
  transition: all 0.3s ease;

  &:hover {
    color: #6d1d24;
  }

  ${mobile({ 
    fontSize: "14px",
    margin: "8px 0" 
  })}
`;

const Error = styled.span`
  color: #8e262f;
  text-align: center;
  display: block;
  margin-top: 10px;
  ${mobile({ fontSize: "14px" })}
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector(state => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <Container>
      <FormContainer>
        <Wrapper>
          <Title>SIGN IN</Title>
          <Form>
            <Input 
              placeholder="Username" 
              onChange={(e) => setUsername(e.target.value)} 
            />
            <Input 
              placeholder="Password" 
              type="password" 
              onChange={(e) => setPassword(e.target.value)} 
            />
            <Button onClick={handleClick} disabled={isFetching}>
              LOGIN
            </Button>
            {error && <Error>{error}</Error>}
            <StyledLink to="#">DO YOU REMEMBER THE PASSWORD?</StyledLink>
            <StyledLink to="/register">CREATE A NEW ACCOUNT</StyledLink>
          </Form>
        </Wrapper>
      </FormContainer>
      <ImageContainer />
    </Container>
  );
};

export default Login;

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
// import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import Announcement from '../components/Announcement';
import { Add, Remove } from '@material-ui/icons';
import { mobile } from '../responsive';
import { useLocation, useNavigate } from 'react-router-dom';
import { publicRequest } from "../requestmethods";
import { addProduct } from "../redux/cartRedux";
import { useDispatch, useSelector } from "react-redux";
import Subscription from '../components/Subscription';

const Container = styled.div`
    background-color: #f9f9f9;
    min-height: 100vh;
`;

const Wrapper = styled.div` 
    padding: 50px;
    display: flex;
    ${mobile({ padding: "20px", flexDirection: "column" })}
`;

const ImgContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    padding: 20px;
    ${mobile({ marginBottom: "20px" })}
`;

const Image = styled.img`
    width: 100%;
    height: 70vh;
    object-fit: contain;
    border-radius: 5px;
    ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
    ${mobile({ padding: "20px" })}
`;

const Title = styled.h1`
    font-weight: 600;
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 20px;
    position: relative;
    padding-bottom: 15px;

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100px;
        height: 3px;
        background-color: #8e262f;
    }

    ${mobile({ fontSize: "1.8rem" })}
`;

const Desc = styled.p`
    margin: 30px 0px;
    font-size: 1.1rem;
    line-height: 1.6;
    color: #666;
    ${mobile({ fontSize: "1rem" })}
`;

const Price = styled.span`
    font-weight: 600;
    font-size: 2rem;
    color: #8e262f;
    ${mobile({ fontSize: "1.5rem" })}
`;

const FilterContainer = styled.div`
    width: 100%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px;
    background: white;
    padding: 25px;
    border-radius: 10px;
    box-shadow: 0 2px 15px rgba(0,0,0,0.05);
`;

const Filter = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    background: #f9f9f9;
    padding: 15px 20px;
    border-radius: 8px;
    border: 1px solid #eee;
    transition: all 0.3s ease;

    &:hover {
        border-color: #8e262f;
        box-shadow: 0 2px 8px rgba(142, 38, 47, 0.1);
    }
`;

const FilterTitle = styled.span`
    font-size: 1.1rem;
    font-weight: 500;
    margin-right: 15px;
    color: #333;
    min-width: 80px;
`;

const FilterColor = styled.div`
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background-color: ${props => props.color};
    margin: 0px 8px;
    cursor: pointer;
    border: 2px solid #ddd;
    transition: all 0.3s ease;
    position: relative;

    &:hover {
        transform: scale(1.1);
        border-color: #8e262f;
    }

    &::after {
        content: '';
        position: absolute;
        top: -4px;
        left: -4px;
        right: -4px;
        bottom: -4px;
        border: 2px solid #8e262f;
        border-radius: 50%;
        opacity: 0;
        transition: all 0.3s ease;
    }

    &:hover::after {
        opacity: 1;
    }
`;

const FilterSize = styled.select`
    padding: 10px 20px;
    border: 1px solid #ddd;
    border-radius: 5px;
    background-color: white;
    color: #333;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    min-width: 120px;
    appearance: none;
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%238e262f'%3e%3cpath d='M7 10l5 5 5-5z'/%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right 10px center;
    background-size: 20px;

    &:focus {
        outline: none;
        border-color: #8e262f;
        box-shadow: 0 0 0 2px rgba(142, 38, 47, 0.1);
    }

    &:hover {
        border-color: #8e262f;
    }

    option {
        padding: 10px;
        background-color: white;
        color: #333;
        cursor: pointer;
    }

    option:checked {
        background-color: #8e262f !important;
        color: white;
    }

    option:hover {
        background-color: #8e262f !important;
        color: white;
    }

    option:checked:hover {
        background-color: #6e1e25 !important;
        color: white;
    }

    &::-ms-expand {
        display: none;
    }

    &::-webkit-scrollbar {
        width: 8px;
    }

    &::-webkit-scrollbar-track {
        background: #f1f1f1;
        border-radius: 4px;
    }

    &::-webkit-scrollbar-thumb {
        background: #8e262f;
        border-radius: 4px;
    }

    &::-webkit-scrollbar-thumb:hover {
        background: #6e1e25;
    }
`;

const FilterSizeOption = styled.option`
    padding: 10px;
    background-color: white;
    color: #333;
    cursor: pointer;

    &:checked {
        background-color: #8e262f !important;
        color: white;
    }

    &:hover {
        background-color: #8e262f !important;
        color: white;
    }
`;

const AddContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 30px;
    background: white;
    padding: 25px;
    border-radius: 10px;
    box-shadow: 0 2px 15px rgba(0,0,0,0.05);
`;

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
    margin-bottom: 20px;
    background: #f9f9f9;
    padding: 10px 15px;
    border-radius: 8px;
    border: 1px solid #eee;
`;

const Amount = styled.span`
    width: 40px;
    height: 40px;
    border-radius: 8px;
    border: 2px solid #8e262f;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 10px;
    color: #8e262f;
    font-size: 1.2rem;
    background: white;
    transition: all 0.3s ease;

    &:hover {
        background: #8e262f;
        color: white;
    }
`;

const Button = styled.button`
    padding: 10px 24px;
    border: 2px solid #8e262f;
    background-color: #8e262f;
    color: white;
    cursor: pointer;
    font-weight: 500;
    font-size: 0.95rem;
    border-radius: 6px;
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 0.4px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 6px;

    &:hover {
        background-color: white;
        color: #8e262f;
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(142, 38, 47, 0.2);
    }

    &:disabled {
        background-color: #ccc;
        border-color: #ccc;
        cursor: not-allowed;
        transform: none;
        box-shadow: none;
        color: #666;
    }

    ${mobile({ 
        width: "100%", 
        marginTop: "15px",
        padding: "12px 20px",
        fontSize: "1rem" 
    })}
`;

const CountInStock = styled.p`
    margin-top: 10px;
    font-size: 1rem;
    color: ${props => props.inStock ? "#4CAF50" : "#f44336"};
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 8px;

    &::before {
        content: '';
        display: inline-block;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: ${props => props.inStock ? "#4CAF50" : "#f44336"};
    }
`;

const Product = () => {
    const location = useLocation();
    const navigate = useNavigate(); // Use useNavigate for redirection
    const id = location.pathname.split("/")[2];
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [color, setColor] = useState("");
    const [size, setSize] = useState("");
    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state) => state.user.isAuthenticated); // Check if user is authenticated

    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await publicRequest.get(`/products/find/${id}`);
                setProduct(res.data);
            } catch (err) {
                console.error(err);
            }
        };
        getProduct();
    }, [id]);

    const handleQuantity = (type) => {
        if (type === "dec") {
            quantity > 1 && setQuantity(quantity - 1);
        } else {
            setQuantity(quantity + 1);
        }
    };

    const handleClick = () => {
        console.log('Is Authenticated:', isAuthenticated);
        if (isAuthenticated) {
            console.log('Authenticated: Adding to cart and redirecting to /cart');
            dispatch(addProduct({ ...product, quantity, color, size }));
            navigate('/cart');
        } else {
            console.log('Not authenticated: Redirecting to /login');
            navigate('/login');
        }
    };

    return (
        <Container>
            <Announcement/>
            <Navbar />
            <Wrapper>
                <ImgContainer>
                    <Image src={product.imageUrl} alt={product.title} />
                </ImgContainer>
                <InfoContainer>
                    <Title>{product.title}</Title>
                    <Desc>{product.description}</Desc>
                    <Price>KSH{product.price}</Price>
                    <CountInStock inStock={product.countInStock > 0}>
                        {product.countInStock > 0 
                            ? `In Stock: ${product.countInStock}`
                            : "Out of Stock"}
                    </CountInStock>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            {Array.isArray(product.color) && product.color.map((c) => (
                                <FilterColor color={c} key={c} onClick={() => setColor(c)} />
                            ))}
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize onChange={(e) => setSize(e.target.value)}>
                                <FilterSizeOption>Select Size</FilterSizeOption>
                                {Array.isArray(product.size) && product.size.map((s) => (
                                    <FilterSizeOption key={s}>{s}</FilterSizeOption>
                                ))}
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove onClick={() => handleQuantity("dec")} />
                            <Amount>{quantity}</Amount>
                            <Add onClick={() => handleQuantity("inc")} />
                        </AmountContainer>
                        <Button onClick={handleClick} disabled={product.countInStock === 0}>
                            {product.countInStock === 0 ? "OUT OF STOCK" : "ADD TO CART"}
                        </Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Subscription />
            <Footer />
        </Container>
    );
};

export default Product;

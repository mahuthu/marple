import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
// import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
// import Announcement from '../components/Announcement';
import { Add, Remove } from '@material-ui/icons';
import { mobile } from '../responsive';
import { useLocation, useNavigate } from 'react-router-dom';
import { publicRequest } from "../requestmethods";
import { addProduct } from "../redux/cartRedux";
import { useDispatch, useSelector } from "react-redux";
import Subscription from '../components/CallToAction';

const Container = styled.div`
    background-color: #f9f9f9;
    min-height: 100vh;
`;

const Wrapper = styled.div` 
    padding: 30px;
    display: flex;
    max-width: 1200px;
    margin: 0 auto;
    gap: 30px;
    ${mobile({ 
        padding: "15px", 
        flexDirection: "column",
        gap: "20px"
    })}
`;

const ImgContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    padding: 15px;
    ${mobile({ marginBottom: "15px" })}
`;

const Image = styled.img`
    width: 100%;
    height: 60vh;
    object-fit: contain;
    border-radius: 4px;
    ${mobile({ height: "35vh" })}
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 0 20px;
    ${mobile({ padding: "0" })}
`;

const Title = styled.h1`
    font-weight: 600;
    font-size: 2rem;
    color: #333;
    margin-bottom: 15px;
    position: relative;
    padding-bottom: 10px;
    font-family: 'Playfair Display', serif;
    font-weight: 400;
    letter-spacing: 0.5px;

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 60px;
        height: 2px;
        background-color: #8e262f;
    }

    ${mobile({ fontSize: "1.6rem" })}
`;

const Desc = styled.p`
    margin: 20px 0;
    font-size: 1rem;
    line-height: 1.5;
    color: #666;
    font-family: 'Raleway', sans-serif;
    font-weight: 300;
    letter-spacing: 0.3px;
    ${mobile({ fontSize: "0.95rem" })}
`;

const Price = styled.span`
    font-weight: 600;
    font-size: 1.8rem;
    color: #8e262f;
    font-family: 'Playfair Display', serif;
    font-weight: 400;
    letter-spacing: 0.5px;
    ${mobile({ fontSize: "1.4rem" })}
`;

const FilterContainer = styled.div`
    width: 100%;
    margin: 20px 0;
    display: flex;
    flex-direction: column;
    gap: 15px;
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
`;

const Filter = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    background: #f9f9f9;
    padding: 12px 15px;
    border-radius: 6px;
    border: 1px solid #eee;
    transition: all 0.3s ease;

    &:hover {
        border-color: #8e262f;
        box-shadow: 0 2px 6px rgba(142, 38, 47, 0.1);
    }
`;

const FilterTitle = styled.span`
    font-size: 1rem;
    font-weight: 500;
    color: #333;
    min-width: 60px;
    font-family: 'Playfair Display', serif;
    font-weight: 400;
    letter-spacing: 0.5px;
`;

const FilterColor = styled.div`
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: ${props => props.color};
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
        top: -3px;
        left: -3px;
        right: -3px;
        bottom: -3px;
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
    padding: 8px 15px;
    border: 1px solid #ddd;
    border-radius: 4px;
    background-color: white;
    color: #333;
    font-size: 0.95rem;
    cursor: pointer;
    transition: all 0.3s ease;
    min-width: 100px;
    appearance: none;
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%238e262f'%3e%3cpath d='M7 10l5 5 5-5z'/%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right 8px center;
    background-size: 16px;

    &:focus {
        outline: none;
        border-color: #8e262f;
        box-shadow: 0 0 0 2px rgba(142, 38, 47, 0.1);
    }

    &:hover {
        border-color: #8e262f;
    }
`;

const AddContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    ${mobile({ flexDirection: "column", gap: "15px" })}
`;

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
    background: #f9f9f9;
    padding: 8px 12px;
    border-radius: 6px;
    border: 1px solid #eee;
`;

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 6px;
    border: 2px solid #8e262f;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 8px;
    color: #8e262f;
    font-size: 1rem;
    background: white;
    transition: all 0.3s ease;

    &:hover {
        background: #8e262f;
        color: white;
    }
`;

const Button = styled.button`
    padding: 8px 20px;
    border: 2px solid #8e262f;
    background-color: #8e262f;
    color: white;
    cursor: pointer;
    font-weight: 500;
    font-size: 0.9rem;
    border-radius: 4px;
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
        box-shadow: 0 4px 8px rgba(142, 38, 47, 0.2);
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
        width: "auto",
        minWidth: "120px",
        padding: "6px 15px"
    })}
`;

const WhatsAppButton = styled(Button)`
    background-color: #25D366;
    border-color: #25D366;
    margin-top: 10px;
    
    &:hover {
        background-color: white;
        color: #25D366;
    }
`;

const CountInStock = styled.p`
    margin-top: 8px;
    font-size: 0.9rem;
    color: ${props => props.inStock ? "#4CAF50" : "#f44336"};
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 6px;
    font-family: 'Raleway', sans-serif;
    font-weight: 300;
    letter-spacing: 0.3px;

    &::before {
        content: '';
        display: inline-block;
        width: 6px;
        height: 6px;
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

    const handleWhatsAppCheckout = () => {
        const message = `I would like to purchase:
Product: ${product.title}
Quantity: ${quantity}
Price: KSH${product.price * quantity}
Total: KSH${product.price * quantity}
Image: ${product.imageUrl}`;
        
        const whatsappUrl = `https://wa.me/254795683399?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <Container>
            {/* <Announcement/> */}
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
                        {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                    </CountInStock>
                    <FilterContainer>
                        {/* <Filter>
                            <FilterTitle>Color</FilterTitle>
                            {Array.isArray(product.color) && product.color.map((c) => (
                                <FilterColor color={c} key={c} onClick={() => setColor(c)} />
                            ))}
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize onChange={(e) => setSize(e.target.value)}>
                                <option value="">Select Size</option>
                                {Array.isArray(product.size) && product.size.map((s) => (
                                    <option key={s} value={s}>{s}</option>
                                ))}
                            </FilterSize>
                        </Filter> */}
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
                        <WhatsAppButton onClick={handleWhatsAppCheckout} disabled={product.countInStock === 0}>
                            Checkout via WhatsApp
                        </WhatsAppButton>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Subscription />
            <Footer />
        </Container>
    );
};

export default Product;

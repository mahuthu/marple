import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Search, ShoppingCartOutlined, Person, Menu, Close } from '@material-ui/icons';
import { Badge } from '@material-ui/core';
import { mobile } from '../responsive';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../redux/authActions';
import { Link, useNavigate } from 'react-router-dom';

const Container = styled.div`
  height: 100px;
  ${mobile({ height: 'auto' })}
`;

const Wrapper = styled.div`
  padding: 5px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: '15px 10px', flexWrap: 'wrap' })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 380px) {
    margin-right: 10px;
  }
`;

const MenuIconContainer = styled.div`
  margin-right: 20px;
  ${mobile({ marginRight: '15px' })}
`;

const LogoContainer = styled.div`
  margin-left: 10px;
  ${mobile({ marginLeft: '5px' })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  @media only screen and (max-width: 380px) {
    margin-left: 15px;
  }
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: '50px' })}
`;

const Center = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 380px) {
    margin-left: 10px;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  height: 90px;
  max-width: 100%;
  object-fit: contain;
  ${mobile({ height: '55px' })}
  @media only screen and (max-width: 380px) {
    height: 45px;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ justifyContent: 'center', marginTop: '10px' })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: '12px', marginLeft: '10px' })}
`;

const MenuIcon = styled(Menu)`
  display: none;
  ${mobile({ display: 'block', marginRight: '10px', cursor: 'pointer' })}
`;

const CloseIcon = styled(Close)`
  display: none;
  ${mobile({ display: 'block', marginRight: '10px', cursor: 'pointer' })}
`;

const MobileMenu = styled.div`
  display: none;
  ${mobile({
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    width: '100%',
    padding: '10px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  })}
`;

const DesktopMenu = styled.div`
  display: ${props => props.isOpen ? 'block' : 'none'};
  position: absolute;
  top: 100px;
  right: 30px;
  background-color: white;
  width: 200px;
  padding: 15px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  z-index: 100;
  ${mobile({ display: 'none' })}
`;

const MobileMenuItem = styled(MenuItem)`
  ${mobile({
    margin: '10px 0',
    fontSize: '16px',
  })}
`;

const DesktopMenuItem = styled(MenuItem)`
  ${mobile({ display: 'none' })}
`;

const MenuItemLink = styled.div`
  padding: 10px 0;
  cursor: pointer;
  &:hover {
    background-color: #f5f5f5;
  }
`;

const Navbar = () => {
  const quantity = useSelector(state => state.cart.quantity);
  const currentUser = useSelector(state => state.user.currentUser);
  const wishlist = useSelector(state => state.wishlist.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [desktopMenuOpen, setDesktopMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const desktopMenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (desktopMenuRef.current && !desktopMenuRef.current.contains(event.target)) {
        setDesktopMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate('/login');
    setDesktopMenuOpen(false);
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleDesktopMenu = () => {
    setDesktopMenuOpen(!desktopMenuOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?term=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <MenuIconContainer>
            {mobileMenuOpen ? (
              <CloseIcon onClick={toggleMobileMenu} />
            ) : (
              <MenuIcon onClick={toggleMobileMenu} />
            )}
          </MenuIconContainer>
          <LogoContainer>
            <Logo>
              <LogoImage src="/images/marple1.jpg" alt="KOFIA_KE Logo" />
            </Logo>
          </LogoContainer>
        </Left>
        <Center>
          <SearchContainer>
            <form onSubmit={handleSearch}>
              <Input 
                placeholder="search" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search 
                style={{ color: 'gray', fontSize: 16, cursor: 'pointer' }} 
                onClick={handleSearch}
              />
            </form>
          </SearchContainer>
        </Center>
        <Right>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <DesktopMenuItem>HOME</DesktopMenuItem>
          </Link>
          <Link to="/about" style={{ textDecoration: 'none', color: 'inherit' }}>
            <DesktopMenuItem>ABOUT</DesktopMenuItem>
          </Link>
          <Link to="/products" style={{ textDecoration: 'none', color: 'inherit' }}>
            <DesktopMenuItem>PRODUCTS</DesktopMenuItem>
          </Link>
          <Link to="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>
            <DesktopMenuItem>CONTACTS</DesktopMenuItem>
          </Link>
          <Link to="/cart" style={{ textDecoration: 'none', color: 'inherit' }}>
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
          <DesktopMenuItem onClick={toggleDesktopMenu}>
            <Person />
          </DesktopMenuItem>
        </Right>
      </Wrapper>
      <DesktopMenu ref={desktopMenuRef} isOpen={desktopMenuOpen}>
        {currentUser ? (
          <>
            <MenuItemLink onClick={handleLogout}>Sign Out</MenuItemLink>
            <Link to="/profile" style={{ textDecoration: 'none', color: 'inherit' }}>
              <MenuItemLink>Profile</MenuItemLink>
            </Link>
            {wishlist.length > 0 && (
              <Link to="/wishlist" style={{ textDecoration: 'none', color: 'inherit' }}>
                <MenuItemLink>Your Wishlist ({wishlist.length})</MenuItemLink>
              </Link>
            )}
          </>
        ) : (
          <>
            <Link to="/register" style={{ textDecoration: 'none', color: 'inherit' }}>
              <MenuItemLink>Register</MenuItemLink>
            </Link>
            <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>
              <MenuItemLink>Sign In</MenuItemLink>
            </Link>
          </>
        )}
      </DesktopMenu>
      {mobileMenuOpen && (
        <MobileMenu>
          <Link to="/about" style={{ textDecoration: 'none', color: 'inherit' }}>
            <MobileMenuItem>About Us</MobileMenuItem>
          </Link>
          <Link to="/products" style={{ textDecoration: 'none', color: 'inherit' }}>
            <MobileMenuItem>Products</MobileMenuItem>
          </Link>
          <Link to="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>
            <MobileMenuItem>Contacts</MobileMenuItem>
          </Link>
          {currentUser ? (
            <>
              <MobileMenuItem onClick={handleLogout}>Sign Out</MobileMenuItem>
              <Link to="/profile" style={{ textDecoration: 'none', color: 'inherit' }}>
                <MobileMenuItem>
                  <Person />
                </MobileMenuItem>
              </Link>
              {wishlist.length > 0 && (
                <Link to="/wishlist" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <MobileMenuItem>
                    Your Wishlist ({wishlist.length})
                  </MobileMenuItem>
                </Link>
              )}
            </>
          ) : (
            <>
              <Link to="/register" style={{ textDecoration: 'none', color: 'inherit' }}>
                <MobileMenuItem>Register</MobileMenuItem>
              </Link>
              <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>
                <MobileMenuItem>Sign In</MobileMenuItem>
              </Link>
            </>
          )}
        </MobileMenu>
      )}
    </Container>
  );
};

export default Navbar;
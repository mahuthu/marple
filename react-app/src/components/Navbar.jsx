import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Search, ShoppingCartOutlined, Person, Menu, Close, KeyboardArrowDown, KeyboardArrowUp } from '@material-ui/icons';
import { Badge } from '@material-ui/core';
import { mobile } from '../responsive';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../redux/authActions';
import { Link, useNavigate } from 'react-router-dom';
import { categories } from '../data';

const Container = styled.div`
  height: 100px;
  position: relative;
  ${mobile({ height: 'auto', minHeight: '80px' })}
`;

const Wrapper = styled.div`
  padding: 5px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  ${mobile({ 
    padding: '10px 15px',
    flexWrap: 'nowrap',
    minHeight: '80px'
  })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  ${mobile({
    justifyContent: 'flex-start',
    flex: '1'
  })}
`;

const LogoContainer = styled.div`
  margin-left: 10px;
  ${mobile({ 
    marginLeft: '0',
    display: 'flex',
    alignItems: 'center',
    height: '100%'
  })}
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  height: 90px;
  max-width: 100%;
  object-fit: contain;
  ${mobile({ height: '75px' })}
  @media only screen and (max-width: 380px) {
    height: 70px;
  }
`;

const Center = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  ${mobile({ 
    flex: '2',
    order: '2'
  })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  border-radius: 4px;
  width: 100%;
  max-width: 400px;
  ${mobile({ 
    margin: '0 10px',
    maxWidth: '100%'
  })}
  @media only screen and (max-width: 380px) {
    margin: 0 5px;
  }
`;

const Input = styled.input`
  border: none;
  outline: none;
  width: 100%;
  padding: 5px;
  font-size: 14px;
  ${mobile({ 
    width: '100%',
    fontSize: '13px',
    padding: '3px'
  })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ 
    flex: '1',
    order: '3',
    justifyContent: 'flex-end'
  })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: '12px', marginLeft: '10px' })}
`;

const DesktopMenuItem = styled(MenuItem)`
  ${mobile({ display: 'none' })}
`;

const MobileCartItem = styled(MenuItem)`
  display: none;
  ${mobile({ 
    display: 'flex',
    alignItems: 'center',
    marginLeft: '15px'
  })}
`;

const MobileMenuItem = styled.div`
  padding: 12px 15px;
  font-size: 16px;
  cursor: pointer;
  color: white;
  border-bottom: 1px solid #8e262f;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #2a2a2a;
  }
  
  &:last-child {
    border-bottom: none;
  }
`;

const MobileMenuToggle = styled.div`
  display: none;
  cursor: pointer;
  
  ${mobile({ 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '15px',
    padding: '5px'
  })}
`;

const MenuIcon = styled(Menu)`
  font-size: 28px;
  color: #333;
`;

const CloseIcon = styled(Close)`
  font-size: 28px;
  color: #333;
`;

const MobileMenuContainer = styled.div`
  display: ${props => props.isOpen ? 'block' : 'none'};
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: #1a1a1a;
  width: 100%;
  padding: 0;
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
  z-index: 1000;
`;

const DesktopMenu = styled.div`
  display: ${props => props.isOpen ? 'block' : 'none'};
  position: absolute;
  top: 70px;
  right: 30px;
  background-color: white;
  width: 200px;
  padding: 15px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  z-index: 100;
  border-radius: 5px;
  ${mobile({ display: 'none' })}
`;

const MenuItemLink = styled.div`
  padding: 10px 0;
  cursor: pointer;
  &:hover {
    background-color: #f5f5f5;
  }
`;

const ProductsDropdown = styled.div`
  position: relative;
  display: inline-block;
  ${mobile({ display: 'none' })}
`;

const DropdownContent = styled.div`
  display: ${props => props.isOpen ? 'block' : 'none'};
  position: absolute;
  background-color: white;
  min-width: 200px;
  box-shadow: 0 8px 16px rgba(0,0,0,0.1);
  z-index: 1000;
  border-radius: 5px;
  top: 100%;
  left: 0;
  padding: 10px 0;
`;

const DropdownItem = styled(Link)`
  display: block;
  padding: 12px 20px;
  text-decoration: none;
  color: #333;
  font-size: 14px;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #f5f5f5;
    color: #8e262f;
  }
`;

// Mobile category item with indentation
const MobileCategoryItem = styled(Link)`
  display: block;
  padding: 12px 15px 12px 30px;
  text-decoration: none;
  color: #e0e0e0;
  font-size: 15px;
  background-color: #252525;
  border-bottom: 1px solid #8e262f;
  
  &:hover {
    background-color: #353535;
    color: #ffffff;
  }
  
  &:last-child {
    border-bottom: none;
  }
`;

// Mobile products dropdown container
const MobileProductsDropdown = styled.div`
  display: ${props => props.isOpen ? 'block' : 'none'};
  width: 100%;
`;

const ContactButton = styled(Link)`
  text-decoration: none;
  color: white;
  background-color: #8e262f;
  padding: 8px 15px;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.3s ease;
  margin-left: 25px;
  
  &:hover {
    background-color: #6d1d24;
    transform: translateY(-2px);
  }

  ${mobile({ display: 'none' })}
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
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (desktopMenuRef.current && !desktopMenuRef.current.contains(event.target)) {
        setDesktopMenuOpen(false);
      }
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProductsOpen(false);
      }
      // Close mobile menu when clicking outside
      if (mobileMenuRef.current && 
          !mobileMenuRef.current.contains(event.target) &&
          !event.target.closest('[data-mobile-toggle]')) {
        setMobileMenuOpen(false);
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
      setSearchTerm(''); // Clear search after submission
    }
  };

  const toggleProductsDropdown = () => {
    setIsProductsOpen(!isProductsOpen);
  };

  const toggleMobileProductsDropdown = () => {
    setIsMobileProductsOpen(!isMobileProductsOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <Container>
      <Wrapper>
        {/* Left side - Logo */}
        <Left>
          <LogoContainer>
            <Link to="/" onClick={closeMobileMenu}>
              <Logo>
                <LogoImage src="/images/marple1.jpg" alt="KOFIA_KE Logo" />
              </Logo>
            </Link>
          </LogoContainer>
        </Left>

        {/* Center - Search bar */}
        <Center>
          <SearchContainer>
            <form onSubmit={handleSearch} style={{ display: 'flex', width: '100%' }}>
              <Input 
                placeholder="Search products..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search 
                style={{ color: 'gray', fontSize: 16, cursor: 'pointer', padding: '0 5px' }} 
                onClick={handleSearch}
              />
            </form>
          </SearchContainer>
        </Center>

        {/* Right side - Menu items (desktop) & hamburger (mobile) */}
        <Right>
          {/* Desktop-only menu items */}
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <DesktopMenuItem>HOME</DesktopMenuItem>
          </Link>
          <Link to="/about" style={{ textDecoration: 'none', color: 'inherit' }}>
            <DesktopMenuItem>ABOUT</DesktopMenuItem>
          </Link>
          <ProductsDropdown ref={dropdownRef}>
            <DesktopMenuItem onClick={toggleProductsDropdown}>
              PRODUCTS
            </DesktopMenuItem>
            <DropdownContent isOpen={isProductsOpen}>
              {categories.map((category) => (
                <DropdownItem 
                  key={category.id} 
                  to={`/products/${category.cat}`}
                  onClick={() => setIsProductsOpen(false)}
                >
                  {category.title}
                </DropdownItem>
              ))}
            </DropdownContent>
          </ProductsDropdown>
          <ContactButton to="/contact">CONTACT</ContactButton>
          <Link to="/cart" style={{ textDecoration: 'none', color: 'inherit' }}>
            <DesktopMenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </DesktopMenuItem>
          </Link>
          <DesktopMenuItem onClick={toggleDesktopMenu}>
            <Person />
          </DesktopMenuItem>

          {/* Mobile-only cart icon - displayed outside the mobile menu */}
          <Link to="/cart" style={{ textDecoration: 'none', color: 'inherit' }}>
            <MobileCartItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MobileCartItem>
          </Link>

          {/* Mobile menu toggle (hamburger/close) */}
          <MobileMenuToggle onClick={toggleMobileMenu} data-mobile-toggle>
            {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </MobileMenuToggle>
        </Right>
      </Wrapper>

      {/* Desktop user dropdown menu */}
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

      {/* Mobile menu dropdown */}
      <MobileMenuContainer isOpen={mobileMenuOpen} ref={mobileMenuRef}>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }} onClick={closeMobileMenu}>
          <MobileMenuItem>Home</MobileMenuItem>
        </Link>
        <Link to="/about" style={{ textDecoration: 'none', color: 'inherit' }} onClick={closeMobileMenu}>
          <MobileMenuItem>About Us</MobileMenuItem>
        </Link>
        
        {/* Mobile Products dropdown toggle */}
        <MobileMenuItem onClick={toggleMobileProductsDropdown}>
          <span>Products</span>
          {isMobileProductsOpen ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
        </MobileMenuItem>
        
        {/* Mobile Products dropdown content */}
        <MobileProductsDropdown isOpen={isMobileProductsOpen}>
          {categories.map((category) => (
            <MobileCategoryItem 
              key={category.id} 
              to={`/products/${category.cat}`}
              onClick={closeMobileMenu}
            >
              {category.title}
            </MobileCategoryItem>
          ))}
        </MobileProductsDropdown>
        
        <Link to="/contact" style={{ textDecoration: 'none', color: 'inherit' }} onClick={closeMobileMenu}>
          <MobileMenuItem>Contact</MobileMenuItem>
        </Link>
        {/* Removed cart from mobile menu since it's now in the header */}
        {currentUser ? (
          <>
            <Link to="/profile" style={{ textDecoration: 'none', color: 'inherit' }} onClick={closeMobileMenu}>
              <MobileMenuItem>Profile</MobileMenuItem>
            </Link>
            {wishlist.length > 0 && (
              <Link to="/wishlist" style={{ textDecoration: 'none', color: 'inherit' }} onClick={closeMobileMenu}>
                <MobileMenuItem>
                  Wishlist ({wishlist.length})
                </MobileMenuItem>
              </Link>
            )}
            <MobileMenuItem onClick={handleLogout}>Sign Out</MobileMenuItem>
          </>
        ) : (
          <>
            <Link to="/register" style={{ textDecoration: 'none', color: 'inherit' }} onClick={closeMobileMenu}>
              <MobileMenuItem>Register</MobileMenuItem>
            </Link>
            <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }} onClick={closeMobileMenu}>
              <MobileMenuItem>Sign In</MobileMenuItem>
            </Link>
          </>
        )}
      </MobileMenuContainer>
    </Container>
  );
};

export default Navbar;
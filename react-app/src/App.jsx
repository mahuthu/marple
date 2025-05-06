import ProductList from './pages/ProductList';
import Home from './pages/home';
import Product from './pages/Product';
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from './pages/Cart';
import Success from './pages/Success';
import PrivateRoute from "./components/PrivateRoute";
import UserProfile from "./pages/UserProfile";
import Wishlist from './pages/WishList';
import SearchResults from './pages/searchpage';
import AboutUs from './pages/About'
import Contact from './pages/Contact'
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
import FloatingSocialIcons from './components/FloatingSocialIcons';
import { useSelector } from "react-redux";
import { useEffect } from "react";


const App = () => {
  const user = useSelector(state => state.user.currentUser);
  useEffect(() => {
    console.log("Current user in App:", user); // Debugging log
  }, [user]);


  return (
    <Router>
      <FloatingSocialIcons />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<PrivateRoute element={Cart} />} />
        <Route path="/success" element={<Success />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/register" element={user ? <Navigate to="/" /> : <Register />} />
        
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
};

export default App;
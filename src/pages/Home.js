// src/pages/Home.js
import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import ProductList from '../components/ProductList';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <ProductList />
      <Footer />
    </div>
  );
};

export default Home;

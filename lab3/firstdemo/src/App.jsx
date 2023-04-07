import React, { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import MyNav from './components/MyNav';
import Home from './components/Home';
import ProductDetails from './components/ProductDetails';
import PageNotFound from './components/PageNotFound';
import ProductForm from './components/ProductForm';
import Product from './components/Product';
function App() {
  return (
    <Fragment>
      <MyNav/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='products' element={<Product />} />
        <Route path="products/:id" element={<ProductDetails />} />
        <Route path='products/:id/edit' element={<ProductForm />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>

    </Fragment>
  );
}

export default App;

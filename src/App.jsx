import React from 'react';
import Header from './containers/header';
import Product from './containers/product';
import Order from './containers/order';
import Posts from './containers/posts';
import Footer from './containers/footer';



function App() {
  return (
    <div>
      <Header />
      <Product />
      <Posts />
      <Order />
      <Footer />
    </div>
  );
}

export default App;

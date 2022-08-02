import React from 'react';
import Provider from './containers/context/context';
import Header from './containers/header';
import Product from './containers/product';
import Order from './containers/order';
import Posts from './containers/posts';
import Footer from './containers/footer';



function App() {
  return (
    <Provider>
      <Header />
      <Product />
      <Posts />
      <Order />
      <Footer />
    </Provider>
  );
}

export default App;

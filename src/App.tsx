import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { HeaderComponent } from './components/header';

import { HomePage } from './pages/home';
import { CollectionPage } from './pages/collection';
import { ContactsPage } from './pages/contacts';
import { ProductPage } from './pages/product';

import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.css';
import './App.css';
import { CartPage } from './pages/cart';

function App() {

  const [cartItems, setCartItems] = useState<{ productID: number, variantID: number | undefined }[]>([
    { productID: 1013, variantID: 10131 },
    { productID: 1013, variantID: 10132 },
    { productID: 1012, variantID: undefined },
    { productID: 2011, variantID: undefined },
  ]);

  const addCartItem = (productID: number, variantID?: number) => {
    setCartItems([...cartItems, { productID, variantID }]);
  }
  const clearCartItems = () => {
    setCartItems([]);
  }
  const removeCartItem = (productID: number, variantID?: number) => {
    const newCartItems = cartItems.filter((cartItem) => {
      return cartItem.productID !== productID || cartItem.variantID !== variantID;
    });
    setCartItems(newCartItems);
  }


  return (
    <div className="App">
      <Router>
        <HeaderComponent
          cartItemsCount={cartItems.length}
        />
        <Routes>

          <Route
            path="/"
            element={<HomePage />}
          />

          <Route
            path="/collection/:collectionID"
            element={<CollectionPage />}
          />

          <Route
            path="/product/:productID"
            element={<ProductPage
              addCartItem={addCartItem}
            />}
          />

          <Route
            path="/contacts"
            element={<ContactsPage />}
          />

          <Route
            path="/cart"
            element={<CartPage
              cartItems={cartItems}
              clearCartItems={clearCartItems}
              removeCartItem={removeCartItem}
            />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

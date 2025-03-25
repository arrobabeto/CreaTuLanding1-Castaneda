import React from 'react';
import NavBar from './src/components/NavBar';
import CartWidget from './src/components/CartWidget';
import ItemListContainer from './src/components/ItemListContainer';

function App() {
  return (
    <div>
      <NavBar />
      <CartWidget />
      <ItemListContainer message="Bienvenido a nuestra tienda!" />
    </div>
  );
}

export default App;
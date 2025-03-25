import NavBar from './components/NavBar';
import CartWidget from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div>
      <NavBar />
      <CartWidget />
      <ItemListContainer mensaje="¡Bienvenido a nuestra tienda!" />
    </div>
  );
}

export default App;

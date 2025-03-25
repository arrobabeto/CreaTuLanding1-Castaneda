import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav style={{ display: "flex", justifyContent: "space-between", padding: "1rem", background: "#333", color: "white" }}>
      <h1>Mi Tienda</h1>
      <ul style={{ display: "flex", gap: "1rem", listStyle: "none" }}>
        <li><a href="#" style={{ color: "black", textDecoration: "none" }}>Inicio</a></li>
        <li><a href="#" style={{ color: "black", textDecoration: "none" }}>Productos</a></li>
        <li><a href="#" style={{ color: "black", textDecoration: "none" }}>Contacto</a></li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
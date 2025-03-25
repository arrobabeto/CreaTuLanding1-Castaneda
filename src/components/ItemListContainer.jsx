import React from 'react';

const ItemListContainer = (props) => {
  // Verificamos si la prop 'message' existe. Si no, mostramos un mensaje por defecto.
  const message = props.message || "Bienvenido a nuestra tienda!";

  return (
    <div>
      <h1>{message}</h1>
      {/* Aquí puedes agregar más contenido, como la lista de productos */}
    </div>
  );
}

export default ItemListContainer;

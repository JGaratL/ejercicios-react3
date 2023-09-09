import React, { useState, useEffect } from 'react';

function ShoppingKart() {
  const [products] = useState([
    { id: 1, name: 'Producto 1', price: 100 },
    { id: 2, name: 'Producto 2', price: 200 },
  ]);

  const [cart, setCart] = useState(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart'));
    console.log("Recuperando carrito del localStorage:", savedCart);
    return savedCart || [];
  });
  
  const [discountCode, setDiscountCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Guardando carrito en localStorage:", cart);
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productIndex) => {
    setCart(cart.filter((_, index) => index !== productIndex));
  };

  const calculateTotal = () => {
    const total = cart.reduce((sum, product) => sum + product.price, 0);
    return total * (1 - discount / 100);
  };

  const applyDiscountCode = (code) => {
    if (code === 'SAVE10') {
      setDiscount(10);
      setError(null);
    } else {
      setError('Código de descuento no válido.');
    }
  };

  return (
    <div>
      <h2>Productos</h2>
      {products.map((product) => (
        <div key={product.id}>
          <span>
            {product.name} - ${product.price}
          </span>
          <button onClick={() => addToCart(product)}>Agregar al carrito</button>
        </div>
      ))}

      <h2>Carrito</h2>
      {cart.map((product, index) => (
        <div key={index}>
          <span>
            {product.name} - ${product.price}
          </span>
          <button onClick={() => removeFromCart(index)}>Eliminar del carrito</button>
        </div>
      ))}
      <div>
        <h2>Total: ${calculateTotal().toFixed(2)}</h2>
      </div>
      <div>
        <input
          type="text"
          placeholder="Código de descuento"
          value={discountCode}
          onChange={(e) => setDiscountCode(e.target.value)}
        />
        <button onClick={() => applyDiscountCode(discountCode)}>Aplicar descuento</button>
      </div>
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  );
}

export default ShoppingKart;

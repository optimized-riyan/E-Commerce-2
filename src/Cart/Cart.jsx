import React, { useState } from 'react';
import styles from './CartDetails.module.css';
const CartDetails = () => {
  const [cartId, setCartId] = useState('');
  const [cart, setCart] = useState(null);

  const getCartDetails = async () => {
    if (!cartId) {
      alert('Please enter a cart ID');
      return;
    }

    try {
      const response = await fetch(`https://dummyjson.com/carts/${cartId}`);
      const cartData = await response.json();
      setCart(cartData);
    } catch (error) {
      console.error('Error fetching cart details:', error);
    }
  };

  return (
    <div style={{padding:'20px'}}>
      <h1>Cart Details</h1>
      <input
        type="number"
        value={cartId}
        onChange={(e) => setCartId(e.target.value)}
        placeholder="Enter Cart ID"
      />
      <button onClick={getCartDetails}>Get Cart Details</button>

      {cart && (
        <div className="cart-details" style={{ marginTop: '20px' }}>
            <div style={{ marginTop: '20px', display:'flex', flexDirection:'row', alignContent:'center', alignItems:'center', padding:'20px'}}>
          <h2 style={styles.h2}>Cart ID: {cart.id}</h2>
          <p>Total Products: {cart.totalProducts}</p>
          <p>Total Quantity: {cart.totalQuantity}</p>
          <p>Total Price: {cart.total}</p>
          <p>Discounted Total: {cart.discountedTotal}</p>
          </div>
          {cart.products.map((product) => (
            <div className="product" key={product.id} style={{ border: '1px solid #ddd', padding: '10px', marginBottom: '10px', display:'flex', flexDirection:'row', flexWrap:'wrap', alignItems:'center' }}>
              <img src={product.thumbnail} alt={product.title} />
              <h3 style={{flex: 2, textWrap:'wrap'}}>{product.title}</h3>
              <p style={{flex: 1, textWrap:'wrap'}}>Price: ${product.price}</p>
              <p style={{flex: 1, textWrap:'wrap'}}>Quantity: {product.quantity}</p>
              <p style={{flex: 1, textWrap:'wrap'}}>Total: ${product.total}</p>
              <p style={{flex: 1, textWrap:'wrap'}}>Discount Percentage: {product.discountPercentage}%</p>
              <p style={{flex: 1, textWrap:'wrap'}}>Discounted Total: ${product.discountedTotal}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartDetails;

import React, { useState } from 'react';
import styles from './CartDetails.module.css';
import { FaPaypal } from "react-icons/fa";
import { FaGooglePay } from "react-icons/fa";
import { SiPhonepe } from "react-icons/si";
import { SiPaytm } from "react-icons/si";

const CartDetails = () => {
  const [cartId, setCartId] = useState('');
  const [cart, setCart] = useState(null);

  const getCartDetails = async () => {
    if (!cartId) {
      alert('Please enter a cart ID');
      return;
    }

    try {
      const response = await fetch(`http://localhost:3000/carts`);
      const cartData = await response.json();
      const matchedCart = cartData.find(cart => cart.id === cartId.toString());
      setCart(matchedCart);
      console.log(matchedCart);
    } catch (error) {
      console.error('Error fetching cart details:', error);
    }
  };

  const handleQuantityChange = (productId, newQuantity) => {
    setCart(prevCart => {
      return {
        ...prevCart,
        products: prevCart.products.map(product =>
          product.id === productId ? { ...product, quantity: newQuantity } : product
        )
      };
    });
  };

  return (
    <div style={{ padding: '20px' }}>
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
          <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'row', alignContent: 'center', alignItems: 'center', padding: '20px' }}>
            <h2 style={styles.h2}>Cart ID: {cart.id}</h2>
            <p>Total Products: {cart.totalProducts}</p>
            <p>Total Quantity: {cart.totalQuantity}</p>
            <p>Total Price: {cart.total}</p>
            <p>Discounted Total: {cart.discountedTotal}</p>
            <FaPaypal />
            <FaGooglePay />
            <SiPhonepe />
            <SiPaytm />
          </div>
          {cart.products.map((product) => (
            <div className="product" key={product.id} style={{ display: 'flex', flexDirection: 'row',flexWrap: 'wrap',  border: '1px solid #ddd', padding: '10px', marginBottom: '10px', alignItems: 'center', justifyContent: 'space-between' }}>
             <img src={product.thumbnail} alt={product.title} style={{width:'10%'}}/>
              <div className="jj" style={{ flex:2, textAlign: 'center', padding:'20px', width:'30%'}}><h3>{product.title}</h3></div>
              <div className="jj"  style={{flex:1,   textAlign: 'center',  }}><p>Price: ${product.price}</p></div>
              <div className="jj" style={{ flex:1, textAlign: 'center',}}>
                <p>Quantity:<br /><br />
                  {/* <input
                    type="number"
                    value={product.quantity}
                    onChange={(e) => handleQuantityChange(product.id, e.target.value)}
                    style={{ padding: '5px', width: '40%', justifyContent: 'space-between', borderRadius: '5px', borderStyle: 'solid', borderColor: 'gray', textAlign: 'center' }}
                  /> */}
                  {product.quantity}
                </p>
              </div>
              <div className="jj"  style={{  textAlign: 'center',  }}><p>Total: ${product.total}</p></div>
              <div className="jj" style={{ textAlign: 'center', }}><p>Discount Percentage: {product.discountPercentage}%</p></div>
              <div className="jj"  style={{ textAlign: 'center'}}><p>Discounted Total: ${product.discountedTotal}</p></div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartDetails;

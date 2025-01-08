import React, { useContext, useEffect, useState } from 'react';
import styles from './CartDetails.module.css';
import UserContext from '../UserContext';
import { useNavigate } from 'react-router-dom';
import CheckOut from "../Checkout/Checkout";

const CartDetails = () => {
  const { user: { id: cartId } } = useContext(UserContext);
  const [cart, setCart] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getCartDetails();
  }, []);

  const getCartDetails = async () => {
    if (!cartId) {
      navigate('/login');
      return;
    }

    try {
      const response = await fetch(`http://localhost:3000/carts`);
      const cartData = await response.json();
      const matchedCart = cartData.find(
        (cart) => cart.id === cartId.toString()
      );
      setCart(matchedCart);
    } catch (error) {
      console.error("Error fetching cart details:", error);
    }
  };

  const updateCartInBackend = async (updatedCart) => {
    try {
      await fetch(`http://localhost:3000/carts/${cartId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedCart),
      });
    } catch (error) {
      console.error('Error updating cart in backend:', error);
    }
  };

  const updateQuantity = (productId, delta) => {
    setCart(prevCart => {
      const updatedProducts = prevCart.products.map(product => {
        if (product.id === productId) {
          const newQuantity = Math.max(product.quantity + delta, 0);
          const newTotal = product.price * newQuantity;
          const discountedTotal = newTotal * (1 - product.discountPercentage / 100);
          return {
            ...product,
            quantity: newQuantity,
            total: newTotal,
            discountedTotal,
          };
        }
        return product;
      }).filter(product => product.quantity > 0); // Remove products with quantity 0

      const updatedCart = {
        ...prevCart,
        products: updatedProducts,
        totalProducts: updatedProducts.length,
        totalQuantity: updatedProducts.reduce((sum, p) => sum + p.quantity, 0),
        total: updatedProducts.reduce((sum, p) => sum + p.total, 0),
        discountedTotal: updatedProducts.reduce((sum, p) => sum + p.discountedTotal, 0),
      };

      updateCartInBackend(updatedCart);
      return updatedCart;
    });
  };

  const removeProduct = (productId) => {
    setCart(prevCart => {
      const updatedProducts = prevCart.products.filter(product => product.id !== productId);

      const updatedCart = {
        ...prevCart,
        products: updatedProducts,
        totalProducts: updatedProducts.length,
        totalQuantity: updatedProducts.reduce((sum, p) => sum + p.quantity, 0),
        total: updatedProducts.reduce((sum, p) => sum + p.total, 0),
        discountedTotal: updatedProducts.reduce((sum, p) => sum + p.discountedTotal, 0),
      };

      updateCartInBackend(updatedCart);
      return updatedCart;
    });
  };

  if (!cart) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Cart Details</h1>
      {cart && (
        <>
          <div style={{ marginTop: '20px' }}>
            {cart.products.map((product) => (
              <div
                key={product.id}
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  margin: '20px',
                  alignItems: 'center',
                  borderStyle: 'ridge',
                  padding: '20px',
                }}
              >
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  style={{ width: '15%' }}
                />
                <div style={{ width: "30%", textAlign: "center" }}>
                  <h3>{product.title}</h3>
                </div>
                <div style={{ flex: 1, textAlign: "center" }}>
                  <p>
                    Price: <br />${product.price}
                  </p>
                </div>
                <div style={{ flex: 1, textAlign: "center" }}>
                  <p>
                    Quantity:
                    <br />
                    <br />
                    {product.quantity}
                  </p>
                </div>
                <div style={{ flex: 1, textAlign: "center" }}>
                  <p>
                    Total: <br />${product.total}
                  </p>
                </div>
                <div style={{ flex: 1.5, textAlign: "center" }}>
                  <p>
                    Discount Percentage: <br /> {product.discountPercentage}%
                  </p>
                </div>
                <div style={{ flex: 1.5, textAlign: "center" }}>
                  <p>
                    Discounted Total: <br /> ${product.discountedTotal}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div
            style={{
              margin: "20px auto 0 auto",
              display: "flex",
              flexDirection: "column",
              padding: "20px",
              borderWidth: "1px",
              borderStyle: "solid",
              alignItems: 'center',
              width: '50%',
              borderColor: 'gray',
              borderRadius: '10px',
            }}
          >
            <h2>Cart ID: {cart.id}</h2>
            <div className={styles.summary}>
              <div className={styles.text}>
                <p>Total Products: </p> {cart.totalProducts}{" "}
              </div>
              <div className={styles.text}>
                <p>Total Quantity: </p> {cart.totalQuantity}
              </div>
              <div className={styles.text}>
                <p>Total Price: </p> {cart.total}
              </div>
              <div className={styles.text}>
                {" "}
                <p>Discounted Total: </p> {cart.discountedTotal}
              </div>
            </div>
            <CheckOut />
          </div>
        </>
      )}
    </div>
  );
};

export default CartDetails;

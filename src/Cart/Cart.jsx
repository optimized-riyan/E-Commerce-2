import React, { useContext, useEffect, useState } from 'react';
import styles from './CartDetails.module.css';
import UserContext from '../UserContext';
import { useNavigate } from 'react-router-dom';
import CheckOut from "../Checkout/Checkout";

const CartDetails = () => {
  const {user: {id: cartId}} = useContext(UserContext);
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
      const matchedCart = cartData.find(cart => cart.id === cartId.toString());
      setCart(matchedCart);
      console.log(matchedCart);
    } catch (error) {
      console.error('Error fetching cart details:', error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Cart Details</h1>
      {cart && (
        <>
        <div style={{ marginTop: '20px'}}>
          {cart.products.map((product) => (
            <div key={product.id} style={{display:'flex', flexDirection:'row', margin:'20px', alignItems:'center', borderStyle:'ridge', padding:'20px'}} >
             <img src={product.thumbnail} alt={product.title} style={{width:'15%'}}/>
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
        <div style={{marginTop: "20px",display: "flex",flexDirection: "column",padding: "20px",borderWidth: "2px",borderStyle: "solid", alignItems:'center', width:'50%', }}>
            <h2>Cart ID: {cart.id}</h2>
            <div className={styles.summary}>
                <div className={styles.text}><p>Total Products: </p> {cart.totalProducts} </div>
                <div className={styles.text}><p>Total Quantity: </p> {cart.totalQuantity}</div>
                <div className={styles.text}><p>Total Price: </p>  {cart.total}</div>
                <div className={styles.text}> <p>Discounted Total: </p>  {cart.discountedTotal}</div>
            </div>
                
                
               
                <CheckOut/>
                
        </div>
        </>
      )}
    </div>
  );
};

export default CartDetails;

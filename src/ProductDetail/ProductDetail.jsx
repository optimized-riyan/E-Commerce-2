import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import style from "./ProductDetail.module.css";
import img1 from "./addtocart.jpg";
import UserContext from "../UserContext";

function ProductDetail() {
  const { id } = useParams();
  const productId = parseInt(id);
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Fetch data dynamically from the JSON server
    fetch(`http://localhost:4000/yehaidata/${productId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch item");
        }
        return response.json();
      })
      .then((data) => {
        setItem(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
        setLoading(false);
      });
  }, [productId]);

  const handleAddtoCart = async () => {
    if (!user || !user.id) {
      navigate("/login");
      return;
    }

    if (!item) {
      console.error("Item is not defined");
      return;
    }

    const ProductToAdd = {
      id: item.id,
      title: item.title,
      price: item.price,
      total: item.price * item.quantity,
      quantity: item.quantity, // Assuming you want to add one item at a time
      discountPercentage: item.discountPercentage,
      discountedTotal: item.discountedTotal,
      thumbnail: item.thumbnail,
    };

    try {
      let response = await fetch(`http://localhost:3000/carts/${user.id}`);
      let cart = await response.json();

      const existingProductIndex = cart.products.findIndex(
        (p) => p.id === ProductToAdd.id
      );

      if (existingProductIndex !== -1) {
        // Product exists, increment the quantity
        cart.products[existingProductIndex].quantity += ProductToAdd.quantity;
        cart.products[existingProductIndex].total +=
          ProductToAdd.price * ProductToAdd.quantity;
        cart.products[existingProductIndex].discountedTotal +=
          ProductToAdd.discountedTotal * ProductToAdd.quantity;
      } else {
        // Product does not exist, add it to the products array
        cart.products.push(ProductToAdd);
      }

      // Update the cart with the new products array
      await fetch(`http://localhost:3000/carts/${user.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cart),
      });

      console.log("Product added to cart successfully");
      alert("Product added to cart successfully!");
    } catch (error) {
      console.error("Error adding product to cart:", error);
      alert("Failed to add product to cart. Please try again.");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!item) {
    return <div>Item not found</div>;
  }

  return (
    <div className={style.productDetailContainer}>
      <div className={style.imageContainer}>
        <img
          className={style.productImage}
          src={item.thumbnail}
          alt={item.title}
        />
      </div>
      <div className={style.contentContainer}>
        <h1 className={style.header}>{item.title}</h1>
        <p className={style.desc}>{item.description}</p>
        <p className={style.price}>
          Price: {"\u20B9"} {item.price}
        </p>
        <button className={style.cartButton} onClick={handleAddtoCart}>
          Add To Cart
          <span>
            <img
              className={style.cartImage}
              src={img1}
              alt="Add to cart"
              height="18px"
              width="18px"
            />
          </span>
        </button>
      </div>
    </div>
  );
}

export default ProductDetail;

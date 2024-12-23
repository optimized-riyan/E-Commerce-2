import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "./ProductDetail.module.css";
import img1 from "./addtocart.jpg";

function ProductDetail() {
  let { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Fetch data dynamically from the JSON server
    fetch(`http://localhost:3000/yehaidata/${id}`)
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
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!item) {
    return <div>Item not found</div>;
  }

  return (
    <div className={style.productDetailContainer}>
      <div className={style.imageContainer}>
        <img className={style.productImage} src={item.img} alt={item.alt} />
      </div>
      <div className={style.contentContainer}>
        <h1 className={style.header}>{item.title}</h1>
        <p className={style.desc}>{item.description}</p>
        <p className={style.price}>
          Price: {"\u20B9"} {item.price}
        </p>
        <button className={style.cartButton}>
          Add To Cart
          <span>
            <img
              className={style.cartImage}
              src={img1}
              alt="yash"
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

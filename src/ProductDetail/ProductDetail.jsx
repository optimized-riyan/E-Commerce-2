import React from "react";
import { useParams } from "react-router-dom";
import data from "../ProductPage/data/dbproduct.json";
import style from "./ProductDetail.module.css";
import img1 from "./addtocart.jpg";
function ProductDetail() {
  let { id } = useParams();
  const item = data.yehaidata.find((item) => item.id === parseInt(id));
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

        <p className={style.price}>Price: $ {item.price}</p>

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

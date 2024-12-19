import React from "react";
import Card from "./Card";
import data from "./data/dbproduct.json";
import ProductPageBody from "./ProductPageBody";
import myStyle from './ProductPage.module.css'

const ProductPage = () => {
  return (
    <div>
      <div className="prod-page-body">
        <ProductPageBody />
      </div>
      <h1>Products</h1>
      <div className={myStyle.grid}>
        {data.yehaidata.map((item) => {
          return (
            <Card
              id={item.id}
              img={item.img}
              alt={item.alt}
              title={item.title}
              subtitle={item.subtitle}
              description={item.description}
              price={item.price}
              key={item.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductPage;

import React, { useEffect, useState } from "react";
import Card from "./Card";
import ProductPageBody from "./ProductPageBody";
import myStyle from "./ProductPage.module.css";

const ProductPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the JSON server
    fetch("http://localhost:4000/yehaidata")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((fetchedData) => setData(fetchedData))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div>
      <div className="prod-page-body">
        <ProductPageBody />
      </div>
      <h1 className={myStyle.productHeading}>Products</h1>
      <div className={myStyle.grid}>
        {data.map((item) => {
          return (
            <Card
              id={item.id}
              thumbnail={item.thumbnail}
              alt={item.alt}
              title={item.title}
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

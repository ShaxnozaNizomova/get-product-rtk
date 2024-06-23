import React from "react";
import { useGetProductsQuery } from "../../context/api/productApi";
import "./Products.css";
import { Link } from "react-router-dom";
const Products = () => {
  const { data } = useGetProductsQuery({ limit: 50 });
  return (
    <div className="products">
      <h2 className="products__title">Products</h2>
      <div className="product__items">
        {data?.data?.products?.map((product) => (
          <div className="product" key={product.id}>
            <img src={product.urls[0]} alt="" width={250} height={180} />
            <Link to={`/single/${product.id}`}>
              {" "}
              <h4 className="product__title">{product.title}</h4>
            </Link>
            <p className="product__price">$ {product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;

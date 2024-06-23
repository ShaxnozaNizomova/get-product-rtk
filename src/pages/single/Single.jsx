import React from "react";
import "./Single.css";
import Navbar from "../../components/navbar/Navbar";
import { useGetDetailProductQuery } from "../../context/api/productApi";
import { useParams } from "react-router";
const Single = () => {
  const { id } = useParams();
  const { data } = useGetDetailProductQuery(id);
  console.log(data?.data);
  return (
    <>
      <Navbar />
      <div className="single">
        <div className="singlepage">
          <h2>Product Details</h2>
          <div className="product-container">
            <div>
              <img
                src={data?.data?.urls[0]}
                alt="Product"
                width={450}
                height={380}
              />
            </div>
            <div className="product-details">
              <h4>{data?.data?.title}</h4>
              <p>$ {data?.data?.price}</p>
              <p>Old Price: {data?.data?.oldPrice}</p>
              <p>Category: {data?.data?.category}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Single;

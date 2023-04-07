
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productsAPI } from "../Api/Products";
import Product from "./Product.css";

export default function ProductDetails() {
  let [product, setProduct] = useState({});
  const { id } = useParams();

  const getProductById = async () => {
    let response = await productsAPI.getProductById(id);
    setProduct(response.data);
  };
  useEffect(() => {
    getProductById();
  }, []);
  return (
    <div className="bg-light text-center ">
      <h1 className="text-primary p-3 rounded">Product Details : {id}</h1>
      <div className="container w-50">
        <div className="bg-dark text-light rounded p-2">
          <img src={product.imgPath} alt=""  />
          <h2 className="lead text-warning mt-4">{product.productName}</h2>
          <h3>Quantity : {product.quantity}</h3>
          <h2 className="lead  fw-bold fs-1 text-light ">
            Price : {product.price}
          </h2>
          <div>
            <i className="text-warning bi bi-star-fill"></i>
            <i className="text-warning bi bi-star-fill"></i>
            <i className="text-warning bi bi-star-fill"></i>
            <i className="text-warning bi bi-star-fill"></i>
            <i className="text-warning bi bi-star-fill"></i>
          </div>
        </div>
      </div>
    </div>
  )
}

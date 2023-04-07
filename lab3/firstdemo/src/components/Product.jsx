import ProductCard from "./ProductCard";
import React, { useEffect, useState } from "react";
import {  Card } from "react-bootstrap";
import { productsAPI } from "../Api/Products";
import { useNavigate } from "react-router-dom";
export default function Product() {
  const navigate = useNavigate();
  let [productList,setProduct] =useState([])

  const getAllProduct = async () => {
    let response = await productsAPI.getAllProducts();
    setProduct(response.data);
  };
  useEffect(() => {
    getAllProduct()
  }, []);

  const viewProduct = (productId) => {
    navigate(`/products/${productId}`);
  };
  const editProduct = (productId) => {
    navigate(`/products/${productId}/edit`);
  };
  const deleteProduct = async (productId) => {
    await productsAPI.deleteProduct(productId);
    let filteredList = productList.filter((product) => product.id != productId);
    setProduct(filteredList);
  };

  const goToAddPage = () => {
    navigate("/products/0/edit");
  };
  return (
    <div className="p-5 text-center rounded">
      <div className="container">
        <h2>My Furniture</h2>
        <i onClick={goToAddPage} className="bi bi-plus-square-fill  text-info fs-1"></i>
        <div className="row">
          {productList.map((item, index) => {
            return (
              <div className="col-sm-6 col-lg-4  " key={item.id}>
                <div className="p-3 ">
                  <Card style={{ width: "25rem", height: "29rem" }}>
                    <Card.Img
                      variant="top"
                      src={item?.imgPath}
                      className="myimg"
                    />
                    <Card.Body>
                      <Card.Title>{item?.productName}</Card.Title>
                      <Card.Text className="fs-5">
                        <span className="text-danger">Price:</span>{" "}
                        {item?.price} $
                      </Card.Text>
                      <Card.Text className="fs-5">
                        <span className="text-danger">Quantity: </span>{" "}
                        {item?.quantity || 0}
                      </Card.Text>
                      <i onClick={()=>viewProduct(item.id)} className="bi bi-eye-fill mx-2 fs-4 text-primary"></i>
                      <i onClick={()=>editProduct(item.id)} className="bi bi-pencil-square mx-2 fs-4 text-warning"></i>
                      <i onClick={()=>deleteProduct(item.id)} className="bi bi-trash3 mx-2 fs-4 text-danger"></i>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

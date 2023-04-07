import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { productsAPI } from "../Api/Products";

export default function ProductForm() {

  let navigate = useNavigate();
  let [formValue, setFormValues] = useState({});

  let [product, setProduct] = useState({});
  const { id } = useParams();

  const getProductById = async () => {
    let response = await productsAPI.getProductById(id);
    setProduct(response.data);
    setFormValues(response.data);
  };
  useEffect(() => {
    if (id != 0) {
      getProductById();
    }
  }, []);
  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(formValue);
    if (id == 0) {
      await productsAPI.addProduct(formValue);
    } else {
      await productsAPI.editProduct(id, formValue);
    }
    navigate("/products");
  };
  const operationHandler = (e) => {
    setFormValues({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-dark p-5 text-center">
      <h2 className="text-muted m-4">
        {id == 0 ? "Add Product " : "Edit Product"}
      </h2>
      <Form className="bg-light p-5 rounded" onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            name="productName"
            placeholder="Enter Product Name"
            onChange={operationHandler}
            defaultValue={product.productName}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            name="price"
            type="number"
            onChange={operationHandler}
            placeholder="Product Price"
            defaultValue={product.price}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            name="quantity"
            type="text"
            onChange={operationHandler}
            placeholder="Quantity"
            defaultValue={product.quantity}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            name="imgPath"
            type="text"
            onChange={operationHandler}
            placeholder="img Url"
            defaultValue={product.imgPath}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          {id == 0 ? "Add Product " : "Edit Product"}
        </Button>
      </Form>
    </div>
  );
}
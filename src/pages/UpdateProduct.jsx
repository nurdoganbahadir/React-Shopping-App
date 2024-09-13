import React from "react";
import ProductForm from "../components/ProductForm";
import { useLocation } from "react-router-dom";

const UpdateProduct = () => {
  const { state } = useLocation();
  console.log(state);
  return (
    <div className="container">
      <ProductForm />
    </div>
  );
};

export default UpdateProduct;

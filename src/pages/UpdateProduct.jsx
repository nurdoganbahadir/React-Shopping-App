import React, { useState } from "react";
import ProductForm from "../components/ProductForm";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const UpdateProduct = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  console.log(state);
  const [formData, setFormData] = useState(state);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(
      `https://66e42f40d2405277ed136991.mockapi.io/products/${state.id}`,
      formData
    );
    navigate(-1);
  };
  return (
    <div className="container">
      <ProductForm
        handleChange={handleChange}
        formData={formData}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default UpdateProduct;

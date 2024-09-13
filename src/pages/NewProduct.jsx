import React, { useState } from "react";
import ProductForm from "../components/ProductForm";
import axios from "axios";

const initialsState = {
  name: "",
  image: "",
  price: "",
  dampingRate: 0.8,
  amount: 0,
};

const NewProduct = () => {
  const [formData, setFormData] = useState(initialsState);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(
      "https://66e42f40d2405277ed136991.mockapi.io/products",
      formData
    );
    setFormData(initialsState);
  };

  return (
    <div className="container">
      <ProductForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        formData={formData}
      />
    </div>
  );
};

export default NewProduct;

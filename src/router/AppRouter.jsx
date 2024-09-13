import React from "react";
import {BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import NewProduct from "./pages/NewProduct";
import ProductList from "./pages/ProductList";
import About from "./pages/About";
import Navbar from "./components/Navbar";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/" element={}/>
        <Route path="/" element={}/>
        <Route path="/" element={}/>
        <Route path="/" element={}/>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;

import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import CardTotal from "../components/CardTotal";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorState, setErrorState] = useState(false);

  const getProducts = async () => {
    try {
      const { data } = await axios(
        "https://66e42f40d2405277ed136991.mockapi.io/products"
      );
      console.log(data);
      setProducts(data);
      setErrorState(false);
    } catch (error) {
      setErrorState(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="container mt-3">
      <div className={"bg-light d-sm-block d-md-flex"}>
        {loading ? (
          <p className="text-center text-danger w-100">Loading....</p>
        ) : products.length ? (
          <>
            <article id="product-panel" className="col-md-5">
              {products.map((product) => (
                <ProductCard
                  {...product}
                  key={product.id}
                  getProducts={getProducts}
                />
              ))}
            </article>
            <article className="col-md-5 m-3">
              <CardTotal products={products} />
            </article>
          </>
        ) : (
          <p className="text-center text-danger w-100">No products data...</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;

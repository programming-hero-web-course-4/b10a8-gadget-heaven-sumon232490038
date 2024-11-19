import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Product from "../product/product";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("/prodectsData.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1  gap-5 w-5/6 mx-auto ">
      {products.map((product) => (
        <Product product={product}></Product>
      ))}
    </div>
  );
};

export default Products;

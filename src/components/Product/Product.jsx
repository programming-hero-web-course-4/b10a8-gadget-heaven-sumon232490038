import React from "react";

const Product = ({ product }) => {
  const { product_title, product_image, price } = product;

  return (
    <div className="card bg-base-100 p-5  shadow-xl">
      <figure className="h-[300px] border rounded-xl">
        <img
          className="h-full w-full rounded-xl  "
          src={product_image}
          alt="Shoes"
        />
      </figure>
      <div className="border-t mt-5 space-y-2">
        <h2 className="card-title">{product_title}</h2>
        <p>Price: ${price}</p>
        <button className="btn rounded-3xl btn-outline btn-primary">
          View Details
        </button>
      </div>
    </div>
  );
};

export default Product;

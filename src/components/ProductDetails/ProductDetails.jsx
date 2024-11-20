import React from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import Favicon from "react-favicon";

const ProductDetails = () => {
  const detailsData = useLoaderData();

  return (
    <div className="max-w-7xl mx-auto  h-[500px]">
      <Helmet>
        <title>Product Details</title>
      </Helmet>
      <Favicon url="https://i.ibb.co.com/cyK9QBs/icons8-details-48.png" />
      <h1>this is details page</h1>
    </div>
  );
};

export default ProductDetails;

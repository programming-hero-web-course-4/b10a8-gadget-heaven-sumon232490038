import React from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router-dom";
import Favicon from "react-favicon";
import ReactStars from "react-rating-stars-component";
// import { render } from "react-dom";
import { FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";

const ProductDetails = () => {
  const detailsData = useLoaderData();
  const { product_id } = useParams();
  const makeInt = parseInt(product_id);
  const findProduct = detailsData.find(
    (product) => product.product_id === makeInt
  );

  const {
    product_title,
    product_image,
    description,
    price,
    specifications,
    rating,
  } = findProduct;
  const firstExample = {
    size: 30,
    value: 4.8,
    edit: false,
  };

  return (
    <div className=" mx-auto ">
      <Helmet>
        <title>Product Details</title>
      </Helmet>
      <Favicon url="https://i.ibb.co.com/cyK9QBs/icons8-details-48.png" />
      <div className="bg-[#9538e2] pt-10 pb-60 text-white text-center">
        <h1 className="font-bold text-3xl mb-5">Products Details</h1>
        <p className="">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to <br /> the coolest accessories, we have
          it all!
        </p>
      </div>

      <div className="flex max-w-6xl mx-auto min-h-screen p-3 relative rounded-2xl -top-48">
        <div className=" flex flex-col gap-10 md:flex-row border-2 rounded-2xl bg-white p-5">
          <img
            src={product_image}
            className="max-w-sm rounded-2xl border-2 shadow-2xl"
          />
          <div className="space-y-4">
            <h1 className="text-3xl font-bold">{product_title}</h1>
            <p className="font-bold text-xl">Price: ${price}</p>
            <small className=" px-2 py-1 rounded-2xl bg-[#ebf6e7] border-green-600 border text-green-600">
              In Stock
            </small>
            <p className="py">{description}</p>
            <p className="font-bold">Specification:</p>
            {specifications.map((spc) => (
              <p>{spc}</p>
            ))}
            <p className="flex items-center gap-1 font-bold">
              Rating{" "}
              <span className="text-yellow-400">
                <FaStar />
              </span>
            </p>
            <div className="flex gap-5 items-center">
              {" "}
              <span className="text-2xl">
                <ReactStars {...firstExample} />
              </span>
              <span className=" bg-slate-100 px-3 rounded-full">{rating}</span>
            </div>
            <div className="flex gap-5">
              <button className="bg-[#9538e2] text-white flex py-2 px-5 items-center gap-2 font-bold rounded-3xl">
                Add To Card
                <span className=" text-2xl font-bold">
                  <CiShoppingCart />
                </span>
              </button>
              <button className=" bg-white rounded-full border  text-xl p-2">
                {" "}
                <CiHeart />{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

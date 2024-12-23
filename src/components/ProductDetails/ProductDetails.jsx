import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router-dom";
import Favicon from "react-favicon";
import ReactStars from "react-rating-stars-component";
import { FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  AddMoney,
  DetailsByIdContext,
  WishlistItemFormDetails,
} from "../Root/Root";

const ProductDetails = () => {
  const { collectitems, setCollectItems } = useContext(DetailsByIdContext);
  const { wishilistItems, setWishilistItems } = useContext(
    WishlistItemFormDetails
  );
  const [disabled, setDisabled] = useState(false);
  const { addMoney, setAddMoney } = useContext(AddMoney);
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

  const handlesetProductId = (id) => {
    const makeParseInt = parseInt(id);
    const findpro = detailsData.find(
      (products) => products.product_id === makeParseInt
    );
    const newArray = [...collectitems, findpro];
    setCollectItems(newArray);
    setAddMoney(price + addMoney);
    toast.success(
      " Congrates product has been added to the Add to Card page!!!",
      {
        position: "top-center",
      }
    );
  };

  const handleWishlistItems = (id) => {
    const makeParseInt = parseInt(id);
    setDisabled(true);

    if (wishilistItems.find((product) => product.product_id == makeInt)) {
      toast.error(
        "Cannot re-add this product because this product already exists!!",
        { position: "top-left" }
      );
      return;
    }
    const findpro = detailsData.find(
      (products) => products.product_id === makeParseInt
    );
    const newArray = [...wishilistItems, findpro];
    setWishilistItems(newArray);
    toast.success("this product has been added to your wishlist!!!");
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
          Below are the details of the product you want to see, price button.
        </p>
        <p>
          {" "}
          specification, product name, product description, product rating and
        </p>
        <p> You can easily buy another one by clicking on this button.</p>
      </div>

      <div className="flex max-w-6xl mx-auto min-h-screen p-3 relative rounded-2xl -top-48">
        <div className=" flex flex-col gap-10 md:flex-row border-2 mx-auto rounded-2xl p-5 bg-white ">
          <img
            src={product_image}
            className="lg:max-w-sm rounded-2xl border-2 shadow-2xl"
          />
          <div className="space-y-4">
            <h1 className="text-3xl font-bold">{product_title}</h1>
            <p className="font-bold text-xl">Price: ${price}</p>
            <small className=" px-2 py-1 rounded-2xl bg-[#ebf6e7] border-green-600 border text-green-600">
              In Stock
            </small>
            <p className="py">{description}</p>
            <p className="font-bold">Specification:</p>
            {specifications.map((spc, idx) => (
              <p key={idx}>{spc}</p>
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
              <button
                onClick={() => handlesetProductId(product_id)}
                className="bg-[#9538e2] active:bg-pink-500 hover:bg-pink-900 text-white flex py-2 px-5 items-center gap-2 font-bold rounded-3xl"
              >
                Add To Card
                <span className=" text-2xl font-bold">
                  <CiShoppingCart />
                </span>
              </button>
              <button
                onClick={() => handleWishlistItems(product_id)}
                className={`${
                  disabled && "btn-disabled btn"
                } bg-white hover:bg-slate-200 focus:disabled active:bg-purple-500 rounded-full border  text-xl p-2`}
              >
                {" "}
                <CiHeart />
              </button>
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

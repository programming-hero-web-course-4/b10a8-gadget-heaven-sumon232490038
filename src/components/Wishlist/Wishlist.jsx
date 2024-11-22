import React, { useContext } from "react";
import { RxCrossCircled } from "react-icons/rx";
import { DetailsByIdContext } from "../Root/Root";

const Wishlist = ({ product }) => {
  const { collectitems, setCollectItems } = useContext(DetailsByIdContext);
  const { product_title, description, product_image, price, product_id } =
    product;

  const handleAddToCart = (wishlistProd) => {
    const setWishlist = [...collectitems, wishlistProd];
    setCollectItems(setWishlist);
  };
  return (
    <div className="md:p-5 p-2 md:gap-4  bg-white flex lg:min-w-[1152px] mx-auto items-center justify-between rounded-2xl">
      <div className=" flex gap-5">
        <div className="rounded-2xl  md:h-[200px]">
          <img
            className="h-full border-2 md:w-[200px] rounded-2xl object-cover"
            src={product_image}
            alt=""
          />
        </div>
        <div className="text-start space-y-5">
          <h1 className="md:text-2xl font-bold">{product_title}</h1>
          <p>{description}</p>
          <p className="font-bold md:text-xl">Price: ${price}</p>
          <button
            onClick={() => handleAddToCart(product)}
            className="bg-[#9538e2] hover:bg-pink-900 text-white flex py-2 px-5 items-center gap-2 font-bold rounded-3xl"
          >
            Add To Card
          </button>
        </div>
        x
      </div>
      <div>
        <button className="text-red-500 hover:text-red-900 text-4xl md:text-5xl">
          <RxCrossCircled />
        </button>
      </div>
    </div>
  );
};

export default Wishlist;

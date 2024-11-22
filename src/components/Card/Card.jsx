import React, { useContext } from "react";
import { RxCrossCircled } from "react-icons/rx";
// import { DeleteItem } from "../Root/Root";

const Card = ({ product, handleDelatebtn }) => {
  const { description, product_title, price, product_image, product_id } =
    product;
  // const [deleteItem, setDeleteItem] = useContext(DeleteItem);
  // const handleDelatebtn = (idd) => {
  //   setDeleteItem(iid);
  // };

  return (
    <div className="md:p-5 p-2 md:gap-4  bg-white flex max-w-6xl mx-auto items-center justify-between rounded-2xl">
      <div className=" flex gap-5">
        <div className="rounded-2xl w-[250px] md:h-[150px]">
          <img
            className="h-full rounded-2xl object-cover"
            src={product_image}
            alt=""
          />
        </div>
        <div className="text-start space-y-5">
          <h1 className="md:text-2xl font-bold">{product_title}</h1>
          <p>{description}</p>
          <p className="font-bold md:text-xl">Price: ${price}</p>
        </div>
      </div>
      <div>
        {" "}
        <button
          onClick={() => handleDelatebtn(product_id)}
          className="text-red-500 text-xl md:text-5xl"
        >
          <RxCrossCircled />
        </button>
      </div>
    </div>
  );
};

export default Card;

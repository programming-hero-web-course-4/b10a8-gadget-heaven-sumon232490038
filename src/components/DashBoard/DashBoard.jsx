import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import Favicon from "react-favicon";
import "react-tabs/style/react-tabs.css";
import "./DashBoard.css";
import { ImSortAmountDesc } from "react-icons/im";
import { DetailsByIdContext, WishlistItemFormDetails } from "../Root/Root";
import Cart from "../Cart/Cart";
import Wishlist from "../Wishlist/Wishlist";
const DashBoard = () => {
  const { collectitems } = useContext(DetailsByIdContext);
  const { wishilistItems } = useContext(WishlistItemFormDetails);
  const [toggleActive, setToggleActive] = useState(true);
  const handletoggle = (btn) => {
    if (btn === "wishlist") {
      setToggleActive(false);
    } else {
      setToggleActive(true);
    }
  };
  console.log(collectitems);
  return (
    <div className="mx-auto">
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <Favicon url="https://i.ibb.co.com/Mn6w21C/dashboard.png" />
      <div className="bg-[#9538e2] pt-10 pb-10 text-white text-center space-y-4">
        <h1 className="font-bold text-3xl mb-5">Dashboard</h1>
        <p className="">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to <br /> the coolest accessories, we have
          it all!
        </p>
        <div className="flex items-center justify-center gap-5">
          <button
            onClick={() => handletoggle("card")}
            className={`${
              toggleActive ? "active" : "non"
            } py-2 px-16 font-bold    rounded-3xl border `}
          >
            Cart
          </button>
          <button
            onClick={() => handletoggle("wishlist")}
            className={`${
              toggleActive ? "non" : "active"
            } py-2 px-16 font-bold    rounded-3xl border `}
          >
            Wishlist
          </button>
        </div>
      </div>

      <div className="  mx-auto text-center px-3 max-w-6xl my-8">
        {/* ========================= */}
        <div className={`${toggleActive ? "non" : "hidden"} min-h-40 `}>
          <div className="flex flex-col gap-5 md:flex-row items-center justify-between font-bold mb-5">
            <h1 className=" text-5xl md:text-xl">Cart</h1>
            <div className="flex flex-col md:flex-row gap-5 items-center space-x-4">
              <h1 className=" text-xl">Total const: ${`999.99`}</h1>
              <button className="py-2 border-[#9436e3] flex items-center gap-2  border rounded-3xl px-6 text-[#9436e3] font-bold">
                Sort by Price <ImSortAmountDesc />
              </button>
              <button className="py-2 md:px-8 px-14 rounded-3xl text-white bg-[#9436e3] font-bold">
                Purchase
              </button>
            </div>
          </div>
          <div className="flex flex-col  gap-5">
            {collectitems.map((product) => (
              <Cart product={product}></Cart>
            ))}
          </div>
        </div>
        {/* ============================== */}
        <div className={`${toggleActive ? "hidden" : "non"} min-h-40  `}>
          <div className="flex flex-col  gap-5">
            {" "}
            {wishilistItems.map((product) => (
              <Wishlist product={product}></Wishlist>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;

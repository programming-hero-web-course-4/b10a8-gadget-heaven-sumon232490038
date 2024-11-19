import React, { useContext, useState } from "react";
import Products from "../Products/Products";

const Home = () => {
  return (
    <div className="max-w-7xl mb-20  mx-auto">
      <h1 className="text-center font-bold text-5xl text-black mb-5">
        Explore Cutting-Edge Gadgets
      </h1>
      <div className="gap-5 flex flex-col md:flex-row p-10 md:p-0  ">
        {/* side bar start */}
        <div className="bg-white shadow-xl flex flex-col p-5 space-y-5 lg:w-1/6 max-h-80 	  border rounded-2xl">
          <button className="bg-base-200 py-2 hover:text-white font-bold hover:bg-[#8d35d5]  rounded-3xl">
            All Product
          </button>
          <button className="bg-base-200 py-2 hover:text-white font-bold hover:bg-[#8d35d5]  rounded-3xl">
            Laptops
          </button>
          <button className="bg-base-200 py-2 hover:text-white font-bold hover:bg-[#8d35d5]  rounded-3xl">
            Phones
          </button>
          <button className="bg-base-200 py-2 hover:text-white font-bold hover:bg-[#8d35d5]  rounded-3xl">
            Accessories
          </button>
          <button className="bg-base-200 py-2 hover:text-white font-bold hover:bg-[#8d35d5]  rounded-3xl">
            Smart Watches
          </button>
        </div>
        {/* side bar end */}
        {/* content section start */}
        {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1  gap-5 w-5/6 mx-auto "> */}
        <Products></Products>
        {/* </div> */}
        {/* content section start */}
      </div>
    </div>
  );
};

export default Home;

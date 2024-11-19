import React, { createContext, useEffect } from "react";
import Navber from "../Navber/Navber";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="bg-base-200">
      <div className="bg-[#9538e2] m-5 rounded-3xl text-white	">
        <Navber></Navber>
        <Banner></Banner>
      </div>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;

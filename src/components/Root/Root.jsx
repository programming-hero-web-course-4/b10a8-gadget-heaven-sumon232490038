import React, { createContext, useEffect } from "react";
import Navber from "../Navber/Navber";
import Footer from "../Footer/Footer";
import { Outlet, useLocation } from "react-router-dom";

const Root = () => {
  const { pathname } = useLocation();
  // console.log(location);
  return (
    <div className="bg-base-200 ">
      <div className={`${pathname === "/" && "p-3 md:p-8"}`}>
        <Navber></Navber>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;

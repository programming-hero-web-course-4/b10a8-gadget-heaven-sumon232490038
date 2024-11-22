import React, { createContext, useState } from "react";
import Navber from "../Navber/Navber";
import Footer from "../Footer/Footer";
import { Outlet, useLocation } from "react-router-dom";
export const DetailsByIdContext = createContext(null);
export const WishlistItemFormDetails = createContext(null);
const Root = () => {
  const [collectitems, setCollectItems] = useState([]);
  const [wishilistItems, setWishilistItems] = useState([]);
  const { pathname } = useLocation();
  return (
    <div className="bg-base-200 ">
      <WishlistItemFormDetails.Provider
        value={{ wishilistItems, setWishilistItems }}
      >
        <DetailsByIdContext.Provider value={{ collectitems, setCollectItems }}>
          <div className={`${pathname === "/" && "p-3 md:p-8"}`}>
            <Navber></Navber>
            <Outlet></Outlet>
          </div>
        </DetailsByIdContext.Provider>
      </WishlistItemFormDetails.Provider>
      <Footer></Footer>
    </div>
  );
};

export default Root;

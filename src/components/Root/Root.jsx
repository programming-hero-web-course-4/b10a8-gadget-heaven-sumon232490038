import React, { createContext, useEffect, useState } from "react";
import Navber from "../Navber/Navber";
import Footer from "../Footer/Footer";
import { Outlet, useLocation } from "react-router-dom";
export const AssetContext = createContext([]);
// export const DeleteItem = createContext(null);

const Root = () => {
  const [productId, setProductId] = useState([]);
  // const [deleteItem, setDeleteItem] = useState(0);
  const { pathname } = useLocation();
  // console.log(location);
  return (
    <div className="bg-base-200 ">
      {/* <DeleteItem.Provider value={[deleteItem, setDeleteItem]}> */}
      <AssetContext.Provider value={[productId, setProductId]}>
        <div className={`${pathname === "/" && "p-3 md:p-8"}`}>
          <Navber></Navber>
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </AssetContext.Provider>
      {/* </DeleteItem.Provider> */}
    </div>
  );
};

export default Root;

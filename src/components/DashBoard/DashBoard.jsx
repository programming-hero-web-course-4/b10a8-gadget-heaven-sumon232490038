import React from "react";
import { Helmet } from "react-helmet-async";
import Favicon from "react-favicon";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const DashBoard = () => {
  return (
    <div>
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
        <button>Cart</button>
        <button>Wishlist</button>
      </div>
    </div>
  );
};

export default DashBoard;

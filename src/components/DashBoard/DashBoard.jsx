import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import Favicon from "react-favicon";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { AssetContext } from "../Root/Root";
// import Product from "../product/product";
import Card from "../Card/Card";

const DashBoard = (product_id) => {
  const [productId, setProductId] = useContext(AssetContext);
  // console.log("products id", product_id);
  const handleDelatebtn = (id) => {
    const newArray = productId.filter(
      (productidd) => productidd.product_id !== id
    );
    setProductId(newArray);
  };

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
      </div>

      <div className="  mx-auto text-center">
        <Tabs>
          <TabList className="bg-[#9538e2] flex mx-auto items-center justify-center px-2 pb-5">
            <Tab className="font-bold py-2 px-7 rounded-3xl">Card</Tab>
            <Tab className="font-bold py-2 px-7 rounded-3xl">wishlist</Tab>
          </TabList>
          <TabPanel>
            <h2>{productId.length}</h2>
            <div className="mx-2 flex py-5 flex-col gap-5">
              {productId.map((product, idx) => (
                <Card
                  key={idx}
                  handleDelatebtn={handleDelatebtn}
                  product={product}
                ></Card>
              ))}
            </div>
          </TabPanel>
          <TabPanel></TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default DashBoard;

import React from "react";
import Navber from "../Navber/Navber";
import Banner from "../Banner/Banner";

const Root = () => {
  return (
    <div>
      <div className="bg-[#9538e2] m-5 rounded-3xl text-white	">
        <Navber></Navber>
        <Banner></Banner>
      </div>
    </div>
  );
};

export default Root;

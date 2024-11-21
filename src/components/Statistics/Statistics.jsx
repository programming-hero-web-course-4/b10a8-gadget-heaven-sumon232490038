import React from "react";
import { Helmet } from "react-helmet-async";
import Favicon from "react-favicon";
const Statistics = () => {
  return (
    <div className="">
      <Helmet>
        <title>Statistics</title>
      </Helmet>
      <Favicon url="https://i.ibb.co.com/RDSqKwL/spreadsheet-app.png" />
      <div className="bg-[#9538e2] pt-10 pb-10 text-white text-center space-y-4">
        <h1 className="font-bold text-3xl mb-5">Statistics</h1>
        <p className="">
          Below is a statistical chart so that you can easily understand which
          phone is better, other prices are given here, the product <br /> is
          rated according to how people like it and many more things from which
          you can easily buy your favorite phone easily.
        </p>
      </div>

      <div className="flex flex-col justify-center items-center mx-auto my-5 max-w-6xl">
        <h1 className="text-start text-5xl my-5 font-bold">Statistics</h1>
        <img
          className="rounded-3xl"
          src="https://i.ibb.co.com/YpHSkYc/Screenshot-5.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Statistics;

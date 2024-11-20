import React from "react";
import BannerImg from "../BannerImg/BannerImg";

const Banner = () => {
  return (
    <div className=" max-w-7xl mx-auto p-5 md:px-40 h-[500px] mb-96 text-white rounded-2xl ">
      <div className="  text-center pt-0 ">
        <div className="">
          <h1 className="md:text-5xl text-2xl font-bold">
            Upgrade Your Tech Accessorize with Gadget Heaven Accessories
          </h1>
          <p className="py-6">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to <br /> the coolest accessories, we
            have it all!.
          </p>
          <button className="px-8 btn p-3 font-bold bg-white hover:bg-[#9538e2] hover:text-white rounded-3xl mb-10 text-[#9538e2]">
            Shop Now
          </button>
        </div>
      </div>
      <BannerImg></BannerImg>
    </div>
  );
};

export default Banner;

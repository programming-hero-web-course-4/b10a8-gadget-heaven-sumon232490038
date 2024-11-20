import { useEffect, useState } from "react";
import Products from "../Products/Products";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [click, setClick] = useState("");
  useEffect(() => {
    fetch("/prodectsData.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleData = (data) => {
    setClick(data);
  };

  return (
    <div className="max-w-7xl mb-20  mx-auto">
      <h1 className="text-center font-bold text-5xl text-black mb-5">
        Explore Cutting-Edge Gadgets
      </h1>
      <div className="gap-5 flex flex-col md:flex-row p-10 md:p-0  ">
        {/* side bar start */}
        <div className="bg-white shadow-xl flex flex-col p-5 space-y-5 lg:w-1/6 max-h-80 md:w-2/6	mx-auto w-4/6  border rounded-2xl">
          <button
            onClick={() => handleData("All")}
            className="bg-base-200 py-2 hover:text-white font-bold hover:bg-[#8d35d5]  rounded-3xl"
          >
            All Product
          </button>
          <button
            onClick={() => handleData("L")}
            className="bg-base-200 py-2 hover:text-white font-bold hover:bg-[#8d35d5]  rounded-3xl"
          >
            Laptops
          </button>
          <button
            onClick={() => handleData("P")}
            className="bg-base-200 py-2 hover:text-white font-bold hover:bg-[#8d35d5]  rounded-3xl"
          >
            Phones
          </button>
          <button
            onClick={() => handleData("A")}
            className="bg-base-200 py-2 hover:text-white font-bold hover:bg-[#8d35d5]  rounded-3xl"
          >
            Accessories
          </button>
          <button
            onClick={() => handleData("Sw")}
            className="bg-base-200 py-2 hover:text-white font-bold hover:bg-[#8d35d5]  rounded-3xl"
          >
            Smart Watches
          </button>
        </div>
        {/* side bar end */}
        {/* content section start */}
        <Products products={products} click={click}></Products>
        {/* content section start */}
      </div>
    </div>
  );
};

export default Home;

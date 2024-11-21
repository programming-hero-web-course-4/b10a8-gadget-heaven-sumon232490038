import React from "react";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { Link, useLocation } from "react-router-dom";

const Navber = () => {
  const { pathname } = useLocation();
  const link = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/Statistics">Statistics</Link>
      </li>

      <li>
        <Link to="/dashboard">Dashborad</Link>
      </li>
      <li>
        <Link to="/ContactUs">Contact us</Link>
      </li>
    </>
  );

  return (
    <div
      className={`${
        pathname === "/" ? "bg-[#9538e2] rounded-t-2xl text-white " : "bg-white"
      }`}
    >
      <div className="navbar max-w-7xl mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm text-black dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {link}
            </ul>
          </div>
          <a className="btn btn-ghost font-bold text-2xl">Gadget Heaven</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-bold">{link}</ul>
        </div>
        <div className="navbar-end space-x-2 font-bold text-black">
          <a className=" bg-white p-2 rounded-full border text-xl">
            <CiShoppingCart />
          </a>
          <a className=" bg-white rounded-full border  text-xl p-2">
            <CiHeart />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navber;

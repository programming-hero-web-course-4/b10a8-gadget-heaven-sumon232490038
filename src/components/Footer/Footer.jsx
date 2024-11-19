import React from "react";

const Footer = () => {
  return (
    <div className="bg-white ">
      <div className="max-w-7xl mx-auto border-b-2 text-center text-black space-y-2 pb-5">
        <h1 className="text-5xl font-bold ">Gadget Heaven</h1>
        <p>Leading the way in cutting-edge technology and innovation.</p>
      </div>
      <footer className="footer text-black max-w-7xl mx-auto justify-evenly gap-11 p-10">
        <nav className="text-center">
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Order Tracking</a>
          <a className="link link-hover">Shipping & Delivery</a>
          <a className="link link-hover">Returns</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Careers</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of Service</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;

"use client";
import Navbar from "../../components/seller/Navbar";
import SellerSideBar from "../../components/seller/SellerSideBar";
import React from "react";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="flex w-full">
        <SellerSideBar />
        {children}
      </div>
    </div>
  );
};

export default Layout;

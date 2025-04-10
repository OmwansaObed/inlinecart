import React from "react";
import { assets } from "../../assets/assets";
import Image from "next/image";
import { useAppContext } from "@/context/Appcontext";

const Navbar = () => {
  const { router } = useAppContext();

  return (
    <div className="flex items-center px-4 md:px-8 py-3 justify-between border-b">
      <div
        className="flex-shrink-0 cursor-pointer"
        onClick={() => router.push("/")}
      >
        <div className="flex items-center">
          <span className="text-3xl font-bold text-black">
            <span className="text-orange-500">I</span>nline
            <span className="text-orange-500">C</span>art.
          </span>
        </div>
      </div>
      <button className="bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm">
        Logout
      </button>
    </div>
  );
};

export default Navbar;

import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { useAppContext } from "@/context/Appcontext";

const Footer = () => {
  const { router } = useAppContext();
  return (
    <div className="flex md:flex-row flex-col-reverse items-center justify-between text-left w-full px-10">
      <div className="flex items-center gap-4">
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
        <div className="hidden md:block h-7 w-px bg-gray-500/60"></div>
        <p className="py-4 text-center text-xs md:text-sm text-gray-500">
          Copyright 2025 © greatstack.dev All Right Reserved.
        </p>
      </div>
      <div className="flex items-center gap-3">
        <a href="#">
          <Image src={assets.facebook_icon} alt="facebook_icon" />
        </a>
        <a href="#">
          <Image src={assets.twitter_icon} alt="twitter_icon" />
        </a>
        <a href="#">
          <Image src={assets.instagram_icon} alt="instagram_icon" />
        </a>
      </div>
    </div>
  );
};

export default Footer;

"use client";
import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Footer({ color }) {
  const pathname = usePathname();
  const isContact = pathname.startsWith("/contact");
   // ${!isContact ? "bg-linear-to-br from-[#ffd900] to-[#ff9900]":"white"}
  return (
    <div className="w-full relative bg-[#2F3293] py-16 md:py-24">
      {/* background image */}
      <Image
        src="/Images/footer.png"
        alt="footer"
        fill
        className="absolute inset-0"
        style={{ top: "-230px" }}
      />

      {/* content wrapper */}
      <div className="relative w-[90%] md:w-[60%] mx-auto flex flex-col items-center">
        {/* heading */}
        <h2 className="text-[#FEF200] text-2xl md:text-3xl font-bold text-center">
          HAVE ANY QUESTIONS?
        </h2>
        <p className="text-center text-white mt-2 text-sm md:text-base">
          We’re here to help—get in touch with us today.
        </p>
        {/* input */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 md:gap-20 justify-center mt-5 w-full">
          
          <input
            type="text"
            className="p-3 rounded-3xl bg-white w-full sm:w-80 text-black placeholder:text-gray-400"
            placeholder="Enter your email"
          />
        </div>
        {/* button */}
        <button className="bg-[#FEF200] text-[#2F3293] px-10 md:px-20 py-3 rounded text-lg md:text-xl font-semibold mt-4">
          Contact Us
        </button>
        {/* contact info */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between mt-8 gap-6 w-full text-center">
          {/* address */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-white">Orion Pest Solutions Pvt. Ltd.</p>
            <p className="text-white">200W, S.P. Mukherjee Road</p>
            <p className="text-white">Kolkata - 700026, West Bengal, India.</p>
          </div>

          {/* email */}
          <p className="text-white flex-1">sales@orionpest.com</p>

          {/* phone */}
          <div className="flex-1 text-center md:text-right">
            <p className="text-white">1800 419 8181</p>
            <p className="text-white">9800123456</p>
          </div>
        </div>
        {/* copyright */}
        <p className="text-white text-center mt-10 text-sm md:text-base">
          Copyright © 2025 Orion Pest Solutions. All Rights Reserved. Site
          Designed & Maintained by Starway Web Digital.
        </p>
      </div>
    </div>
  );
}

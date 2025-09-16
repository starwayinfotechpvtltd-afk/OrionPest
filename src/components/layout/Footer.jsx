"use client"
import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Footer({color}) {

  const pathname = usePathname();
  const isContact = pathname.startsWith("/contact");
  console.log(isContact)
  return (
    <div className={`w-full h-[700px] relative ${!isContact ? "bg-linear-to-br from-[#ffd900] to-[#ff9900]":"white"}`}>
      <Image src="/Images/footer.png" alt="footer" fill className="" />
      <div className=" w-full absolute translate-y-1/2 mt-18">
        <div className="w-[60%] mx-auto flex justify-center flex-col">
          <h2 className="text-[#FEF200] text-3xl font-bold text-center">
            HAVE ANY QUESTIONS
          </h2>
          <p className="text-center text-white mt-2">
            We’re here to help—get in touch with us today.
          </p>

          <div className="flex items-center gap-20 justify-center mt-5">
            <p className="text-white">Enter Your Email here:</p>
            <input type="text" className="p-3 rounded-3xl bg-white w-96" />
          </div>

          <button className="bg-[#FEF200] text-[#2F3293] px-20 py-3 rounded text-xl font-semibold mt-4 mx-auto">
            Contact Us
          </button>

          <div className="flex items-center justify-between mt-6">
            <div>
              <p className="text-white">Orion Pest Solutions Pvt. Ltd.</p>
              <p className="text-white">200W, S.P. Mukherjee Road</p>
              <p className="text-white">
                Kolkata - 700026, West Bengal, India.
              </p>
            </div>
            <p className="text-white">sales@orionpest.com</p>
            <div>
              <p className="text-white">1800 419 8181</p>
              <p className="text-white">9800123456</p>
            </div>
          </div>

          <p className="text-white mt-6 text-center mt-10">
            Copyright © 2025 Orion Pest Solutions. All Rights Reserved. Site
            Designed & Maintained by Starway Web Digital.
          </p>
        </div>
      </div>
    </div>
  );
}

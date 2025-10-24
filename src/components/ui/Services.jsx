"use client";
import React, { useState, useEffect } from "react";
import services from "../../app/services/services.json";
import Link from "next/link";
import Image from "next/image";

export default function Services() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [showAll, setShowAll] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleServices =
    isMobile && !showAll ? services.slice(0, 3) : services;
  return (
    <div className="mt-10 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
      {visibleServices.map((service, index) => (
        <div key={index} className="flex flex-col items-center text-center">
          <Image
            src={service.image}
            height={120}
            width={120}
            alt={service.service}
          />
          <h4 className="text-[#2F3293] font-semibold text-2xl mt-4">
            {service.service}
          </h4>
          <div className="bg-[#FEF200] p-5 rounded-2xl mt-4 h-52 md:h-56 flex flex-col justify-between">
            <p>{service.text}</p>
            <Link
              className="flex items-center gap-3 group cursor-pointer w-fit text-center mx-auto mt-3"
              href={`services/${service.link}`}
            >
              <button className="bg-[#2F3293] text-center transitio duration-300 ease-in-out hover:-translate-y-1 hover:scale-104 text-lg font-bold mt-3 text-white px-6 py-2 rounded cursor-pointer">
                Read more
              </button>
            </Link>
          </div>
        </div>
      ))}
      {isMobile && !showAll && (
        <button
          onClick={() => setShowAll(true)}
          className="bg-[#2F3293] text-center transitio duration-300 ease-in-out hover:-translate-y-1 hover:scale-104 text-lg font-bold mt-3 text-white px-6 py-2 rounded cursor-pointer"
        >
          Show more
        </button>
      )}
    </div>
  );
}

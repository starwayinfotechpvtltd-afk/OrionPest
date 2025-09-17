"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [navLinks, setNavLinks] = useState([
    {
      id: 1,
      active: true,
      text: "HOME",
      link: "/",
    },
    {
      id: 2,
      active: false,
      text: "SERVICES",
      // link: "/services"
      link: "#",
    },
    {
      id: 3,
      active: false,
      text: "ABOUT",
      // link: "/about"
      link: "#",
    },
    {
      id: 4,
      active: false,
      text: "CLIENT",
      // link: "/client"
      link: "#",
    },
    {
      id: 5,
      active: false,
      text: "BRANCHES",
      // link: "/branches"
      link: "#",
    },
    {
      id: 6,
      active: false,
      text: "KNOWLEDGEBASE",
      // link: "/knowledgebase"
      link: "#",
    },
  ]);

  const handleClick = (id) => {
    setNavLinks((prev) =>
      prev.map((nav) =>
        nav.id === id ? { ...nav, active: true } : { ...nav, active: false }
      )
    );
  };

  return (
    <header
  className="w-full"
  style={{
    boxShadow:
      "rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px",
  }}
>
  {/* top bar */}
  <div className="bg-[#2f3293] w-full p-3">
    <div className="w-[90%] md:w-[60%] mx-auto flex flex-col md:flex-row md:justify-around gap-2 md:gap-0 text-center md:text-left">
      <div className="text-white text-sm md:text-base">
        Email us:{" "}
        <Link href="mailto:sales@orionpest.com">sales@orionpest.com</Link>
      </div>
      <div className="text-white text-sm md:text-base">
        National toll free helpline:{" "}
        <Link href="tel:18004198181">1800 419 8181</Link>
      </div>
      <div className="text-white text-sm md:text-base">
        WhatsApp Us: <Link href="tel:9800123456">9800123456</Link>
      </div>
    </div>
  </div>

  {/* main nav bar */}
  <div className="bg-[#fef200] w-full py-2">
    <div className="w-[90%] md:w-[80%] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      {/* logo */}
      <Image
        src="/logo.png"
        alt="logo"
        width={100}
        height={100}
        className="rounded-full"
      />

      {/* navigation */}
      <nav className="flex flex-wrap justify-center md:justify-end items-center gap-4">
        {navLinks?.map((nav) => (
          <Link
            key={nav.id}
            href={nav.link}
            onClick={() => handleClick(nav.id)}
            className={`${
              nav.active ? "text-blue-500" : "text-black"
            } font-bold text-sm md:text-base`}
          >
            {nav.text}
          </Link>
        ))}
      </nav>
    </div>
  </div>
</header>

  );
}

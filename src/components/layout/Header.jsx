"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'

export default function Header() {

  const [navLinks, setNavLinks]=useState([
    {
      id: 1,
      active: true,
      text: "HOME",
      link: "/"
    },
    {
      id: 2,
      active: false,
      text: "SERVICES",
      // link: "/services"
      link: "#"
    },
    {
      id: 3,
      active: false,
      text: "ABOUT",
      // link: "/about"
      link: "#"
    },
    {
      id: 4,
      active: false,
      text: "CLIENT",
      // link: "/client"
      link: "#"
    },
    {
      id: 5,
      active: false,
      text: "BRANCHES",
      // link: "/branches"
      link: "#"
    },
    {
      id: 6,
      active: false,
      text: "KNOWLEDGEBASE",
      // link: "/knowledgebase"
      link: "#"
    }
  ])

  const handleClick = (id) => {
    setNavLinks((prev) =>
      prev.map((nav) =>
        nav.id === id ? { ...nav, active: true } : { ...nav, active: false }
      )
    );
  };

  return (
    <header className='w-full'>
      <div className='bg-[#2f3293] w-full flex flex-row justify-evenly items-center p-5'>
        <div className='text-white'>Email us: <Link href={{email: "sales@orionpest.com"}}>sales@orionpest.com</Link></div>
        <div className='text-white'>National toll free helpline: <Link href={{tel: "1800 419 8181"}}>1800 419 8181</Link></div>
        <div className='text-white'> WhatsApp Us: <Link href={{tel:  9800123456}}> 9800123456</Link></div>
      </div>
      <div className='bg-[#fef200] w-full py-3 px-18 flex items-center justify-between'>
        <Image src="/logo.png" alt='logo' width={120} height={120} className='rounded-full'/>
        <nav className='flex items-center gap-4'>
          {navLinks?.map(nav=>
            <Link
            key={nav.id}
            href={nav.link}
            onClick={() => handleClick(nav.id)}
            className={`${nav.active ? "text-blue-500" : "text-black"} font-bold`}
          >
            {nav.text}
          </Link>
          )}
        </nav>
      </div>
    </header>
  )
}

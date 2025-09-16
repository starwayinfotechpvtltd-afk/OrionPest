import React from "react";
import Image from "next/image";
import { RiPokerDiamondsFill } from "react-icons/ri";

const badges = [
  {
    id: 1,
    image: "",
    text: "100%",
  },
  {
    id: 2,
    image: "/Images/about2.png",
    text: "26+",
  },
  {
    id: 3,
    image: "/Images/about3.png",
    text: "04/05",
  },
  {
    id: 4,
    image: "/Images/about4.png",
    text: "256+",
  },
];
export default function page() {
  return (
    <div className="w-full">
      {/* About us section */}
      <div className="w-[60%] mx-auto">
        <h2 className="text-5xl font-bold text-[#2F3293] text-center mt-28">
          ABOUT OUR JOURNEY
        </h2>
        <p className="mt-6 text-black">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod or incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, fugiat nulla pariatur. Excepteur sint occaecat cupidatat
          non proident,unt in culpa qui officia deserunt mollit anim id est
          laborum. Sed ut perspiciatise Lorem ipsum dolor sit amet, consectetur
          adipisicing elit, sed do eiusmod or Excepteur sint occaecat cupidatat
          non proident,unt in culpa qui officia deserunt mollit anim id est
          laborum. Sed ut perspiciatise
        </p>
      </div>
      {/* Blue part */}
      <div className="w-full bg-[#2F3293] py-6 mt-20 ">
        <div className="w-[60%] mx-auto flex justify-around items-center">
          {badges.map((badge) => (
            <div
              className="flex flex-col justify-center gap-3 items-center"
              key={badge.id}
            >
              <div className="bg-[#FEF200] rounded-full p-3">
                <Image
                  src={badge?.image || "/Images/about2.png"}
                  alt={badge.text}
                  height={35}
                  width={35}
                />
              </div>
              <p className="text-[#FEF200] font-medium text-3xl">
                {badge.text}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* Our vision and mission */}
      <div className="flex justify-between place-items-start w-[60%] mx-auto mt-20">
        <Image src="/Images/img2.png" alt="image" height={400} width={500} />
        <div className="">
          <div>
            <h3 className="text-[#2F3293] text-3xl font-bold text-end">
              OUR MISSION
            </h3>
            <p className="text-end mt-3">
              To protect, preserve and nurture the health, safety and well-being
              of our clients, their families and neighbors by providing the most
              comprehensive and high quality pest control solutions that exceed
              expectations.
            </p>
          </div>
          <div className="mt-6">
            <h3 className="text-[#2F3293] text-3xl font-bold text-end">
              Our Vision
            </h3>
            <p className="text-end mt-3">
              To gain excellence through our state-of-the-art professional pest
              control services in accordance with the highest industry
              standards.
            </p>
          </div>
        </div>
      </div>

      {/* Services points */}
      <div className="flex justify-around items-center w-[60%] mx-auto mt-10">
        <div className="flex flex-col gap-3">
          <p className="flex items-center gap-2">
            <RiPokerDiamondsFill color="#2F3293" />
            Pestcontrol service Rescomaned.
          </p>
          <p className="flex items-center gap-2">
            <RiPokerDiamondsFill color="#2F3293" />
            Use of the part pestconteol.
          </p>
          <p className="flex items-center gap-2">
            <RiPokerDiamondsFill color="#2F3293" />
            Pestcontrol Service Rescomaned.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <p className="flex items-center gap-2">
            <RiPokerDiamondsFill color="#2F3293" />
            Pesto part of the Men.
          </p>
          <p className="flex items-center gap-2">
            <RiPokerDiamondsFill color="#2F3293" />
            24/7 Services
          </p>
          <p className="flex items-center gap-2">
            <RiPokerDiamondsFill color="#2F3293" />
            Use of the Part Name
          </p>
        </div>
      </div>

      <div className="w-[60%] mx-auto mt-24">
        <h2 className="text-[#2F3293] text-5xl font-bold text-center">
          The Experts in Pest Control
        </h2>
        <p className="mt-10">
          Established in the year 1998, Orion Pest Solutions Pvt. Ltd. is one of
          the leading professional pest control service provider in India. We
          are an ISO 9001:2008, 14001:14004 certified company and are a member
          of Indian Pest Control Association (IPCA) and National Pest Management
          Association (NPMA). We have been offering quality services to the
          society with the objective of protecting our customers from pest
          problems and bringing in an eco-friendly environment. We specialize in
          pest prevention and removal with the application of safe pesticides
          while adhering to the highest standards. Our strong team of dedicated,
          knowledgeable and highly experienced technicians provide you
          effective pest control solutions for both residential and commercial
          areas. <br></br>
          <b className="text-lg">
            We are your trusted partner for pest control
          </b>
          .
        </p>
      </div>

      {/* Yellow part */}
      <div className="bg-linear-to-br from-[#FFF300] to-[#FEBA00] pb-48 relative mt-24 border-t-8 border-[#2F3293] pt-20">
        <div className="w-[60%] mx-auto">
          <h3 className="text-[#2F3293] text-4xl font-bold text-center">OUR SCORE</h3>
          <p className="text-black mt-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod or incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, fugiat nulla pariatur. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit, sed do eiusmod or incididunt ut labore
            et dolore magna aliqua. Ut enim ad minim veniam,.{" "}
          </p>
          {/* Maintaince */}
          <div className="mt-18">
            <h3 className="text-[#2F3293] text-4xl font-bold text-center">Monthly Maintenance </h3>
            <div className="mt-10">
              <h3 className="text-[#2F3293] text-center text-2xl font-semibold">Residential Pest Control Services</h3>
              <p className="text-center mt-3">Proin gravida nibh vel velit auctor aliquet. Aenean sollici tudin, lorem quis bibendum auctor.</p>
            </div>
            <div className="mt-6">
              <h3 className="text-[#2F3293] text-center text-2xl font-semibold">Commercial Pest Control Services</h3>
              <p className="text-center mt-3">Proin gravida nibh vel velit auctor aliquet. Aenean sollici tudin, lorem quis bibendum auctor.</p>
            </div>
            <div className="mt-6">
              <h3 className="text-[#2F3293] text-center text-2xl font-semibold">Fumigation Pest Control Services</h3>
              <p className="text-center mt-3">Proin gravida nibh vel velit auctor aliquet. Aenean sollici tudin, lorem quis bibendum auctor.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

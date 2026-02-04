import React from "react";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
import services from "./services.json";
import Services from "@/components/ui/Services";

const boxes = [
  {
    id: 1,
    heading: "Eco friendly technogies",
    desc: "Safe for families, pets, and the environment",
    link: "eco-friendly",
  },
  {
    id: 2,
    heading: "Fast Pest Removal",
    desc: "Quick solutions when you need them most",
    link: "pest-removal",
  },
  {
    id: 3,
    heading: "One-time extermination",
    desc: "Effective treatment without long-term contracts",
    link: "extermination",
  },
];

// const services = [
//   {
//   service: "Cockroach Control",
//   link: "cockroach-control"
//   },
//   {
//   service: "Bed bugs Control",
//   link: "bedbug-control"
//   },
//   {
//   service: "Termite Control",
//   link: "termite-control"
//   },
//   {
//   service: "Mosquito Control",
//   link: "mosquito-control"
//   },
//   {
//   service: "Flies Control",
//   link: "flies-control"
//   },
//   {
//   service: "Rodent Control",
//   link: "rodent-control"
//   },
//   {
//   service: "Bird Control",
//   link: "bird-control"
//   },
//   {
//   service: "Ant Control",
//   link: "ant-control"
//   }
// ];

// Generate paths for all branches

console.log(services);
const [, ...restServices] = services;
console.log(restServices);
export default function page() {
  return (
    <div className="w-full pb-60 md:pb-80">
      <div className="w-[90%] sm:w-[80%] md:w-[60%] mx-auto">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#2F3293] font-bold text-center mt-16 sm:mt-24 md:mt-32">
          WE WORK WITH CLIENTS ON STRATEGY
        </h2>

        {/* Intro text */}
        <p className="mt-6 text-black text-lg leading-relaxed md:text-justify text-left">
          At Orion, we believe effective pest management goes beyond
          treatment—it starts with the right strategy. Our team partners closely
          with every client to understand their unique challenges, environment,
          and long-term goals. Together, we design tailored strategies that
          focus on prevention, safety, and sustainability. Whether it’s
          protecting homes, ensuring compliance for businesses, or safeguarding
          large facilities, we provide actionable insights and structured plans
          that deliver measurable results. With our consultative approach, you
          don’t just get a service—you gain a trusted partner committed to your
          success.
        </p>

        {/* Boxes area */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 lg:gap-6 mt-12 md:mt-20">
          {boxes.map((box) => (
            <Link href={`/${box.link}`} key={box.id}>
              <div className="bg-gradient-to-b from-[#282CC4] to-[#00023A] rounded-3xl px-6 py-10 sm:px-3 lg:px-10 group h-full flex flex-col justify-between">
                <div>
                  <h4 className="text-[#48C4FF] text-center text-xl md:text-lg xl:text-xl font-semibold">
                    {box.heading}
                  </h4>
                  <p className="text-white text-center mt-2 text-lg lg:text-base xl:text-lg">
                    {box.desc}
                  </p>
                </div>
                <Image
                  src="/Images/arrow.svg"
                  alt="arrow"
                  width={30}
                  height={30}
                  className="mx-auto mt-5 group-hover:translate-x-2 ease-in-out duration-300"
                />
              </div>
            </Link>
          ))}
        </div>

        {/* Services section */}
        <div className="mt-16 md:mt-20">
          <h2 className="text-center text-3xl font-bold text-[#2F3293]">
            OUR SERVICES
          </h2>
          <p className="text-center mt-4 sm:mt-6 text-lg max-w-3xl mx-auto">
            Trusted pest control designed for homes and businesses. We combine
            expert strategies with proven techniques. Safe, eco-friendly
            solutions that deliver lasting protection.
          </p>
        </div>
        <Services />
      </div>
    </div>
  );
}

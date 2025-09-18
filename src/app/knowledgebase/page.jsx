import React from "react";

const tab = [
  {
    tab: "Cockroach",
    id: "cockroach",
  },
  {
    tab: "Bed Bug",
    id: "bedbug",
  },
  {
    tab: "Termite",
    id: "termite",
  },
  {
    tab: "Bird",
    id: "bird",
  },
  {
    tab: "Mosquito",
    id: "mosquito",
  },
  {
    tab: "Fly",
    id: "fly",
  },
  {
    tab: "Rodent",
    id: "rodent",
  },
  {
    tab: "Ant",
    id: "ant",
  },
];
export default function page() {
  return (
    <div className="w-full mb-80">
      <div className="w-full md:w-[80%] lg:w-[60%] mx-auto relative px-4">
        <h2 className="text-[#2F3293] text-3xl sm:text-4xl lg:text-5xl text-center font-bold mt-10 sm:mt-20">
          Knowledge Base – Orion Pest Control
        </h2>
        <h3 className="text-black text-xl text-center mt-16 font-bold">
          How We Approach Pests
        </h3>
        <p className="mt-4 text-center">
          We follow Integrated Pest Management (IPM): prevent first (sanitation,
          exclusion, habitat changes), then monitor, and only then treat—with
          the least-risk option that still solves the problem.
        </p>
      </div>
      {/* Tab section */}
      <div className="bg-[#ED1C26] w-full p-8 mt-20">
        <ul className="w-[60%] mx-auto flex items-center justify-evenly gap-3">
          {tab.map((tab, index) => (
            <li
              key={index}
              id={tab.id}
              className="text-white font-semibold text-md cursor-pointer"
            >
              {tab.tab}
            </li>
          ))}
        </ul>
      </div>
      
    </div>
  );
}

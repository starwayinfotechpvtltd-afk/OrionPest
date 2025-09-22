import React from "react";
import branches from "../branchesData.json";
import { FaPhone } from "react-icons/fa6";

// Generate paths for all branches
export async function generateStaticParams() {
    return Object.keys(branches).map((slug) => ({ slug }));
  }
  
export default function BranchPage({ params }) {
    const branch = branches[params.slug];

    if (!branch) {
      return <p className="text-center mt-10">Branch not found</p>;
    }

  return (
    <div className="w-full">
      <div className="w-full md:w-[80%] lg:w-[60%] mx-auto relative px-4">
        <h2 className="text-[#2F3293] text-3xl sm:text-4xl lg:text-5xl text-center font-bold mt-10 sm:mt-20">
          {branch.heading}
        </h2>
        <div className="mt-10 mb-60">
          {branch.content.map((para, index) => (
            <p key={index}>{para}</p>
          ))}
          {branch.mobile && (
            <button
              className="flex items-center bg-[#FEF200] py-3 px-5 rounded-2xl mx-auto mt-20 cursor-pointer"
              style={{
                boxShadow: "rgba(0, 0, 0, 0.3) 4px 4px 2px",
              }}
            >
              <FaPhone />
              {branch.mobile}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

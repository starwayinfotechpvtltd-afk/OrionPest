import React from "react";
import Image from "next/image";

export default function page() {
  return (
    <div className="w-full">
      <div className="w-[60%] mx-auto relative">
        <h2 className="text-[#2F3293] text-5xl text-center font-bold mt-20">
          Bed Bug Control Services
        </h2>
        <h3 className="text-center text-[#0094DA] text-4xl font-bold mt-3">
          Say Goodbye to Bed Bug Infestations
        </h3>
        <div className="flex justify-between items-center mt-10">
          <p className="w-[50%]">
            Bed bugs are a nightmare for homeowners and travelers alike, feeding
            on blood and leaving behind itchy, red welts. They are master
            hiders, often found in mattresses, furniture, and cracks in the
            walls, making them incredibly difficult to eradicate without
            professional intervention. Our Bed Bug Control Service offers a
            comprehensive and effective solution for quick, safe, and
            long-lasting relief.
          </p>
          <Image
            src="/Images/bugs/bedbug1.svg"
            alt="bedbug"
            height={250}
            width={250}
          />
        </div>
        <div>
          <h3 className="text-[#0094DA] text-4xl font-bold mt-3">
            Why Bed Bug Control is Important
          </h3>
          <ul className="list-disc ml-8 mt-2 flex flex-col gap-3">
            <li>
              <span className="font-bold">
                Cause severe itching and discomfort:
              </span>{" "}
              Bed bug bites can lead to incessant scratching, which may result
              in secondary skin infections.
            </li>
            <li>
              <span className="font-bold">Trigger allergic reactions:</span>{" "}
              Some individuals may experience more severe allergic reactions to
              bed bug bites.
            </li>
            <li>
              <span className="font-bold">Spread rapidly:</span> A single
              pregnant female can start a full-blown infestation in a short
              period, spreading from one room to another.
            </li>
            <li>
              <span className="font-bold">Affect mental health:</span> The
              stress and anxiety associated with a bed bug infestation can
              significantly impact sleep and overall well-being.
            </li>
          </ul>
        </div>
        <Image src="/Images/bugs/bedbug2.png" width={400} height={100} alt="bedbug" className="mt-2 mx-auto"/>

        {/* Approach */}
        <div className="mt-8">
          <h3 className="text-[#0094DA] text-4xl font-bold mt-3">
            Our Approach
          </h3>
          <p className="font-bold text-lg mt-2">
            We follow a thorough, multi-step process to eliminate bed bugs from
            your home:
          </p>
          <ul className="list-disc ml-8 mt-2 flex flex-col gap-3">
            <li>
              <span className="font-bold">Inspection:</span> Our experts conduct
              a detailed inspection to locate all bed bug hiding spots,
              including mattresses, bed frames, furniture, and even electrical
              outlets.
            </li>
            <li>
              <span className="font-bold">Treatment:</span> We use a combination
              of methods, such as heat treatment, which is highly effective in
              killing all life stages of bed bugs, and targeted application of
              insecticides to residual areas.
            </li>
            <li>
              <span className="font-bold">Crack & Crevice Treatment:</span>We
              treat all potential harborage areas to ensure no bed bugs are left
              behind.
            </li>
            <li>
              <span className="font-bold">Monitoring & Prevention:</span>We
              provide you with valuable tips on how to prevent future
              infestations and may schedule follow-up visits to ensure the
              problem is completely resolved.
            </li>
          </ul>
        </div>

        {/* Pros */}
        <div className="mt-8">
          <h3 className="text-[#0094DA] text-4xl font-bold mt-3">Pros</h3>
          <ul className="list-disc ml-8 mt-2 flex flex-col gap-3">
            <li>
              <span className="font-bold">Highly effective:</span> Our
              treatments are designed to eliminate bed bugs at all life stages,
              including eggs.
            </li>
            <li>
              <span className="font-bold">Safe for your home:</span> We use
              professional-grade products and techniques that are safe for your
              family and pets when applied correctly.
            </li>
            <li>
              <span className="font-bold">Minimal disruption:</span> Our methods
              are designed to be as minimally disruptive to your daily life as
              possible.
            </li>
            <li>
              <span className="font-bold">Comprehensive solution:</span> We
              don't just kill the bugs you see; we target the entire infestation
              to prevent a recurrence.
            </li>
          </ul>
        </div>
      </div>
      {/* Yellow section */}
      <div className="w-full mt-20 border-t-8 border-[#2F3293] bg-linear-to-br from-[#FFF300] to-[#FEBA00] pb-80 relative">
        <div className="w-[60%] mx-auto">
          <h2 className="text-[#2F3293] text-5xl text-center font-bold mt-10">
            Why Choose Orion for Bed Bug Control?
          </h2>
          <ul className="list-disc ml-8 mt-10 flex flex-col gap-3">
            <li className="text-lg">
              <span className="font-bold">Eco-Friendly Methods:</span> Safe,
              odorless, and pet-friendly treatments.
            </li>
            <li className="text-lg">
              <span className="font-bold">Trained Technicians:</span> Skilled
              team with years of expertise.
            </li>
            <li className="text-lg">
              <span className="font-bold">Custom Plans:</span> Tailored
              solutions for homes, restaurants, and offices.
            </li>
            <li className="text-lg">
              <span className="font-bold">Trusted Brand:</span> Serving clients
              across India since 1998.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

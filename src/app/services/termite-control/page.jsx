import React from "react";
import Image from "next/image";

export default function page() {
  return (
    <div className="w-full">
      <div className="w-[60%] mx-auto relative">
        <h2 className="text-[#2F3293] text-5xl text-center font-bold mt-20">
          Termite Control Services
        </h2>
        <h3 className="text-center text-[#0094DA] text-4xl font-bold mt-3">
          Say Goodbye to Termite Infestations
        </h3>
        <div className="flex justify-between items-center mt-10">
          <p className="w-[50%]">
            Termites, often called "silent destroyers," can cause immense and
            costly damage to a home's structure. These wood-eating pests can go
            unnoticed for years, hollowing out wooden beams, flooring, and
            furniture from the inside out. A small problem can quickly become a
            severe and dangerous threat to your property's integrity. Our
            Termite Control Service provides a proactive, long-lasting solution
            to protect your most valuable asset.
          </p>
          <Image
            src="/Images/bugs/termite1.svg"
            alt="cockroach"
            height={250}
            width={250}
          />
        </div>
        <div>
          <h3 className="text-[#0094DA] text-4xl font-bold mt-3">
          Why Termite Control is Important?
          </h3>
          <ul className="list-disc ml-8 mt-2 flex flex-col gap-3">
            <li>
              <span className="font-bold">
              Prevent Expensive Structural Damage:
              </span>{" "}
              Termites can silently compromise the very foundation and framework of your home, leading to major repair costs.
            </li>
            <li>
              <span className="font-bold">Protect Your Property Value:</span>{" "}
              A termite infestation can significantly devalue a property, making it difficult to sell or rent.
            </li>
            <li>
              <span className="font-bold">Avoid Health and Safety Risks:</span> Termite damage can lead to compromised electrical wiring and weakened structures that may pose a risk to your family.
            </li>
            <li>
              <span className="font-bold">Stop Rapid Spread:</span>Termite colonies can grow to millions of individuals, quickly spreading from a single entry point to other parts of your home and even to neighboring properties.
            </li>
          </ul>
        </div>
        <Image
          src="/Images/bugs/termite2.png"
          width={360}
          height={100}
          alt="cockroach"
          className="mt-2 mx-auto"
        />

        {/* Approach */}
        <div className="mt-8">
          <h3 className="text-[#0094DA] text-4xl font-bold mt-3">
            Our Approach
          </h3>
          <p className="font-bold text-lg mt-2">
          We follow a scientific and highly effective process to eliminate termites and protect your property:
          </p>
          <ul className="list-disc ml-8 mt-2 flex flex-col gap-3">
            <li>
              <span className="font-bold">Inspection:</span> Our certified professionals conduct a thorough inspection to identify the type of termite, the extent of the infestation, and all entry points and active tunnels.
            </li>
            <li>
              <span className="font-bold">Customized Treatment:</span>We use a combination of proven methods, including liquid termiticides to create a protective barrier around your property and baiting systems to eliminate the entire colony, including the queen.
            </li>
            <li>
              <span className="font-bold">Crack & Crevice Treatment:</span>We treat and seal all cracks, voids, and crevices in your foundation and walls to prevent future entry.
            </li>
            <li>
              <span className="font-bold">Monitoring & Prevention:</span>We provide post-treatment monitoring and guidance on how to prevent future infestations, such as controlling moisture and removing wood-to-soil contact.
            </li>
          </ul>
        </div>

        {/* Pros */}
        <div className="mt-8">
          <h3 className="text-[#0094DA] text-4xl font-bold mt-3">Pros</h3>
          <ul className="list-disc ml-8 mt-2 flex flex-col gap-3">
            <li>
              <span className="font-bold">Long-Term Protection:</span> Our treatments provide a durable, long-lasting barrier to prevent future termite attacks.
            </li>
            <li>
              <span className="font-bold">Proven Effectiveness:</span>We use industry-leading products and techniques that are scientifically proven to be effective against termites.
            </li>
            <li>
              <span className="font-bold">Minimally Invasive:</span> Our methods are designed to be as non-disruptive as possible to your daily life.
            </li>
            <li>
              <span className="font-bold">Guaranteed Results:</span> We stand behind our work with a service warranty, ensuring your home remains termite-free.
            </li>
          </ul>
        </div>
      </div>
      {/* Yellow section */}
      <div className="w-full mt-20 border-t-8 border-[#2F3293] bg-linear-to-br from-[#FFF300] to-[#FEBA00] pb-80 relative">
        <div className="w-[60%] mx-auto">
          <h2 className="text-[#2F3293] text-5xl text-center font-bold mt-10">
          Why Choose Orion for Termite Control?
          </h2>
          <ul className="list-disc ml-8 mt-10 flex flex-col gap-3">
            <li className="text-lg">
              <span className="font-bold">Eco-Friendly Methods:</span> Safe, odorless, and pet-friendly treatments.
            </li>
            <li className="text-lg">
              <span className="font-bold">Trained Technicians:</span> Skilled team with years of expertise.
            </li>
            <li className="text-lg">
              <span className="font-bold">Custom Plans:</span> Tailored solutions for homes, restaurants, and offices.
            </li>
            <li className="text-lg">
              <span className="font-bold">Trusted Brand:</span> Serving clients across India since 1998.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

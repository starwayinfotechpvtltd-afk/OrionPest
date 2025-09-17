import React from "react";
import Image from "next/image";

export default function page() {
  return (
    <div className="w-full">
      <div className="w-[60%] mx-auto">
        <h2 className="text-[#2F3293] text-5xl text-center font-bold mt-20">
          Cockroach Control Services
        </h2>
        <h3 className="text-center text-[#0094DA] text-4xl font-bold mt-3">
          Say Goodbye to Cockroach Infestations
        </h3>
        <div className="flex justify-between items-center">
          <p className="w-[50%]">
            Cockroaches are one of the most common and persistent household
            pests. Known for contaminating food, spreading harmful bacteria, and
            triggering allergies, they breed rapidly and are experts at hiding
            in cracks and crevices. A small problem can quickly escalate into a
            full-blown infestation without professional intervention. Our
            Cockroach Control Service provides a fast, safe, and effective
            solution for long-lasting relief.
          </p>
          <Image
            src="/Images/bugs/cockroach1.svg"
            alt="cockroach"
            height={300}
            width={300}
          />
        </div>
        <div>
          <h3 className="text-[#0094DA] text-4xl font-bold mt-3">
            Why Cockroach Control is Important
          </h3>
          <ul className="list-disc ml-8 mt-2">
            <li>
            <span className="font-bold">Spread of Diseases:</span> Cockroaches are known carriers of harmful
              bacteria such as E. coli and Salmonella, which can cause food
              poisoning and other illnesses.
            </li>
            <li>
            <span className="font-bold">Allergen and Asthma Triggers:</span> Their droppings and shed skin can
              trigger allergic reactions and asthma attacks, especially in
              children and individuals with respiratory issues.
            </li>
            <li>
            <span className="font-bold">Contamination:</span> They contaminate food, utensils, and food
              preparation surfaces, posing a significant health risk.
            </li>
            <li>
            <span className="font-bold">Rapid Reproduction:</span> Cockroaches reproduce at an alarming rate,
              turning a minor sighting into a severe infestation in a matter of
              weeks.
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-center">
          <Image
            src="/Images/bugs/cockroach2.png"
            height={200}
            width={200}
            alt="cockroach"
          />
          <Image
            src="/Images/bugs/cockroach3.png"
            height={300}
            width={300}
            alt="cockroach"
          />
        </div>

        {/* Approach */}
        <div className="mt-8">
          <h3 className="text-[#0094DA] text-4xl font-bold mt-3">
            Our Approach
          </h3>
          <p className="font-bold text-lg mt-2">
            We follow a systematic and scientific approach to effectively
            eliminate cockroaches from your property:
          </p>
          <ul className="list-disc ml-8 mt-2 flex flex-col gap-3">
            <li>
              <span className="font-bold">Inspection:</span> Our trained
              specialists conduct a thorough inspection to identify the species
              of cockroach, the extent of the infestation, and locate their
              primary hiding spots and breeding sources.
            </li>
            <li>
              <span className="font-bold">Targeted Treatment:</span> We use a
              combination of advanced treatments, including eco-friendly gel
              baits placed in targeted, hard-to-reach areas and odorless sprays
              in hidden corners and crevices where cockroaches hide.
            </li>
            <li>
              <span className="font-bold">Crack & Crevice Treatment:</span> We
              seal and treat all potential entry points and hiding spaces to
              prevent cockroaches from re-establishing themselves.
            </li>
            <li>
              <span className="font-bold">Monitoring & Prevention:</span> We
              provide you with valuable advice on sanitation practices and other
              preventative measures. Follow-up visits are scheduled as needed to
              ensure complete eradication and long-term protection.
            </li>
          </ul>
        </div>

        {/* Pros */}
        <div className="mt-8">
          <h3 className="text-[#0094DA] text-4xl font-bold mt-3">Pros</h3>
          <p className="font-bold text-lg mt-2">
            We follow a systematic and scientific approach to effectively
            eliminate cockroaches from your property:
          </p>
          <ul className="list-disc ml-8 mt-2 flex flex-col gap-3">
            <li>
            <span className="font-bold">Long-Lasting Protection:</span> Our combination of gel and spray
              treatments provides a durable barrier against future infestations.
            </li>
            <li>
            <span className="font-bold">Safe for Your Family:</span> We use professional-grade products that are
              safe for your family, pets, and the environment when applied
              correctly.
            </li>
            <li>
            <span className="font-bold">Clean and Hassle-Free:</span> Our treatments are odorless, stain-free,
              and designed to cause minimal disruption to your daily routine.
            </li>
            <li>
            <span className="font-bold">Effective for All Properties:</span> Our services are tailored to be
              effective for both residential and commercial spaces, from
              apartments to restaurants.
            </li>
          </ul>
        </div>
      </div>
      {/* Yellow section */}
      <div className="w-full mt-20 border-t-8 border-[#2F3293] bg-linear-to-br from-[#FFF300] to-[#FEBA00] pb-80 relative">
        <div className="w-[60%] mx-auto">
          <h2 className="text-[#2F3293] text-5xl text-center font-bold mt-10">
            Why Choose Orion for Cockroach Control?
          </h2>
          <ul className="list-disc ml-8 mt-10 flex flex-col gap-3">
            <li className="text-lg">
              Eco-Friendly Methods: Safe, odorless, and pet-friendly treatments.
            </li>
            <li className="text-lg">Trained Technicians: Skilled team with years of expertise.</li>
            <li className="text-lg">
              Custom Plans: Tailored solutions for homes, restaurants, and
              offices.
            </li>
            <li className="text-lg">Trusted Brand: Serving clients across India since 1998.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

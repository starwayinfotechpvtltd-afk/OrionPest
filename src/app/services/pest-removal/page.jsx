import React from "react";

export default function page() {
  return (
    <div className="w-full pb-80">
      <div className="w-[90%] sm:w-[80%] md:w-[60%] mx-auto">
        <h2 className="text-4xl text-center text-[#2F3293] font-bold mt-20">Fast Pest Removal</h2>
        <p className="mt-10">
          When pests strike, you need them gone fast. Our expert team delivers
          rapid response and quick solutions to restore comfort and safety in
          your space. Using advanced equipment and targeted treatments, we
          ensure pests are removed efficiently and effectively.
        </p>
        <h3 className="text-3xl text-[#2F3293] font-bold mt-10">Key Features</h3>
        <ul className="list-disc ml-8 mt-2">
            <li>Immediate inspection and treatment.</li>
            <li>Skilled technicians trained for quick action.</li>
            <li>Proven methods for both minor and major infestations.</li>
        </ul>
        <h3 className="text-3xl text-[#2F3293] font-bold mt-10">Benefits</h3>
        <ul className="list-disc ml-8 mt-2">
            <li>Saves time with same-day service options.</li>
            <li>Quick relief from discomfort and health risks.</li>
            <li>Prevents further damage by tackling pests early.</li>
        </ul>
      </div>
    </div>
  );
}

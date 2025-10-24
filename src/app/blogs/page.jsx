import React from "react";
import Image from "next/image";

export default function page() {
  return (
    <div className="w-full pb-60">
      <div className="w-[95%] md:w-[80%] mx-auto pb-20">
        <h2 className="text-[#2F3293] text-center text-4xl md:text-5xl font-bold mt-20 uppercase">
          Blogs
        </h2>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-[#2F3293] rounded-t-2xl overflow-hidden shadow-lg transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-102"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src="/Images/img2.png"
                  alt={`blog${index}`}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Text Section */}
              <p className="p-4 bg-amber-300 w-full text-center font-medium">
                Blog Title {index + 1}
              </p>
            </div>
          ))}
        </div>
        {/* Form area */}
        <div className="w-[90%] md:w-[600px] bg-[#2F3293] rounded-3xl mx-auto p-10 mt-28">
          <h2 className="text-4xl text-white font-bold text-center mb-3">
            Contact Us
          </h2>
          <h2 className="text-4xl text-white font-bold text-center mb-8">
            DUMMY TEXT
          </h2>
          <form action="" className="flex flex-col gap-5">
            <input
              type="text"
              className="bg-white p-3 rounded"
              placeholder="Your name"
            />
            <input
              type="text"
              className="bg-white p-3 rounded"
              placeholder="Your email"
            />
            <input
              type="text"
              className="bg-white p-3 rounded"
              placeholder="Your phone"
            />
            <select name="" id="" className="bg-white p-3 rounded">
            <option value="Select Service" selected disabled>Select Service</option>
            <option value="Cockroach Control">Cockroach Control</option>
            <option value="Bed bugs Control">Bed bugs Control</option>
            <option value="Termite Control">Termite Control</option>
            <option value="Mosquito Control">Mosquito Control</option>
            <option value="Flies Control">Flies Control</option>
            <option value="Rodent Control">Rodent Control</option>
            <option value="Bird Control">Bird Control</option>
            <option value="Ant Control">Ant Control</option>
            <option value="Residential Control">Residential Control</option>
            <option value="Commercial Control">Commercial Control</option>
            <option value="Herbal Pest Control">Herbal Pest Control</option>
            <option value="Fumigation Control">Fumigation Control</option>
          </select>
          <button className="bg-[#FEBA00] px-10 py-2 rounded-xl font-semibold max-w-44 w-52 self-center text-[17px]">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";

const certifictions = [
  {
    id: 1,
    image: "/Images/certifications/img1.png",
  },
  {
    id: 2,
    image: "/Images/certifications/img2.png",
  },
  {
    id: 3,
    image: "/Images/certifications/img3.png",
  },
  {
    id: 4,
    image: "/Images/certifications/img4.png",
  },
];

const clients = [
  {
    id: 1,
    image: "/Images/clients/img1.png",
  },
  {
    id: 2,
    image: "/Images/clients/img2.png",
  },
  {
    id: 3,
    image: "/Images/clients/img3.png",
  },
  {
    id: 4,
    image: "/Images/clients/img4.png",
  },
  {
    id: 5,
    image: "/Images/clients/img5.png",
  },
  {
    id: 6,
    image: "/Images/clients/img6.png",
  },
  {
    id: 7,
    image: "/Images/clients/img7.png",
  },
  {
    id: 8,
    image: "/Images/clients/img8.png",
  },
  {
    id: 9,
    image: "/Images/clients/img9.png",
  },
  {
    id: 10,
    image: "/Images/clients/img10.png",
  },
  {
    id: 11,
    image: "/Images/clients/img11.png",
  },
  {
    id: 12,
    image: "/Images/clients/img12.png",
  },
  {
    id: 13,
    image: "/Images/clients/img13.png",
  },
  {
    id: 14,
    image: "/Images/clients/img14.png",
  },
  {
    id: 15,
    image: "/Images/clients/img15.png",
  },
];
export default function Home() {
  return (
    <div className="w-full">
      <div className="w-[95%] md:w-[80%] mx-auto">
        <h2 className="text-[#2F3293] text-3xl md:text-5xl font-bold font-sans mx-auto text-center mt-20">
          We Are The Best <br /> Pest Control Company in India
        </h2>
        <h5 className="text-2xl text-center text-[#0094DA] mt-5 font-bold">
          Orion Pest Solutions Pvt. Ltd
        </h5>
        <p className="text-center mt-5 text-2xl">
          The most trusted and reliable company providing the best pest control
          solutions in India.
        </p>

        <p className="text-center mt-5 w-[60%] mx-auto text-lg">
          Established in 1998, we are constantly pushing the envelope with
          innovations in the niche industry. Today, we take pride in identifying
          ourselves as the pioneers of the pest management industry.
        </p>

        <p className="text-center mt-5 text-lg">
          Boasting of an expansive pan-India presence, we operate in{" "}
          <span className="font-bold text-black">
            Delhi, Mumbai, Bangalore, Chennai, Hyderabad, Pune, Ahmedabad,
            Jaipur, Indore, Kolhapur, Kodaikanal, Dehradun, Mysore, Coimbatore,
            Vijayawada, Bilaspur, Puducherry, Aurangabad, Burdwan,
            Visakhapatnam, Guwahati, Ranchi, Dhanbad, Siliguri, Nagpur,
            Bhubaneswar, Kerala, Haldia, Jamshedpur, Raipur, Lucknow, Patna,
            Cochin, Mangalore, Trivandrum and Daman, including Bhutan and Nepal.
          </span>
        </p>
      </div>

      {/* Blue area */}
      <div className="bg-linear-to-br from-cyan-500 to-blue-500 w-full mt-20 p-10 mb-20 border-b-8 border-blue-800">
        <div className="md:w-[80%] flex justify-evenly mx-auto">
          <p className="w-full md:w-[50%] text-white text-justify">
            Our vast experience, helmed by state-of-the-art technology, keeps
            you protected from every kind of pest menace. At Orion Pest
            Solutions Pvt. Ltd., we relentlessly strive to deliver the best pest
            control services in India, combining proven expertise with modern,
            science-backed techniques. <br></br> We provide prompt, affordable,
            and efficient pest control solutions designed to eliminate
            infestations quickly while ensuring long-term protection. Our
            comprehensive range of services covers Commercial Pest Control,
            Residential Pest Control, Herbal Pest Control, Termite Control,
            Mosquito Control, Rodent Control, and more. Whether it is your home,
            office, warehouse, or industrial space, we are available 24/7 at
            your service, offering tailor-made solutions to suit every
            requirement. <br></br>
            Headquartered in Kolkata, Orion has steadily grown to become one of
            the most trusted pest management companies in India, with a strong
            presence across multiple cities. Over the years, we have
            successfully catered to residential societies, corporate offices,
            hospitals, hotels, educational institutions, and government
            establishments—building long-term relationships with clients who
            value our professionalism. <br></br> What sets us apart is our team
            of highly trained experts who understand the root cause of
            infestations and eliminate pests at the source. We don’t just
            control pests; we create safe, hygienic, and pest-free environments
            that give you peace of mind. Most importantly, we strictly use safe,
            eco-friendly, and government-approved chemicals to protect your
            health, property, and the environment. <br></br> At Orion, we
            believe pest control is not just about extermination—it’s about
            prevention, protection, and lasting peace of mind. Our mission is
            simple: to safeguard your surroundings, enhance your quality of
            life, and make your spaces healthier and more comfortable. <br></br>{" "}
            So, if you are looking for India’s most reliable pest control
            partner, look no further. With Orion Pest Solutions Pvt. Ltd.,
            you’re not just hiring a service—you’re choosing a lifelong shield
            against pests.
          </p>
          <Image
            src="/Images/img1.png"
            alt="img1"
            height={250}
            width={250}
            className="hidden md:block"
          />
        </div>
      </div>

      {/* Grid area */}
      <div className="w-full p-10">
        <div className="md:flex justify-between items-center gap-4 md:w-[60%] mx-auto">
          <div className="w-96 flex flex-col gap-2">
            <h3 className="text-2xl font-bold text-[#2F3293]">
              PAN INDIA SERVICES
            </h3>
            <p>
              Orion Pest Solutions Private Limited provides a range of pest
              control services in more than 40 locations in India including
              Nepal and Bhutan.
            </p>
          </div>
          <div className="w-96 flex flex-col gap-2 mt-10 md:mt-0">
            <h3 className="text-2xl font-bold text-[#2F3293] md:text-end">
              COST EFFECTIVE SOLUTIONS
            </h3>
            <p className="md:text-end">
              Orion Pest Solutions Private Limited provides a range of pest
              control services in more than 40 locations in India including
              Nepal and Bhutan.
            </p>
          </div>
        </div>
        <div className="md:flex justify-between items-center gap-4 md:w-[60%] mx-auto mt-9">
          <div className="w-96 flex flex-col gap-2">
            <h3 className="text-2xl font-bold text-[#2F3293]">
              GUARANTEED RESULTS
            </h3>
            <p className="">
              With our indepth experience over 18 years, we continue to enhance
              our operational excellence, safety, capability, customer service
              and innovations.
            </p>
          </div>
          <div className="w-96 flex flex-col gap-2 mt-10 md:mt-0">
            <h3 className="text-2xl font-bold text-[#2F3293] md:text-end">
              Home
            </h3>
            <p className="md:text-end">
              RESIDENTIAL PEST CONTROL SERVICES COMMERCIAL PEST CONTROL SERVICES
              FUMIGATION PEST CONTROL SERVICES TERMITE PEST CONTROL SERVICES
            </p>
          </div>
        </div>
      </div>

      {/* Yellow area */}
      <div className="bg-linear-to-br from-[#FFF300] to-[#FEBA00] pb-48 relative mt-24">
        <div className="w-full md:w-[60%] mx-auto px-10">
          <h2 className="text-2xl md:text-4xl font-bold uppercase text-[#2F3293] pt-16 pb-12 text-center">
            Membership & Certification
          </h2>
          <div className="flex gap-3 items-center justify-center">
            {certifictions.map((image) => (
              <div className="w-[90px] h-[90px] md:w-[120px] md:h-[120px] relative" key={image.id}>
                <Image
                  src={image?.image}
                  alt="img1"
                  fill
                  className="transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
                />
              </div>
            ))}
          </div>
          <div className="mt-12">
            <h4 className="text-center text-3xl font-bold uppercase text-[#2F3293]">
              Our clients
            </h4>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-3 mt-10">
              {clients.map((client) => (
                <Image
                  src={client.image}
                  height={200}
                  width={200}
                  alt={`img${client.id}`}
                  className="transitio duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
                  key={client.id}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

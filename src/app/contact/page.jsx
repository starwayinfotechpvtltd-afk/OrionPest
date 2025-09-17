import React from "react";

export default function page() {
  return (
    <div className="w-full flex flex-col justify-center items-center py-20 px-4 md:px-0 pb-80">
      <h3 className="font-bold text-2xl text-center">Contact us</h3>
      <p className="text-center mt-2 max-w-xl">
        Kindly take a moment to fill in the form so that we can provide you with
        the best possible solution.
      </p>

      <form
        action=""
        className="mt-10 flex flex-col justify-center items-center w-full max-w-2xl"
      >
        <div className="bg-gradient-to-br from-[#FFF300] to-[#FEBA00] p-6 md:p-10 rounded-2xl w-full">
          {/* Name */}
          <input
            type="text"
            placeholder="Name"
            className="py-2 px-5 w-full bg-white mb-3 rounded-3xl"
            style={{
              boxShadow:
                "rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset",
            }}
          />

          {/* Email */}
          <input
            type="text"
            placeholder="Email"
            className="py-2 px-5 w-full bg-white mb-3 rounded-3xl"
            style={{
              boxShadow:
                "rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset",
            }}
          />

          {/* Telephone + Postcode */}
          <div className="flex flex-col md:flex-row items-center gap-3 w-full">
            <input
              type="text"
              placeholder="Telephone"
              className="py-2 px-5 w-full bg-white rounded-3xl"
              style={{
                boxShadow:
                  "rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset",
              }}
            />
            <input
              type="text"
              placeholder="Postcode"
              className="py-2 px-5 w-full bg-white rounded-3xl"
              style={{
                boxShadow:
                  "rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset",
              }}
            />
          </div>

          {/* Radio buttons */}
          <div className="mt-6">
            <p className="font-bold">Type of establishment</p>
            <label className="block mt-2">
              <input type="radio" name="establishment" className="mr-2" />
              Residential
            </label>
            <label className="block mt-2">
              <input type="radio" name="establishment" className="mr-2" />
              Commercial
            </label>
          </div>

          {/* Inquiry */}
          <p className="mt-6">Inquiry...</p>
          <textarea
            name="inquiry"
            className="bg-white w-full rounded-xl mt-3 min-h-[120px] p-3"
            style={{
              boxShadow:
                "rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset",
            }}
          ></textarea>
        </div>

        {/* Submit button */}
        <button className="bg-[#FFF300] py-2 px-10 md:px-20 mt-6 mx-auto rounded font-bold cursor-pointer">
          Submit
        </button>
      </form>
    </div>
  );
}

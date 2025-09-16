import React from "react";

export default function page() {
  return (
    <div className="w-full flex flex-col justify-center items-center py-32">
      <h3 className="font-bold text-2xl">Contact us</h3>
      <p>
        Kindly take a moment to fill in the form so that we can provide you with
        the best possible solution.
      </p>
      <form
        action=""
        className="mt-10 flex flex-col justify-center items-center"
      >
        <div className="bg-linear-to-br from-[#FFF300] to-[#FEBA00] p-10 rounded-2xl">
          <input
            type="text"
            placeholder="Name"
            className="py-2 px-5 w-full bg-white mb-3 rounded-3xl"
            style={{
              boxShadow:
                "rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset",
            }}
          />
          <br />
          <input
            type="text"
            placeholder="Email"
            className="py-2 px-5 w-full bg-white mb-3 rounded-3xl"
            style={{
                boxShadow:
                  "rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset",
              }}
          />
          <div className="flex items-center gap-5">
            <input
              type="text"
              placeholder="Telephone"
              className="py-2 px-5 w-full bg-white mb-3 rounded-3xl"
              style={{
                boxShadow:
                  "rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset",
              }}
            />
            <input
              type="text"
              placeholder="Postcode"
              className="py-2 px-5 w-full bg-white mb-3 rounded-3xl"
              style={{
                boxShadow:
                  "rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset",
              }}
            />
          </div>
          <div className="mt-6">
            <p className="font-bold">Type of establishment</p>
            <input
              type="radio"
              name="Residencil"
              id="Residencil"
              className="mr-2"
            />
            <label htmlFor="Residencil">Residencil</label>
            <br />
            <input
              type="radio"
              name="Commercial"
              id="Commercial"
              className="mr-2"
            />
            <label htmlFor="Commercial">Commercial</label>
          </div>
          <p className="mt-6">Inquiry...</p>
          <textarea
            name="inquiry"
            id=""
            className="bg-white w-full rounded-xl mt-3 min-h-[100px]"
            style={{
                boxShadow:
                  "rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset",
              }}
          ></textarea>
        </div>
        <button className="bg-[#FFF300] py-2 px-20 mt-6 mx-auto rounded font-bold cursor-pointer">
          Submit
        </button>
      </form>
    </div>
  );
}

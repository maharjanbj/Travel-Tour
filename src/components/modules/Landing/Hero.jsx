import React from "react";
import Banner from "../../../assets/images/slider-banner-1.jpg";
import Nav from "../../partials/Nav";

const Hero = () => {
  return (
    <section className="bg-slate-100 h-auto w-full">
        <div
          className={`w-full h-full text-white bg-cover bg-center bg-no-repeat lg:relative`}
          style={{
            backgroundImage: `
            linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
            url(${Banner})`,
          }}
        >
          <Nav />
          <div id='section' className="h-full w-full lg:mb-32 flex justify-center items-center">
          {/* lg:py-40 py-20 */}
            <div className="w-full lg:py-36 py-20 flex justify-center items-center flex-col text-center lg:w-[80%] ">
              <div className="font-black lg:text-5xl xl:text-[80px] text-4xl">
                TRAVELLING AROUND THE WORLD
              </div>
              <div className="font-normal text-base pt-4 pb-9">
                Taciti quasi, sagittis excepteur hymenaeos, id temporibus hic
                proident ullam, eaque donec delectus tempor consectetur nunc,
                purus congue? Rem volutpat sodales! Mollit. Minus exercitationem
                wisi.
              </div>
              <button className="font-semibold lg:text-base text-sm bg-red-500 hover:bg-blue-700 cursor-pointer lg:py-4 lg:px-6 py-2 px-4">
                CONTINUE READING
              </button>
            </div>
          </div>

          <div id="section" className="h-auto w-full flex justify-center items-center lg:absolute lg:-bottom-[142px] lg:left-0 lg:right-0">
            <div className="h-full w-full bg-slate-600 text-black drop-shadow-2xl flex justify-center items-center flex-wrap py-12 gap-5">

              <div className="flex flex-col font-normal text-base w-full lg:w-auto md:w-auto p-2">
                <label htmlFor="">Search Destination*</label>
                <input
                  type="text"
                  placeholder="Enter Destination"
                  className="bg-slate-200 lg:p-2 p-1 border-none outline-none text-slate-400"
                />
              </div>
              <div className="flex flex-col font-normal text-base w-full lg:w-auto md:w-auto p-2">
                <label htmlFor="">Pax Number*</label>
                <input
                  type="text"
                  placeholder="No. of People"
                  className="bg-slate-200 lg:p-2 p-1 border-none outline-none text-slate-400"
                />
              </div>
              <div className="flex flex-col font-normal text-base w-full lg:w-auto md:w-auto p-2">
                <label htmlFor="">Checkin Date*</label>
                <input
                  type="date"
                  placeholder="Enter Destination"
                  className="bg-slate-200 lg:p-2 p-1 border-none outline-none text-slate-400"
                />
              </div>
              <div className="flex flex-col font-normal text-base w-full lg:w-auto md:w-auto p-2">
                <label htmlFor="">Checkout Date*</label>
                <input
                  type="date"
                  placeholder="Enter Destination"
                  className="bg-slate-200 lg:p-2 p-1 border-none outline-none text-slate-400"
                />
              </div>
              <button className="font-semibold text-base text-white bg-red-500 hover:bg-blue-700 cursor-pointer lg:px-10 lg:py-2 px-4 py-2">
                INQUIRE NOW
              </button>
            </div>
          </div>
        </div>
    </section>
  );
};

export default Hero;

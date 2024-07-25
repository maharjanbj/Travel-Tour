import React from "react";
import "../../../App.css";
import Banner from "../../../assets/images/inner-banner.jpg";
import pattern from "../../../assets/images/slider-pattern.png";
import Nav from "../../partials/Nav";
import { FaUser } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import Footer from "../../partials/Footer";
import Secondaryblog from "./Secondaryblog";
import Primaryblog from "./Primaryblog";

const Bloglist = () => {
  return (
    <section className="h-[70vh] w-full">
      {/* header */}
      <div
        className={`w-full h-full text-white bg-cover bg-center bg-no-repeat lg:relative mb-20 border-2 border-red-700`}
        style={{
          backgroundImage: `
          linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
          url(${Banner})`,
        }}
      >
        <Nav />

        <div id="section" className="h-full w-full border-2 border-blue-700">
          <div className="h-full w-full flex flex-col justify-center items-center border-2 border-yellow-400">
            <div className="font-black lg:text-5xl xl:text-[80px] text-4xl text-center pb-14">
              Journeys are best measured in new friends
            </div>
            <p className="font-normal text-base pt-4 pb-4 border-t-2 border-b-2 flex items-center gap-6">
              <FaUser /> Demoteam
              <span className="flex items-center gap-6 border-r-2 border-l-2 px-6">
                <FaCalendarAlt /> June 30,2024
              </span>
              <FaMessage /> No Comments
            </p>
          </div>
        </div>

        <div className="w-full lg:absolute -bottom-20 left-0 right-0 border-2 border-green-400">
          <img src={pattern} alt="pattern" className="w-full" />
        </div>
      </div>
      {/* header */}
      {/* contents */}
      <div id="section" className="h-auto w-full bg-slate-300">
        <div className="h-full w-full border-2 border-red-700 flex gap-10">
          {/* first box */}
          <div className="border-2 border-green-700">
            {/* <Primaryblog /> */}
          </div>

          {/* second box */}
          <div className="border-2 border-orange-700">
            {/* <Secondaryblog /> */}
          </div>
          {/* second box */}
        </div>
      </div>
      {/* contents */}
      {/* footer */}
      <Footer />
      {/* footer */}
    </section>
  );
};

export default Bloglist;

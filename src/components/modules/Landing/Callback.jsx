import React, { useState } from "react";
import '../../../assets/css/Callback.css'
import img8 from "../../../assets/images/img8.jpg";
import { FiPhoneCall } from "react-icons/fi";
import { FaPlayCircle } from "react-icons/fa";
import { PiUsersThreeThin } from "react-icons/pi";
import { LuMedal } from "react-icons/lu";
import { PiUserCirclePlus } from "react-icons/pi";
import { CiMap } from "react-icons/ci";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from 'react-countup'

const Callback = () => {
  const [ counter, setCounter ] = useState(false)

  return (
    <section id='section' className="callback-section h-auto w-full relative mb-[100px]">
      <div className="h-full w-full">
        <div className="h-full w-full flex items-center flex-wrap">
          {/* image */}
          <div className="flex lg:basis-[30%] w-full z-20">
            <div className="bg-cover lg:bg-center bg-slate-300 flex justify-center items-center h-[350px] w-full" style={{ backgroundImage: `url(${img8})` }}>
              <FaPlayCircle className="bg-blue-500 text-white lg:text-8xl text-5xl rounded-full" />
            </div>
          </div>
          {/* image */}
          <div className="flex lg:w-[70%] w-full py-10 z-20">
          {/* lg:p-0 */}
            <div className="callback_text-padding">
              <div className="mb-[50px] lg:p-0 px-5 text-white">
                <div className="flex pb-4">
                  <p className="border-b lg:w-24 w-14"></p>
                  <p className='font-bold lg:text-base text-sm'>CALLBACK FOR MORE</p>
                </div>
                <h1 className="lg:text-3xl font-extrabold text-xl pb-4">
                  GO TRAVEL. DISCOVER. REMEMBER US!!
                </h1>
                <p className="font-normal lg:text-base text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Eaque adipiscing, luctus eleifend.
                </p>
              </div>
              {/* content */}
              <ScrollTrigger onEnter={()=> setCounter(true)} onExit={()=> setCounter(false)}>
                <div className="flex items-center flex-col text-white">
                  <div className="flex flex-wrap lg:flex-nowrap justify-center">
                    <div className="flex items-center border md:gap-10 md:p-7 gap-2 p-1">
                      <PiUsersThreeThin className="text-6xl" />
                      <span>
                        <b className="font-black text-2xl">
                          { counter && <CountUp start={0} end={500} duration={1} delay={0} /> }
                          K+
                        </b>
                        <p className="font-normal text-base">Satisfied Clients</p>
                      </span>
                    </div>
                    
                    <div className="flex items-center border md:gap-10 md:p-7 gap-2 p-1 flex-wrap">
                      <LuMedal className="text-6xl" />
                      <span>
                        <b className="font-black text-2xl">
                        { counter && <CountUp start={0} end={250} duration={1} delay={0} /> }
                          K+
                        </b>
                        <p className="font-normal text-base">Satisfied Clients</p>
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap lg:flex-nowrap justify-center">
                    <div className="flex items-center border md:gap-10 md:p-7 gap-2 p-1">
                      <PiUserCirclePlus className="text-6xl" />
                      <span>
                        <b className="font-black text-2xl">
                        { counter && <CountUp start={0} end={15} duration={1} delay={0} /> }
                          K+
                        </b>
                        <p className="font-normal text-base">Satisfied Clients</p>
                      </span>
                    </div>
                    <div className="flex items-center border md:gap-10 md:p-7 gap-2 p-1 flex-wrap">
                      <CiMap className="text-6xl" />
                      <span>
                        <b className="font-black text-2xl">
                        { counter && <CountUp start={0} end={10} duration={1} delay={0} /> }
                          K+</b>
                        <p className="font-normal text-base">Satisfied Clients</p>
                      </span>
                    </div>
                  </div>
                </div>
              </ScrollTrigger>
              {/* content */}
            </div>
          </div>
        </div>
      </div>
      {/* contact */}
      <div className="class-absolute bg-white drop-shadow-2xl p-2 lg:p-6 absolute lg:-bottom-16 -bottom-9 flex items-center justify-between">
        <div>
          <FiPhoneCall className="lg:text-6xl text-5xl" />
        </div>
        <div>
          <p className="font-medium lg:text-base text-sm">Our 24/7 Emergency Phone Services</p>
          <b className="lg:font-extrabold lg:text-4xl font-bold text-2xl text-red-500">Call: 123-456-7890</b>
        </div>
      </div>
      {/* contact */}
    </section>
  );
};

export default Callback;

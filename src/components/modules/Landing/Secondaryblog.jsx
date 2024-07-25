import React from "react";
import img21 from "../../../assets/images/img21.jpg";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { FaPinterest } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Secondaryblog = () => {
  const recentPost = [
    {
      img: img21,
      title: "Someday I'm going to be free and travel",
      text: "June 30, 2024 | No Comments",
    },
    {
      img: img21,
      title: "Enjoying the beauty of the great nature",
      text: "June 30, 2024 | No Comments",
    },
    {
      img: img21,
      title: "Let's start adventure with best tripo guides",
      text: "June 30, 2024 | No Comments",
    },
    {
      img: img21,
      title: "Journeys are best measured in new friends",
      text: "June 30, 2024 | No Comments",
    },
    {
      img: img21,
      title: "Take only memories, leave only footprints",
      text: "June 30, 2024 | No Comments",
    },
  ];
  const socialShare = [
    {
      icon: <FaFacebook />,
      name: "Facebook",
      bgColor: "#366BDC",
    },
    {
      icon: <FaPinterest />,
      name: "Pinterest",
      bgColor: "#FF0013",
    },
    {
      icon: <FaWhatsapp />,
      name: "WhatsApp",
      bgColor: "#00FF54",
    },
    {
      icon: <FaLinkedin />,
      name: "Linkedin",
      bgColor: "#009BFF",
    },
    {
      icon: <FaTwitter />,
      name: "Twitter",
      bgColor: "#00BFFF",
    },
    {
      icon: <FaGoogle />,
      name: "Google",
      bgColor: "#FF4626",
    },
  ];
  return (
    <section>
      <div className="flex flex-col items-center justify-center mb-14">
        <h4 className="py-2 px-4 mb-8 text-blue-600 font-bold text-base border-2 border-blue-600">
          ABOUT AUTHOR
        </h4>
        <img
          src={img21}
          alt="img"
          className="border-2 border-purple-600 rounded-full mb-8"
        />
        <span className="font-bold text-2xl mb-6">James Watson</span>
        <p className="text-center  font-normal text-base mb-6">
          Accumsan? Aliquet nobis doloremque, aliqua? Inceptos voluptatem, duis
          tempore optio quae animi viverra distinctio cumque vivamus, earum
          congue, anim velit
        </p>
        <div className="h-auto flex border-2 border-green-500 gap-3">
          <div className="border border-gray-500 p-2 text-xl">
            <FaFacebook />
          </div>
          <div className="border border-gray-500 p-2 text-xl">
            <FaGoogle />
          </div>
          <div className="border border-gray-500 p-2 text-xl">
            <FaTwitter />
          </div>
          <div className="border border-gray-500 p-2 text-xl">
            <CiInstagram />
          </div>
          <div className="border border-gray-500 p-2 text-xl">
            <FaPinterest />
          </div>
        </div>
      </div>
      <div className="mb-14 flex flex-col items-center">
        <h4 className="py-2 px-4 mb-8 text-blue-600 font-bold text-base border-2 border-blue-600">
          RECENT POST
        </h4>
        {recentPost.map((v) => (
          <div className="flex items-center gap-6 border w-full">
            {<img src={v.img} alt="img" className="h-20" />}
            <div>
              <p className="font-medium text-base pb-3">{v.title}</p>
              <p className="font-normal text-sm">{v.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className=" flex flex-col items-center">
        <h4 className="py-2 px-4 mb-8 text-blue-600 font-bold text-base border-2 border-blue-600">
          Social Share
        </h4>
        <div className="flex flex-wrap w-full">
          {socialShare.map((v, key) => (
            <div
              className="flex xl:w-1/2 w-full items-center text-white text-base font-normal"
              style={{
                backgroundColor: v.bgColor,
              }}
              key={key}
            >
              <div className="text-2xl border py-3 px-3">{v.icon}</div>
              <p className="font-medium text-base text-center w-full">
                {v.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Secondaryblog;

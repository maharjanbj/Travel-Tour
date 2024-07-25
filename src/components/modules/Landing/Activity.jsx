import React from "react";
import icon1 from "../../../assets/images/icon6.png";
import icon2 from "../../../assets/images/icon10.png";
import icon3 from "../../../assets/images/icon9.png";
import icon4 from "../../../assets/images/icon8.png";
import icon5 from "../../../assets/images/icon7.png";
import icon6 from "../../../assets/images/icon11.png";

const Activity = () => {
  const activity = [
    {
      img: icon1,
      title: "Adventure",
      text: "15 Destination",
    },
    {
      img: icon2,
      title: "Trekking",
      text: "12 Destination",
    },
    {
      img: icon3,
      title: "Camp Fire",
      text: "7 Destination",
    },
    {
      img: icon4,
      title: "Off Road",
      text: "15 Destination",
    },
    {
      img: icon5,
      title: "Camping",
      text: "13 Destination",
    },
    {
      img: icon6,
      title: "Exploring",
      text: "25 Destination",
    },
  ];
  return (
    <section id='section' className="h-auto w-full bg-white">
      <div className="flex items-center flex-col">
        <div className="flex pb-4">
          <p className="border-b border-red-500 lg:w-24 w-14"></p>
          <p className="font-bold lg:text-base text-sm text-red-500">
            TRAVEL BY ACTIVITY
          </p>
        </div>
        <h1 className="lg:font-black lg:text-5xl font-extrabold text-2xl text-blue-950 pb-4">
          ADVENTURE & ACTIVITY
        </h1>
        <p className="font-normal lg:text-base text-sm text-center pb-4">
          Mollit voluptatem perspiciatis convallis elementum corporis quo
          veritatis aliquid blandit, blandit torquent, odit placeat. Adipiscing
          repudiandae eius cursus? Nostrum magnis maxime curae placeat.
        </p>
      </div>
      <div className="flex justify-center flex-wrap gap-5 my-6">
        {activity.map((v) => (
          <div className="border-2 flex flex-col justify-center items-center h-auto w-[180px] py-4 px-8">
            <img src={v.img} alt="icon" className="h-full w-full" />
            <b className="font-bold lg:text-base text-sm">{v.title}</b>
            <p className="font-normal lg:text-base text-sm">{v.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Activity;

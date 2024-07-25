import React from "react";
import img30 from "../../../assets/images/img30.jpg";
import { FaTags } from "react-icons/fa";
import img20 from "../../../assets/images/img20.jpg";
import img21 from "../../../assets/images/img21.jpg";
import img22 from "../../../assets/images/img22.jpg";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { FaPinterest } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaReply } from "react-icons/fa";
import { FaGreaterThan } from "react-icons/fa6";

const Primaryblog = () => {
    const socialShare = [
        {
          icon: <FaFacebook />,
          name: "Facebook",
          bgColor: "#366BDC",
        },
        {
          icon: <FaGoogle />,
          name: "Google",
          bgColor: "#FF4626",
        },
        {
          icon: <FaPinterest />,
          name: "Pinterest",
          bgColor: "#FF0013",
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
      ];
    const comments = [
      {
        img: img20,
        name: 'Tom Sawyer',
        date: 'Jan 10, 2020',
        text: 'Officia amet posuere voluptates, mollit montes eaque accusamus laboriosam quisque cupidatat dolor pariatur, pariatur auctor.',
      },
      {
        img: img21,
        name: 'John Doe',
        date: 'Jan 10, 2020',
        text: 'Officia amet posuere voluptates, mollit montes eaque accusamus laboriosam quisque cupidatat dolor pariatur, pariatur auctor.',
      },
      {
        img: img22,
        name: 'Jaan Smith',
        date: 'Jan 10, 2020',
        text: 'Officia amet posuere voluptates, mollit montes eaque accusamus laboriosam quisque cupidatat dolor pariatur, pariatur auctor.',
      },
    ]
  return (
    <section>
      <div>
        <img src={img30} alt="img" />
        <h2>
          Cupiditate hic provident, repudiandae delectus debitis hac alias
          curabitur, sequi minim sapien scelerisque dolorem id.
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis varius
          ligula non tellus euismod fermentum. Nulla quis enim ut est dapibus
          luctus quis quis enim. Ut bibendum ultricies nisl ut aliquam. Ut in
          arcu id nunc elementum ultricies eu eget lacus nam at neque lorem.
        </p>

        <div className="blockquote relative text-center">
          <p className="my-6">
            Sagittis perferendis? Leo nobis irure egestas excepturi ipsam
            nascetur elementum, montes. Torquent, soluta, ac nihil.
          </p>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis varius
          ligula non tellus euismod fermentum. Nulla quis enim ut est dapibus
          luctus quis quis enim. Ut bibendum ultricies nisl ut aliquam. Ut in
          arcu id nunc elementum ultricies eu eget lacus nam at neque lorem.
        </p>
        <h3 className="flex items-center gap-2">
          <FaTags /> Destination, hiking, Travel Dairies, Travelling, Trekking
        </h3>
        <div className="flex w-full gap-3">
          {socialShare.map((v, key) => (
            <div
              className="flex w-full items-center text-white text-base font-normal"
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

        <div className="flex items-center gap-3 my-8">
          <div className="h-20 border-2 border-red-950">
            <img src={img21} alt="profile_image" className="rounded-full w-full h-full" />
          </div>
          <div>
            <p className="flex items-center gap-1 text-blue-950 text-xl font-bold">Demoteam</p>
            <p className="flex items-center gap-1 text-base font-normal py-2">Anim eligendi error magnis. Pretium fugiat cubilia ullamcorper adipisci, lobortis repellendus sit culpa maiores!</p>
            <button className="flex items-center gap-1 text-red-600 text-sm font-normal">VIEW ALL POSTS <FaGreaterThan /></button>
          </div>
        </div>
        <div className="border-2 border-purple-700 my-8">
          <span className="text-5xl font-black text-blue-950">3 Comments</span>
          {comments.map((v, key)=> (
            <div 
              className="flex items-center gap-3 my-3 border-2 border-blue-700" 
              key={key}
            >
              <div className="h-20 border-2 border-red-950">
                <img src={v.img} alt="profile_image" className="rounded-full w-full h-full" />
              </div>
              <div className="border-2 border-green-700">
                <div className="flex items-center gap-2">
                  <p className="text-base font-normal text-slate-800">{v.name}</p>
                  <p className="text-sm font-normal">{v.date}</p>
                </div>
                <div className="text-base font-normal py-2">{v.text}</div>
                <button className="flex items-center gap-2 bg-red-600 p-1 text-sm font-normal text-white">
                  <FaReply />
                  Reply
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="my-8">
          <h1 className="text-5xl font-black text-blue-950">Leave a Reply</h1>
          <form className="flex flex-col gap-4 my-5">
            <p className="text-sm font-normal text-slate-800">Your email address will not be published. Required fields are marked *</p>
            <label className="text-base font-normal">Comment</label>
            <textarea rows={7} className="text-base font-normal outline-none p-2 w-full"></textarea>
            <label className="text-base font-normal">Name*</label>
            <input type="text" className="text-base font-normal outline-none p-2 w-full" />
            <label className="text-base font-normal">Email*</label>
            <input type="text" className="text-base font-normal outline-none p-2 w-full" />
            <label className="text-base font-normal">Website</label>
            <input type="text" className="text-base font-normal outline-none p-2 w-full" />
          </form>
          <button className="bg-red-600 text-white py-3 px-9 text-base font-normal">Post comment</button>
        </div>
      </div>
    </section>
  );
};

export default Primaryblog;

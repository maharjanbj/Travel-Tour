import React from 'react'
import logo from '../../assets/images/image.png'
import logo2 from '../../assets/images/logo6.png'
import logo3 from '../../assets/images/logo2 (1).png'
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
    <section id='section' className='h-auto w-full bg-gray-700 text-white'>
      <div className='my-14 flex justify-center lg:flex-nowrap flex-wrap gap-2'>

        <div className='lg:basis-3/12 md:basis-2/5 w-full'>
          <div className='flex gap-2 pb-4'>
            <div className='border-l-4 border-blue-600'></div>
            <h3 className="font-bold lg:text-base text-sm">ABOUT TRAVEL</h3>
          </div>
          <p className="font-normal lg:text-base text-sm pb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
          <div className='flex'>
            <div className='w-1/2 border-2'>
              <img src={logo2} alt="logo" className='h-auto max-w-full' />
            </div>
            <div className='w-1/2 border-2'>
              <img src={logo3} alt="logo" className='h-auto max-w-full' />
            </div>
          </div>
        </div>
        
        <div className='lg:basis-3/12 md:basis-2/5 w-full'>
        <div className='flex gap-2 pb-4'>
          <div className='border-l-4 border-blue-600'></div>
          <h3 className="font-bold lg:text-base text-sm">CONTACT INFORMATION</h3>
        </div>
          <p className="font-normal lg:text-base text-sm pb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div>
            <div className='flex gap-2 items-center pb-2'>
              <span className='text-red-500 text-sm'>
                <FaPhoneAlt />
              </span>
              <p className="font-normal lg:text-base text-sm">+977-0123456789</p>
            </div>
            <div className='flex gap-2 items-center pb-2'>
              <span className='text-red-500 text-sm'>
                <IoMdMail />
              </span>
              <p className="font-normal lg:text-base text-sm">company@domain.com</p>
            </div>
            <div className='flex gap-2 items-center'>
              <span className='text-red-500 text-sm'>
                <FaLocationDot />
              </span>
              <p className="font-normal lg:text-base text-sm">3146 Koontiz, California</p>
            </div>
          </div>
        </div>

        <div className='lg:basis-3/12 md:basis-2/5 w-full'>
        <div className='flex gap-2 pb-4'>
          <div className='border-l-4 border-blue-600'></div>
          <h3 className="font-bold lg:text-base text-sm">LATEST POST</h3>
        </div>
          <p className="font-normal lg:text-base text-sm pb-2">Life is a beautiful journey not a destination</p>
          <p className="font-normal text-[16px] text-slate-500 pb-4">June 30, 2024 | No Comments</p>
          <h2 className="font-normal lg:text-base text-sm pb-2">Take only memories, leave only footprints</h2>
          <p className="font-normal text-[16px] text-slate-500">June 30, 2024 | No Comments</p>
        </div>

        <div className='lg:basis-3/12 md:basis-2/5 w-full'>
        <div className='flex gap-2 pb-4'>
          <div className='border-l-4 border-blue-600'></div>
          <h3 className="font-bold lg:text-base text-sm">SUBSCRIBE US</h3>
        </div>
          <p className="font-normal lg:text-base text-sm pb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <input type="text" placeholder='Your Email....' className='p-2 w-full text-black mb-4' />
          <button className='font-semibold text-base text-white bg-red-500 hover:bg-blue-700 cursor-pointer lg:py-2 py-2 w-full'>SUBSCRIBE NOW</button>
        </div>

      </div>

    </section>

    <section id='section' className='bg-slate-600 text-white h-auto w-full'>
      <div className='flex lg:flex-nowrap md:flex-nowrap flex-wrap lg:justify-between md:justify-between justify-center items-center'>

        <div className="font-normal lg:text-base text-sm">Privacy Policy | Term & Condition | FAQ</div>

        <div className='lg:p-0 md:p-0 py-3'>
          <img src={logo} alt="logo" />
        </div>

        <div className="font-normal lg:text-base text-sm">Copyright © 2024 Travele. All right reserveds</div>

      </div>
    </section>
    </>
  )
}

export default Footer
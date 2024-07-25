import React from 'react'
import img5 from '../../../assets/images/img5.jpg'
import img6 from '../../../assets/images/img6.jpg'
import img7 from '../../../assets/images/img7.jpg'
import { SlPeople } from "react-icons/sl";
import { FaRegClock } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { FaLongArrowAltRight } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";

const Packages = () => {
  return (
    <section id='section' className='h-auto w-full bg-slate-100'>
        <div className='flex items-center flex-col'>
            <div className='flex pb-4'>
                <p className="border-b border-red-500 lg:w-24 w-14"></p>
                <p className='font-bold lg:text-base text-sm text-red-500'>EXPLORE GREAT PLACES</p>
            </div>
            <h1 className='lg:font-black lg:text-5xl font-extrabold text-2xl text-blue-950 pb-4'>POPULAR PACKAGES</h1>
            <p className='font-normal lg:text-base text-sm text-center'>Aperiam sociosqu urna praesent, tristique, corrupti condimentum asperiores platea ipsum ad arcu. Nostrud. Aut nostrum, ornare quas provident laoreet nesciunt.</p>
        </div>

        <div className='my-6 flex justify-center flex-wrap gap-4'>
            <div className='h-auto w-[340px] shadow-2xl relative'>
                <img src={img5} alt="img" className='w-full' />
                <div className='bg-red-500 text-white lg:py-2 lg:px-6 py-1 px-3 font-bold lg:text-xl text-lg flex items-center justify-center gap-2 opacity-95 absolute top-4 right-0'>
                    $1,900 <span className='font-normal lg:text-sm text-xs'> / per person</span>
                </div>
                <div className='bg-blue-700 text-white py-2 px-6 font-normal lg:text-sm text-xs flex items-center justify-center gap-1 opacity-95 absolute lg:bottom-60 md:bottom-60 lg:right-5 lg:left-5 right-2 left-2 bottom-[248px]'>
                    <FaRegClock />7D/6N | <SlPeople />People: 5 | <IoLocationOutline />Malaysia
                </div>
                <div className='p-6'>
                    <h3 className='font-bold lg:text-2xl text-xl pb-1'>Sunset view of beautiful lakeside resident</h3>
                    <span className='font-normal text-base flex items-center gap-2'>(25 reviews) <b className='flex text-red-500'><FaStar /><FaStar /><FaStar /><CiStar /><CiStar /></b></span>
                    <p className='font-normal text-base py-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit Ab cum magni Voluptates veritatis reprehenderit.</p>
                    <div className='flex justify-between'>
                        <button className='font-semibold text-base hover:text-blue-700 flex items-center gap-2'>Book Now <span><FaLongArrowAltRight /></span></button>
                        <button className='font-semibold text-base hover:text-blue-700 flex items-center gap-2'>Wish List <span><CiHeart /></span></button>
                    </div>
                </div>
            </div>
            <div className='h-auto w-[340px] shadow-2xl relative'>
                <img src={img6} alt="img" className='w-full' />
                <div className='bg-red-500 text-white lg:py-2 lg:px-6 py-1 px-3 font-bold lg:text-xl text-lg flex items-center justify-center gap-2 opacity-95 absolute top-4 right-0'>
                    $1,230 <span className='font-normal lg:text-sm text-xs'> / per person</span>
                </div>
                <div className='bg-blue-700 text-white py-2 px-6 font-normal lg:text-sm text-xs flex items-center justify-center gap-2 opacity-95 absolute lg:bottom-60 md:bottom-60 lg:right-5 lg:left-5 right-2 left-2 bottom-[248px]'>
                    <FaRegClock />5D/4N | <SlPeople />People: 8 | <IoLocationOutline />Canada
                </div>
                <div className='p-6'>
                    <h3 className='font-bold lg:text-2xl text-xl pb-1'>Experience the natural beauty of island</h3>
                    <span className='font-normal text-base flex items-center gap-2'>(17 reviews) <b className='flex text-red-500'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></b></span>
                    <p className='font-normal text-base py-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit Ab cum magni Voluptates veritatis reprehenderit.</p>
                    <div className='flex justify-between'>
                        <button className='font-semibold text-base hover:text-blue-700 flex items-center gap-2'>Book Now <span><FaLongArrowAltRight /></span></button>
                        <button className='font-semibold text-base hover:text-blue-700 flex items-center gap-2'>Wish List <span><CiHeart /></span></button>
                    </div>
                </div>
            </div>
            <div className='h-auto w-[340px] shadow-2xl relative'>
                <img src={img7} alt="img" className='w-full' />
                <div className='bg-red-500 text-white lg:py-2 lg:px-6 py-1 px-3 font-bold lg:text-xl text-lg flex items-center justify-center gap-2 opacity-95 absolute top-4 right-0'>
                    $2,000 <span className='font-normal lg:text-sm text-xs'> / per person</span>
                </div>
                <div className='bg-blue-700 text-white py-2 px-6 font-normal lg:text-sm text-xs flex items-center justify-center gap-2 opacity-95 absolute lg:bottom-60 md:bottom-60 lg:right-5 lg:left-5 right-2 left-2 bottom-[248px]'>
                    <FaRegClock />6D/5N | <SlPeople />People: 6 | <IoLocationOutline />Portugal
                </div>
                <div className='p-6'>
                    <h3 className='font-bold lg:text-2xl text-xl pb-1'>Vaction to the water city of Portugal</h3>
                    <span className='font-normal text-base flex items-center gap-2'>(25 reviews) <b className='flex text-red-500'><FaStar /><FaStar /><FaStar /><FaStar /><CiStar /></b></span>
                    <p className='font-normal text-base py-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit Ab cum magni Voluptates veritatis reprehenderit.</p>
                    <div className='flex justify-between'>
                        <button className='font-semibold text-base hover:text-blue-700 flex items-center gap-2'>Book Now <span><FaLongArrowAltRight /></span></button>
                        <button className='font-semibold text-base hover:text-blue-700 flex items-center gap-2'>Wish List <span><CiHeart /></span></button>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex justify-center'>
            <button className='font-semibold text-base text-white bg-red-500 hover:bg-blue-700 cursor-pointer lg:py-4 lg:px-6 py-2 px-3'>VIEW ALL PACKAGES</button>
        </div>
    </section>
  )
}

export default Packages

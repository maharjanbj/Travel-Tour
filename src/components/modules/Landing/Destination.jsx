import React from 'react'
import img1 from '../../../assets/images/img1.jpg'
import img2 from '../../../assets/images/img2.jpg'
import img3 from '../../../assets/images/img3.jpg'
import img4 from '../../../assets/images/img4.jpg'
import { FaStar } from "react-icons/fa";

const Destination = () => {
  return (
    <section id='section' className='h-auto w-full bg-slate-100'>
        <div className='flex pb-4'>
            <p className="border-b border-red-500 lg:w-24 w-14"></p>
            <p className='font-bold lg:text-base text-sm text-red-500'>POPULAR DESTINATION</p>
        </div>
        <div className='flex justify-between items-center flex-wrap h-auto w-full gap-3'>
            <h1 className='lg:font-black lg:text-5xl font-extrabold text-2xl text-blue-950'>TOP NOTCH DESTINATION</h1>
            <p className='font-normal lg:text-base text-sm'>Aperiam sociosqu urna praesent, tristique, corrupti condimentum asperiores platea ipsum ad arcu. Nostrud. Aut nostrum, ornare quas provident laoreet nesciunt.</p>
        </div>
        <div className='flex lg:flex-nowrap flex-wrap justify-center gap-2 py-6'>
            <div className='relative flex flex-grow lg:w-[700px]'>
                <img src={img1} alt="img1" className='flex flex-grow' />
                {/* basis-1/2 max-w-full max-h-[520px] */}
                <div className='bg-blue-950 text-white opacity-70 max-w-full h-full p-6 absolute top-0 left-0 right-0 flex justify-between flex-col'>
                    <div>
                        <button className='font-bold text-base bg-blue-700 hover:bg-red-500 cursor-pointer py-1 px-5'>THAILAND</button>
                    </div>
                    <div>
                        <h2 className='font-bold text-2xl'>Disney Land</h2>
                        <b className='flex'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></b>
                    </div>
                </div>
            </div>
            <div className='relative flex flex-grow lg:w-[700px]'>
                <img src={img2} alt="img2" className='flex flex-grow' />
                {/* basis-1/2 max-w-full max-h-[520px] */}
                <div className='bg-blue-950 text-white opacity-70 max-w-full h-full p-6 absolute top-0 left-0 right-0 flex justify-between flex-col'>
                    <div>
                        <button className='font-bold text-base bg-blue-700 hover:bg-red-500 cursor-pointer py-1 px-5'>NORWAY</button>
                    </div>
                    <div>
                        <h2 className='font-bold text-2xl'>Besseggen Ridge</h2>
                        <b className='flex'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></b>
                    </div>
                </div>
            </div>
            <div className='flex flex-col flex-wrap gap-2 w-full'>
                <div className='relative flex flex-grow'>
                    {/* flex flex-grow */}
                    <img src={img3} alt="img3" className='flex flex-grow' />
                    {/* flex flex-grow */}
                    {/* flex basis-1/2 max-w-full */}
                    <div className='bg-blue-950 text-white opacity-70 max-w-full h-full p-6 absolute top-0 left-0 right-0 flex justify-between flex-col'>
                        <div>
                            <button className='font-bold text-base bg-blue-700 hover:bg-red-500 cursor-pointer py-1 px-5'>NEW ZEALAND</button>
                        </div>
                        <div>
                            <h2 className='font-bold text-2xl'>Oxolotan City</h2>
                            <b className='flex'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></b>
                        </div>
                    </div>
                </div>
                <div className='relative flex flex-grow'>
                {/* flex flex-grow */}
                    <img src={img4} alt="img4" className='flex flex-grow' />
                    {/* basis-1/2 max-w-full */}
                    <div className='bg-blue-950 text-white opacity-70 max-w-full h-full p-6 absolute top-0 left-0 right-0 flex justify-between flex-col'>
                    <div>
                        <button className='font-bold text-base bg-blue-700 hover:bg-red-500 cursor-pointer py-1 px-5'>SINGAPORE</button>
                    </div>
                    <div>
                        <h2 className='font-bold text-2xl'>Marina Bay Sand City</h2>
                        <b className='flex'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></b>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <div className='flex justify-center'>
            <button className='font-semibold text-base text-white bg-red-500 hover:bg-blue-700 cursor-pointer lg:py-4 lg:px-6 py-2 px-3'>MORE DESTINATION</button>
        </div>
    </section>
  )
}

export default Destination

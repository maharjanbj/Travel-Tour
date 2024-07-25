import React from 'react'
import img17 from '../../../assets/images/img17.jpg'
import img18 from '../../../assets/images/img18.jpg'
import img19 from '../../../assets/images/img19.jpg'

const Blog = () => {
  return (
    <section id='section' className='h-auto w-full'>
        <div className='flex items-center flex-col py-6'>
            <div className='flex pb-4'>
                <p className="border-b border-red-500 lg:w-24 w-14"></p>
                <p className='font-bold lg:text-base text-sm text-red-500'>FROM OUR BLOG</p>
            </div>
            <h1 className="lg:font-black lg:text-5xl font-extrabold text-2xl text-blue-950 pb-4">
                OUR RECENT POSTS
            </h1>
            <p className="font-normal lg:text-base text-sm text-center pb-4">
            Mollit voluptatem perspiciatis convallis elementum corporis quo
            veritatis aliquid blandit, blandit torquent, odit placeat. Adipiscing
            repudiandae eius cursus? Nostrum magnis maxime curae placeat.
            </p>
        </div>

        <div className='my-6 flex justify-center flex-wrap gap-4'>

            <div className='h-auto w-[340px] shadow-2xl'>
                <img src={img17} alt="img" className='w-full' />
                <div className='p-3'>
                    <h3 className='font-semibold lg:text-2xl text-xl pb-4'>Life is a beautiful journey not a destination</h3>
                    <p className='font-normal lg:text-base text-sm'>
                        Demoteam | June 30, 2024 | No Comments
                    </p>
                </div>
            </div>

            <div className='h-auto w-[340px] shadow-2xl'>
                <img src={img18} alt="img" className='w-full' />
                <div className='p-3'>
                    <h3 className='font-semibold lg:text-2xl text-xl pb-4'>Take only memories, leave only footprints</h3>
                    <p className='font-normal lg:text-base text-sm'>
                        Demoteam | June 30, 2024 | No Comments
                    </p>
                </div>
            </div>

            <div className='h-auto w-[340px] shadow-2xl'>
                <img src={img19} alt="img" className='w-full' />
                <div className='p-3'>
                    <h3 className='font-semibold lg:text-2xl text-xl pb-4'>Journeys are best measured in new friends</h3>
                    <p className='font-normal lg:text-base text-sm'>
                        Demoteam | June 30, 2024 | No Comments
                    </p>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Blog

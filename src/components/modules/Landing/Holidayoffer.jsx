import React from 'react'
import '../../../App.css'
import Banner from '../../../assets/images/img16.jpg'

const Holidayoffer = () => {
  return (
    <section className='h-auto w-full bg-white'>
        <div id='section' className={`w-full h-full text-white bg-cover bg-center bg-no-repeat lg:relative`}
          style={{
            backgroundImage: `
            linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
            url(${Banner})`,
            backgroundAttachment: `fixed`
          }}>
            <div className='h-full lg:w-[60%] w-full my-24 flex justify-center flex-col'>
                <div className="flex pb-4">
                    <p className="border-b lg:w-24 w-14"></p>
                    <p className="font-bold lg:text-base text-sm">
                        HOLIDAY PACKAGE OFFER
                    </p>
                </div>
                <h1 className="lg:font-black lg:text-5xl font-extrabold text-2xl pb-4">
                    HOLIDAY SPECIAL 25% OFF !
                </h1>
                <p className="font-normal lg:text-base text-sm pb-4">
                    Sign up now to recieve hot special offers and information about the best tour packages, updates and discounts !!
                </p>
                <div className='relative pb-4'>
                    <input type="text" placeholder='Your Email Address' className='bg-transparent outline-none border-2 border-white text-white w-full lg:h-[62px] h-[42px] font-medium pt-0 pr-[190px] pb-0 pl-20px p-2' />
                    <button className="absolute top-[3px] right-[3px] z-10 font-semibold lg:text-base text-sm bg-red-500 hover:bg-blue-700 cursor-pointer lg:py-4 lg:px-6 py-2 px-4">SIGN UP NOW</button>
                </div>
                <p className="font-normal lg:text-base text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Eaque adipiscing, luctus eleifend temporibus occaecat luctus eleifend tempo ribus.
                </p>
            </div>
        </div>
    </section>
  )
}

export default Holidayoffer

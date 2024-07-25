import React from "react";
import img12 from "../../../assets/images/img12.jpg"
import img13 from "../../../assets/images/img13.jpg"
import img14 from "../../../assets/images/img14.jpg"
import img15 from "../../../assets/images/img15.jpg"

const Gallery = () => {
  return (
    <section id='section' className="h-auto w-full bg-white">
        <div className="h-full w-full flex flex-wrap">
            <div className="flex flex-grow flex-col lg:basis-[40%] lg:pr-2">
                <div className="flex pb-4">
                    <p className="border-b border-red-500 lg:w-24 w-14"></p>
                    <p className="font-bold lg:text-base text-sm text-red-500">
                        OUR TOUR GALLERY
                    </p>
                </div>
                <h1 className="lg:font-black lg:text-5xl font-extrabold text-2xl text-blue-950 pb-4">
                BEST TRAVELER'S SHARED PHOTOS
                </h1>
                <p className="font-normal lg:text-base text-sm">
                Aperiam sociosqu urna praesent, tristique, corrupti condimentum asperiores platea ipsum ad arcu. Nostrud. Esse? Aut nostrum, ornare quas provident laoreet nesciunt odio voluptates etiam, omnis.
                </p>
                <img src={img12} alt="img" className="w-full mt-4 mb-2" />
            </div>
            <div className="flex flex-col items-center gap-1 lg:basis-[60%] flex-grow">
                <div className="flex gap-2 flex-wrap h-full w-full">
                    <img src={img13} alt="img" className="flex flex-grow" />
                    <img src={img14} alt="img" className="flex flex-grow" />
                </div>
                <img src={img15} alt="img" className="w-full flex flex-grow" />
            </div>
        </div>
    </section>
  );
};

export default Gallery;

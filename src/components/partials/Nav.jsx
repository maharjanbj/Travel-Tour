import React, { useState } from "react";
import Logo1 from "../../assets/images/image.png";
import Logo2 from "../../assets/images/travele-logo1.png";
import { FaBars } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

const Nav = () => {
  const [active, setActive] = useState(false);
  const [menu, setMenu] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 70) {
      setActive(true);
    } else {
      setActive(false);
    }
  });

  const handleBars = () => {
    setMenu(!menu);
  }

  return (
    <section className="relative h-16 w-full bg-transparent text-white flex items-center">
      <div
        className={
          active
            ? `fixed top-0 left-0 shadow-2xl flex items-center justify-around h-16 w-full bg-white text-black z-50`
            : "h-full w-full flex items-center justify-around "
        }
      >
        <div className='lg:h-10 lg:w-40 md:h-9 md:w-36 h-7 w-26'>
          <Link to='/'>
            <img src={ active ? Logo2 : Logo1 } alt="logo" className="h-full w-full" />
          </Link>
        </div>
        <div className={menu ? "active: absolute left-0 top-0 bg-white text-black w-full flex flex-col justify-center items-center p-4 gap-3" : "lg:flex font-semibold text-lg gap-4 uppercase hidden"}>
          <div>Home</div>
          <div>Tour</div>
          <div>Pages</div>
          <div>Shop</div>
          <div>Blog</div>
          <div>Dashboard</div>
        </div>
        <button className="lg:py-2 lg:px-6 py-1 px-2 font-bold lg:text-lg md:text-sm text-xs uppercase bg-red-500 hover:bg-blue-700">
          Book Now
        </button>
      </div>

      <div className="absolute right-1 md:right-4 lg:right-6 font-black text-2xl block lg:hidden" onClick={handleBars}>
        {menu ? <RxCross2 className="text-black" /> : <FaBars />}
      </div>
    </section>
  );
};

export default Nav;

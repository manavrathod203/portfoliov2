import React, { useEffect, useState } from "react";
import { VscMenu, VscClose } from "react-icons/vsc";

function Navbar() {
  const [menuActive, setMenuActive] = useState(false);
  return (
    <>
      <div
        className={`${
          menuActive === true ? "opacity-100 z-[2999] min-h-lvh" : " h-0"
        } w-full  fixed bg-[#000000c9] opacity-0 transition-all ease-linear duration-300 `}
      ></div>
      <div
        className={`w-full lg:px-20  lg:py-5 0 fixed top-0 left-0 z-[9999] text-[#252422] bg-[#000000b9] lg:bg-[#e8e8e3] border-b border-[#252422] transition-all ease-linear duration-300 `}
      >
        <div className="relative flex flex-col lg:flex-row lg:items-center justify-between ">
          <div className="flex items-center justify-between w-full lg:w-fit  z-[1000] px-5 md:px-10 lg:px-0 py-5 lg:py-0 bg-[#e8e8e3]">
            <h2 className="font-['Clash_Display'] text-2xl md:text-3xl lg:text-4xl uppercase   ">
              @MNVRTHD
            </h2>
            <button
              onClick={() => setMenuActive(!menuActive)}
              className="text-3xl lg:hidden focus:outline-none"
            >
              {menuActive === false ? <VscMenu /> : <VscClose />}
            </button>
          </div>
          <div
            className={`${
              menuActive === false && "-translate-y-[150%] lg:translate-y-0"
            }  absolute w-full lg:w-fit  z-[999] transition-all ease-in-out duration-500  lg:static`}
          >
            <div className="flex flex-col lg:flex-row items-end lg:items-center gap-6 lg:gap-10 bg-[#e8e8e3] pt-28 pb-12 rounded-b-2xl lg:rounded-none  px-5 md:px-10 lg:p-0 border-b border-[#252422] lg:border-0">
              {["skills", "projects", "about", "contact"].map((item, index) => (
                <a
                  key={index}
                  href={`#${item}`}
                  className="uppercase text-4xl lg:text-base xl:text-xl"
                  onClick={() => setMenuActive(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* for below lg screen size */}
      <div className="block lg:hidden"></div>
    </>
  );
}

export default Navbar;

import React from "react";
import { IoArrowUp} from "react-icons/io5";
import { HiOutlineArrowDown } from "react-icons/hi";
// -0.8 speed
function Hero() {
  return (
    <div
      data-scroll
      data-scroll-speed={-0.8}
      id="#hero"
      className="bg-[#e8e8e3] w-full min-h-screen px-5 md:px-10 lg:px-20 xl:px-20 flex items-center z-[99]"
    >
      <div className="">
        <h1 className="font-['Clash_Display'] text-[#252422] text-[20vw]  md:text-[15vw] lg:text-[9vw] leading-[.9]">
          Manav Rathod
        </h1>
        <p className=" text-[#252422] tracking-wide text-xl md:text-3xl md:w-[85%]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae
          quod accusantium, impedit aliquid earum mollitia sed in animi eveniet
          vel.
        </p>
        <div className="flex items-center flex-wrap gap-4 mt-8">
          <a
            href="#projects"
            className="text-[#252422] uppercase whitespace-nowrap text-xl border-2 border-[#252422] rounded-full px-5 py-2 tracking-wide hover:bg-[#252422] hover:text-[#E8E8E3] transition-all ease-in-out duration-150"
          >
            Projects
          </a>
          <a
            href="https://drive.google.com/file/d/1Ng7AQj0cxVbB4XY_7poSPdq7vYGgFMO3/view?usp=sharing"
            target="_blank"
            className="text-[#252422] uppercase whitespace-nowrap text-xl border-2 border-[#252422] rounded-full px-5 py-2 tracking-wide flex items-center justify-center gap-2 hover:bg-[#252422] hover:text-[#E8E8E3] transition-all ease-in-out duration-150"
          >
            Download resume <IoArrowUp className="rotate-[45deg]" />
          </a>
        </div>
      </div>



      <p className="text-[#252422] leading-none px-5 md:px-10 lg:px-20 absolute bottom-0 left-0 w-full text-center mb-8 flex items-center justify-center opacity-75">
        ( SCROLL FOR MORE <HiOutlineArrowDown  className="ml-2 text-sm"/> )
      </p>
    </div>
  );
}

export default Hero;

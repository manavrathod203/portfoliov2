import React from "react";
import { IoArrowUp } from "react-icons/io5";
import Experience from "./Experience";
import Education from "./Education";
function About() {
  return (
    <div
      id="about"
      className="w-full  bg-[#252422] rounded-t-[20px] md:rounded-t-[30px] xl:rounded-t-[50px] py-12 md:py-16 xl:py-28 px-5 md:px-10 lg:px-20  text-[#e8e8e3]"
    >
      <div className="mb-24">
        <h2 className="font-['Clash_Display']  text-4xl md:text-6xl xl:text-7xl whitespace-nowrap uppercase">
          About Me
        </h2>
        <div className="w-full flex flex-col md:flex-row items-start gap-8 xl:gap-16 mt-8">
          <div className="w-full lg:w-1/2 aspect-square rounded-lg md:rounded-2xl overflow-hidden ">
            <img src="/images/manav_1.png" alt="" className="object-cover " />
          </div>
          <div className="w-full lg:w-1/2">
            <p className=" tracking-wide text-xl md:text-2xl xl:text-3xl  opacity-60">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              laboriosam sed, placeat earum, nulla maiores obcaecati libero
              corporis quibusdam excepturi quidem suscipit. Debitis nostrum
              dolor dicta repudiandae, voluptas, rerum, ab tenetur ut laudantium
              esse ex quidem illo animi. Deleniti, nihil!
            </p>
            <div className="flex items-center flex-wrap gap-4 mt-8">
              <a
                href="#contact"
                className="text-[#e8e8e3] uppercase text-base lg:text-xl border-2 border-[#e8e8e3] rounded-full px-5 py-2 tracking-wide hover:bg-[#e8e8e3] hover:text-[#252422] transition-all ease-in-out duration-150"
              >
                let's connect
              </a>
              <a
                href="https://drive.google.com/file/d/1Ng7AQj0cxVbB4XY_7poSPdq7vYGgFMO3/view?usp=sharing"
                target="_blank"
                className="text-[#e8e8e3] uppercase text-base lg:text-xl border-2 border-[#e8e8e3] rounded-full px-5 py-2 tracking-wide flex items-center justify-center gap-2 hover:bg-[#e8e8e3] hover:text-[#252422] transition-all ease-in-out duration-150"
              >
                Download resume <IoArrowUp className="rotate-[45deg]" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* about bottom */}
      <div className="w-full flex flex-col gap-20">
        <Experience />
        <Education />
      </div>
    </div>
  );
}

export default About;

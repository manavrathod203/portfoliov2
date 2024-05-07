import React from "react";
import { IoArrowUp } from "react-icons/io5";
import Experience from "./Experience";
import Education from "./Education";
import { FaLinkedinIn, FaInstagram, FaYoutube, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

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
          <div className="w-full lg:w-[30vw] aspect-square rounded-lg md:rounded-2xl overflow-hidden ">
            <img src="/images/manav_1.png" alt="" className="object-cover " />
          </div>
          <div className="w-full lg:w-[70vw]">
            <p className=" tracking-wider md:text-lg lg:text-xl xl:text-3xl font-[300]  opacity-60">
              I'm Manav Rathod, a computer engineering student with a passion
              for web development. Throughout my academics and personal projects, I've
              tackled all my projects from scratch, learning what I needed along
              the way. This shows that I'm always open to learning and
              improving. Now, I'm eager to put my skills to work on real-world
              projects and collaborate with a team. Let's create something
              amazing together! 💻🚀 Connect with me!
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

            {/* social links */}
            <div className="flex items-center gap-4 text-[#e8e8e3] text-xl md:text-2xl lg:text-2xl mt-6">
              <a
                target="_blank"
                href="mailto:manavrathod203@gmail.com"
                className="p-3 rounded-full border-2 border-[#e8e8e3] transition-all ease-in-out duration-300 hover:bg-[#e8e8e3] hover:text-[#252422]"
              >
                <MdOutlineEmail />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/manavrathod203/"
                className="p-3 rounded-full border-2 border-[#e8e8e3] transition-all ease-in-out duration-300 hover:bg-[#e8e8e3] hover:text-[#252422]"
              >
                <FaLinkedinIn />
              </a>
              <a
                target="_blank"
                href="https://github.com/manavrathod203"
                className="p-3 rounded-full border-2 border-[#e8e8e3] transition-all ease-in-out duration-300 hover:bg-[#e8e8e3] hover:text-[#252422]"
              >
                <FaGithub />
              </a>
              {/* <a
              target="_blank"
            href="#"
            className="p-3 rounded-full border border-[#e8e8e3] transition-all ease-in-out duration-300 hover:bg-[#e8e8e3] hover:text-[#252422]"
          >
            <FaXTwitter />
          </a>
          <a
          target="_blank"
            href="#"
            className="p-3 rounded-full border border-[#e8e8e3] transition-all ease-in-out duration-300 hover:bg-[#e8e8e3] hover:text-[#252422]"
          >
            <FaYoutube />
          </a> */}
              <a
                target="_blank"
                href="https://www.instagram.com/manavrathodd/"
                className="p-3 rounded-full border-2 border-[#e8e8e3] transition-all ease-in-out duration-300 hover:bg-[#e8e8e3] hover:text-[#252422]"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* about bottom */}
      <div className="w-full flex flex-col gap-20 xl:grid xl:grid-cols-2 xl:border-t border-[#e8e8e3]">
        <Experience />
        <Education />
      </div>
    </div>
  );
}

export default About;

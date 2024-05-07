import React from "react";
import { FaLinkedinIn, FaInstagram, FaYoutube, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
function Footer() {
  return (
    <div
      id="footer"
      className="w-full  bg-[#252422] rounded-t-[20px] md:rounded-t-[30px] xl:rounded-t-[50px] py-12 md:py-16 xl:py-28 px-5 md:px-10 lg:px-20  text-[#e8e8e3]"
    >
      <div className="flex flex-col justify-between items-start gap-4">
        <h2 className="font-['Clash_Display']  text-5xl md:text-6xl xl:text-7xl uppercase">
          © 2024 mnvrthd
        </h2>
        <div className="flex items-center gap-4 text-[#e8e8e3] text-xl md:text-3xl lg:text-4xl ">
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
  );
}

export default Footer;

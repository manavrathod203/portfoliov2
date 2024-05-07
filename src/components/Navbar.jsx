import React, { useEffect, useState } from "react";
import { VscMenu, VscClose } from "react-icons/vsc";
import { IoArrowUp } from "react-icons/io5";
import { FaLinkedinIn, FaInstagram, FaYoutube, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

function Navbar() {
  const [menuActive, setMenuActive] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (!menuActive) {
        setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
        setPrevScrollPos(currentScrollPos);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, menuActive]);
  return (
    <>
      <div
        className={`${
          menuActive === true ? "opacity-100 z-[2999] min-h-lvh" : " h-0"
        } w-full  fixed bg-[#000000c9] opacity-0 transition-all ease-linear duration-300 `}
      ></div>
      <div
        className={`w-full lg:px-20  lg:py-5 0 fixed  left-0 z-[9999] text-[#252422] bg-[#000000b9] lg:bg-[#e8e8e3] border-b border-[#252422] transition-all ease-linear duration-300 ${
          visible ? "top-0" : "-top-28"
        }`}
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

              <a
                href="https://drive.google.com/file/d/1Ng7AQj0cxVbB4XY_7poSPdq7vYGgFMO3/view?usp=sharing"
                target="_blank"
                className="text-[#252422]  lg:hidden uppercase whitespace-nowrap text-xl border-2 border-[#252422] rounded-full px-5 py-2 tracking-wide flex items-center justify-center gap-2 hover:bg-[#252422] hover:text-[#E8E8E3] transition-all ease-in-out duration-150"
              >
                Download resume <IoArrowUp className="rotate-[45deg]" />
              </a>

              <div className="lg:hidden flex items-center gap-4 text-[#252422] text-xl md:text-3xl lg:text-4xl ">
                <a
                  href="mailto:manavrathod203@gmail.com"
                  className="p-3 rounded-full border border-[#252422] transition-all ease-in-out duration-300 hover:bg-[#252422] hover:text-[#e8e8e3]"
                >
                  <MdOutlineEmail />
                </a>
                <a
                  href="https://www.linkedin.com/in/manavrathod203/"
                  className="p-3 rounded-full border border-[#252422] transition-all ease-in-out duration-300 hover:bg-[#252422] hover:text-[#e8e8e3]"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="https://github.com/manavrathod203"
                  className="p-3 rounded-full border border-[#252422] transition-all ease-in-out duration-300 hover:bg-[#252422] hover:text-[#e8e8e3]"
                >
                  <FaGithub />
                </a>
                {/* <a
            href="#"
            className="p-3 rounded-full border border-[#e8e8e3] transition-all ease-in-out duration-300 hover:bg-[#e8e8e3] hover:text-[#252422]"
          >
            <FaXTwitter />
          </a>
          <a
            href="#"
            className="p-3 rounded-full border border-[#e8e8e3] transition-all ease-in-out duration-300 hover:bg-[#e8e8e3] hover:text-[#252422]"
          >
            <FaYoutube />
          </a> */}
                <a
                  href="https://www.instagram.com/manavrathodd/"
                  className="p-3 rounded-full border border-[#252422] transition-all ease-in-out duration-300 hover:bg-[#252422] hover:text-[#e8e8e3]"
                >
                  <FaInstagram />
                </a>
              </div>
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

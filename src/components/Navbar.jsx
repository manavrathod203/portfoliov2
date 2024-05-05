import React from "react";

function Navbar() {
  return (
    <>
      {/* for lg and above */}
      <div className="hidden lg:block w-full  py-5 lg:px-20 absolute top-0 left-0 text-[#252422] ">
        <div className="flex items-center justify-between">
        <div className="logo">
          <h2 className="font-['Clash_Display'] text-4xl uppercase">
            @MNVRTHD
          </h2>
        </div>
        <div className="flex items-center gap-10">{["skills", "projects", "about", "contact"].map((item,index)=>(
          <a key={index} href={`#${item}`} className="uppercase lg:text-base xl:text-xl">{item}</a>
        ))}</div>
      </div>
      </div>
      {/* for below lg screen size */}
      <div className="block lg:hidden"></div>
    </>
  );
}

export default Navbar;

import React from "react";

function Contact() {
  return (
    <div
      id="contact"
      className="w-full  bg-[#e8e8e3] py-12 md:py-16 xl:py-28 px-5 md:px-10 lg:px-20 xl:px-40 text-[#252422]"
    >
      <div className="mb-24">
        <h2 className="font-['Clash_Display']  text-4xl md:text-6xl xl:text-7xl whitespace-nowrap uppercase">
          Contact Me
        </h2>
        <div className="grid xl:grid-cols-2 mt-10 gap-8">
          <div className="w-full h-96 rounded-xl bg-[#CCC5B9]"></div>
          <div className="w-full h-96 rounded-xl bg-[#CCC5B9]"></div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

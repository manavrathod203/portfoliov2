import React from "react";
import { IoArrowUp } from "react-icons/io5";

function About() {
  return (
    <div id="about" className="w-full  bg-[#252422] rounded-t-[20px] md:rounded-t-[30px] xl:rounded-t-[50px] py-12 md:py-16 xl:py-28 px-5 md:px-10 lg:px-20 xl:px-40 text-[#e8e8e3]">
      <div className="mb-24">
        <h2 className="font-['Clash_Display']  text-4xl md:text-6xl xl:text-7xl whitespace-nowrap uppercase">About Me</h2>
        <div className="w-full flex flex-col md:flex-row items-start gap-8 xl:gap-16 mt-8">
          <div className="w-full lg:w-1/2 aspect-square rounded-lg md:rounded-2xl overflow-hidden ">
            <img src="https://drive.google.com/file/d/1aivKCNr5KUA8IcmxtqVP-7aztgbPeePa/view?usp=drive_link" alt="" className="object-cover" />
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
                href="#projects"
                className="text-[#e8e8e3] uppercase text-base lg:text-xl border-2 border-[#e8e8e3] rounded-full px-5 py-2 tracking-wide hover:bg-[#e8e8e3] hover:text-[#252422] transition-all ease-in-out duration-150"
              >
                let's connect
              </a>
              <a
                href="#"
                className="text-[#e8e8e3] uppercase text-base lg:text-xl border-2 border-[#e8e8e3] rounded-full px-5 py-2 tracking-wide flex items-center justify-center gap-2 hover:bg-[#e8e8e3] hover:text-[#252422] transition-all ease-in-out duration-150"
              >
                Download resume <IoArrowUp className="rotate-[45deg]" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* about bottom */}
      <div className="grid xl:grid-cols-1 gap-20  ">
        
        {/* experience */}
        <div className="border-t  pt-10 ">
          <h2 className="font-['Clash_Display']  text-4xl md:text-6xl xl:text-7xl uppercase">
            Experience
          </h2>
          {/* timeline */}
          <ol className=" mt-10 border-s border-neutral-300 dark:border-neutral-500">
            {/*First item*/}
            <li>
              <div className="flex-start flex items-center pt-3">
                <div className="-ms-[5px] me-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500" />
                <p className="text-lg tracking-wide ">2020 - 2021</p>
              </div>
              <div className="mb-6 ms-4 mt-2">
                <h4 className="mb-1.5 text-2xl tracking-wider font-semibold">
                  Title of section 1
                </h4>
                <p className="mb-10  text-xl opacity-75 tracking-wide ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque scelerisque diam non nisi semper, et elementum lorem
                  ornare. Maecenas placerat facilisis mollis. Duis sagittis
                  ligula in sodales vehicula.
                </p>
              </div>
            </li>
          </ol>
          {/* timeline  end*/}
        </div>
        {/* education */}
        <div className="border-t  pt-10 ">
          <h2 className="font-['Clash_Display']  text-4xl md:text-6xl xl:text-7xl uppercase">
            Education
          </h2>
          {/* timeline */}
          <ol className=" mt-10 border-s border-neutral-300 dark:border-neutral-500">
            {/*First item*/}
            <li>
              <div className="flex-start flex items-center pt-3">
                <div className="-ms-[5px] me-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500" />
                <p className="text-lg tracking-wide ">2020 - 2021</p>
              </div>
              <div className="mb-6 ms-4 mt-2">
                <h4 className="mb-1.5 text-2xl tracking-wider font-semibold">
                  Title of section 1
                </h4>
                <p className="mb-10  text-xl opacity-75 tracking-wide ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque scelerisque diam non nisi semper, et elementum lorem
                  ornare. Maecenas placerat facilisis mollis. Duis sagittis
                  ligula in sodales vehicula.
                </p>
              </div>
            </li>
            {/*First item*/}
            <li>
              <div className="flex-start flex items-center pt-3">
                <div className="-ms-[5px] me-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500" />
                <p className="text-lg tracking-wide ">2020 - 2021</p>
              </div>
              <div className="mb-6 ms-4 mt-2">
                <h4 className="mb-1.5 text-2xl tracking-wider font-semibold">
                  Title of section 1
                </h4>
                <p className="mb-10  text-xl opacity-75 tracking-wide ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque scelerisque diam non nisi semper, et elementum lorem
                  ornare. Maecenas placerat facilisis mollis. Duis sagittis
                  ligula in sodales vehicula.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default About;

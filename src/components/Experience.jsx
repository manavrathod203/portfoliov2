import React from "react";

function Experience() {
  return (
    <div className="border-t xl:border-none pt-10 ">
      <h2 className="font-['Clash_Display']  text-4xl md:text-6xl xl:text-7xl uppercase">
        experience
      </h2>
      {/* timeline */}
      <ol className=" mt-10 border-s border-neutral-300 ">
        {/*First item*/}
        <li>
          <div className="flex-start flex items-center pt-3">
            <div className="-ms-[5px] me-3 h-[9px] w-[9px] rounded-full bg-neutral-300 " />
            <p className="text-base opacity-75 tracking-wide uppercase">
              may 2023 - june 2023
            </p>
          </div>
          <div className="mb-6 ms-4 mt-2">
            <h4 className="mb-1.5 text-xl md:text-2xl tracking-wider font-semibold">
              Frontend Developer Intern
            </h4>
            <h5 className="mb-1.5 text-lg italic tracking-wider ">
              Zeliant InfoServe Pvt Ltd.
            </h5>
            <p className="mb-10 md:text-xl opacity-65 tracking-wide w-full lg:w-[80%] font-thin">
              Worked in a team to build frontend interfaces and components for
              company products, utilizing HTML, CSS, JavaScript, and Bootstrap.{" "}
            </p>
          </div>
        </li>
        {/* Second item */}
        <li>
          <div className="flex-start flex items-center pt-3">
            <div className="-ms-[5px] me-3 h-[9px] w-[9px] rounded-full bg-neutral-300 " />
            <p className="text-base opacity-75 tracking-wide uppercase">
              June 2024 - July 2024
            </p>
          </div>
          <div className="mb-6 ms-4 mt-2">
            <h4 className="mb-1.5 text-xl md:text-2xl tracking-wider font-semibold">
              Frontend Developer Intern
            </h4>
            <h5 className="mb-1.5 text-lg italic tracking-wider ">
            Aptech Ltd.
            </h5>
            <p className="mb-10 md:text-xl opacity-65 tracking-wide w-full lg:w-[80%] font-thin">
            Developed responsive dashboard interfaces for company projects using React.js, Redux Toolkit, Chart.js, Tailwind CSS, 
            and JavaScript. Utilized various AI tools and UI component libraries to write clean and efficient code.{" "}
            </p>
          </div>
        </li>
      </ol>
      {/* timeline  end*/}
    </div>
  );
}

export default Experience;

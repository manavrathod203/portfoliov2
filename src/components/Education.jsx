import React from 'react'

function Education() {
  return (
    <div className="border-t xl:border-none  pt-10 ">
          <h2 className="font-['Clash_Display']  text-4xl md:text-6xl xl:text-7xl uppercase">
            Education
          </h2>
          {/* timeline */}
          <ol className=" mt-10 border-s border-neutral-300 dark:border-neutral-500">
            {/*First item*/}
            <li>
              <div className="flex-start flex items-center pt-3">
                <div className="-ms-[5px] me-3 h-[9px] w-[9px] rounded-full bg-neutral-300 " />
                <p className="text-base opacity-75 tracking-wide uppercase">2021 - 2025</p>
              </div>
              <div className="mb-6 ms-4 mt-2">
                <h4 className="mb-1.5 text-xl md:text-2xl tracking-wider font-semibold">
                  B.E (Artificial Intelligence & Data Science)
                </h4>
                <h5 className="mb-1.5 text-lg italic tracking-wider ">
                Vasantdada Patil Pratishthan's College of Engineering
                </h5>
                <p className="mb-10 md:text-xl opacity-65 tracking-wide w-full xl:w-[80%] font-thin">
                  CGPA: 9.57 (Till 6th semester)
                </p>
              </div>
            </li>
            {/*First item*/}
            <li>
              <div className="flex-start flex items-center pt-3">
                <div className="-ms-[5px] me-3 h-[9px] w-[9px] rounded-full bg-neutral-300 " />
                <p className="text-base opacity-75 tracking-wide uppercase">2019 - 2021</p>
              </div>
              <div className="mb-6 ms-4 mt-2">
                <h4 className="mb-1.5 text-xl md:text-2xl tracking-wider font-semibold">
                  HSC (Higher Secondary Education)
                </h4>
                <h5 className="mb-1.5 text-lg italic tracking-wider ">
                  Shri TP Bhatia College of Science
                </h5>
                <p className="mb-10 md:text-xl opacity-65 tracking-wide w-full xl:w-[80%] font-thin">
                  Percentage: 93.34 %
                </p>
              </div>
            </li>
          </ol>
        </div>
  )
}

export default Education
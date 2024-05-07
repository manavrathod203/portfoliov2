import React from 'react'

function Experience() {
  return (
    <div className="border-t  pt-10 ">
          <h2 className="font-['Clash_Display']  text-4xl md:text-6xl xl:text-7xl uppercase">
            experience
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
  )
}

export default Experience
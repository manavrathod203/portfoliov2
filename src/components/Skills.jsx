import React from "react";

function Skills() {
  const skills = [
    {
      name: "Frontend",
      skillName: [
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
        "Tailwind CSS",
        "Bootstrap",
        "Figma",
        // "Responsive Design",
      ],
    },

    {
      name: "Backend ",
      skillName: ["Node.js", "Express.js", "MongoDB"],
    },
    {
      name: "Tools ",
      skillName: ["GitHub", "Render", "Netlify"],
    },
  ];
  return (
    <div
      id="skills"
      className="w-full  bg-[#252422] rounded-t-[20px] md:rounded-t-[30px] xl:rounded-t-[50px] py-12 md:py-16 xl:py-28 px-5 md:px-10 lg:px-20 xl:px-20 text-[#e8e8e3]"
    >
      <div className="mb-24">
        <h2 className="font-['Clash_Display']  text-4xl md:text-6xl xl:text-7xl whitespace-nowrap uppercase">
          skillset
        </h2>
        <p className="tracking-wide text-xl md:text-3xl  mt-4 opacity-60 font-[300]">
          These are some of the skills I excel at and primarily utilize during
          development. I've learned these skills through hands-on implementation
          and developing relevant projects.
        </p>
      </div>
      <div className="w-full flex flex-col border-t-[1px]">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-[#] flex flex-col justify-start xl:flex-row xl:items-start  py-5 md:py-8 gap-4 lg:gap-8 border-b-[1px]"
          >
            <p className="font-['Clash_Display'] text-4xl lg:text-5xl capitalize w-[25%]">
              {skill.name}
            </p>
            <div className="flex gap-2 lg:gap-5 flex-wrap xl:w-[75%]">
              {skill.skillName.map((item, index) => (
                <div
                  key={index}
                  className=" px-3 py-2 md:px-5 md:py-3 border-[1px] border-[#e8e8e3] tracking-wider rounded-full text-sm md:text-base  text-[#e8e8e3] whitespace-nowrap"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;

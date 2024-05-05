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
    
    <div id="skills" className="w-full  bg-[#252422] rounded-t-[20px] md:rounded-t-[30px] xl:rounded-t-[50px] py-12 md:py-16 xl:py-28 px-5 md:px-10 lg:px-20 xl:px-20 text-[#e8e8e3]">
      <div className="mb-24">
        <h2 className="font-['Clash_Display']  text-4xl md:text-6xl xl:text-7xl whitespace-nowrap uppercase">Tech Stack</h2>
        <p className="tracking-wide text-xl md:text-3xl  mt-4 opacity-60">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dolorem
          numquam itaque quia inventore vel laudantium harum sint molestias,
          totam cumque ipsum commodi quae eum aperiam similique saepe nemo est.
        </p>
      </div>
      <div className="w-full flex flex-col border-t-[1px]">
        {skills.map((skill, index) => (
          <div key={index} className="bg-[#] flex flex-col justify-start xl:flex-row xl:items-start  py-5 md:py-8 gap-4 lg:gap-8 border-b-[1px]">
            <p className="font-['Clash_Display'] text-4xl lg:text-5xl capitalize w-[25%]">
              {skill.name}
            </p>
            <div className="flex gap-5 flex-wrap xl:w-[75%]">
              {skill.skillName.map((item, index) => (
                <div className="bg-[#e8e8e3] px-3 py-2 md:px-5 md:py-3 font-semibold tracking-wider rounded-full xl:text-xl text-[#252422] whitespace-nowrap">
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

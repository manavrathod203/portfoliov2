import React, { useEffect, useState } from "react";
import { IoArrowUp } from "react-icons/io5";
function Projects() {
  const [categories, setCategories] = useState([]);
  const [select, setSelect] = useState("all");
  const projects = [
    {
      name: "Comment Compass",
      des: "A tool that helps creator find their next video idea based on comments from viewers on previous videos.  ",
      img: "/src/assets/images/comment_compass_thumbnail.png",
      techStack: ["Node","Express", "Python"," EJS", "Open AI API", "Tailwind CSS"],
      code: "https://github.com/manavrathod203/youtubeV3",
      live: "https://drive.google.com/file/d/1fg7Uod-6p086k19EDQxU89MWb6cQHxJ8/view",
      category: "unique ideas",
    },
    {
      name: "React Shopping Cart",
      des: "Developed a shopping cart module with functionalities as Add to Cart, Remove from cart, Filter products based on categories.",
      techStack: ["React.js", "Redux Toolkit", "Tailwind CSS"],
      img: "/src/assets/images/react_cart.png",
      code: "https://github.com/manavrathod203/react-cart",
      live: "https://react-cartv1.vercel.app/",
      category: "Frontend",
    },
    {
      name: "Pinterest Clone",
      des: "Developed a photo sharing app clone with functionalities such as authentication, upload post, view post by all other users",
      techStack: ["Node.js", "Express.js","MongoDB","EJS","Tailwind CSS"],
      img: "/src/assets/images/pinterest_clone.png",
      code: "https://github.com/manavrathod203/pinterestv2",
      live: "https://drive.google.com/file/d/1gKxtu8D2SiHvI2xCCRzjPUwWiNMpGG_A/view?usp=sharing",
      category: "full stack",
    },
  ];
  const uniqueCategories = () => {
    const uniqueCategories = [
      ...new Set(projects.map((item) => item.category)),
    ];
    setCategories(uniqueCategories);
    console.log(categories);
  };

  useEffect(() => {
    uniqueCategories();
  }, []);
  return (
    <div id="projects" className="px-5 md:px-10 lg:px-20 xl:px-20 py-16 xl:py-28 text-[#252422] ">
      <div className="mb-24">
        <h2 className="font-['Clash_Display'] text-4xl md:text-6xl xl:text-7xl whitespace-nowrap uppercase">Projects</h2>
        <div className="flex items-center justify-start flex-wrap gap-2 md:gap-4 mt-4">
          <button
            onClick={() => setSelect("all")}
            className={`uppercase text-sm md:text-xl tracking-wider border-2 px-4 py-2 rounded-full border-[#252422] whitespace-nowrap  ${
              select === "all" ? "bg-[#252422] text-[#e8e8e3]" : ""
            }`}
          >
            all
          </button>

          {categories.map((item, index) => (
            <button
              key={index}
              className={`uppercase text-sm md:text-xl tracking-wider border-2 px-4 py-2 rounded-full border-[#252422] whitespace-nowrap  ${
                select === item ? "bg-[#252422] text-[#e8e8e3]" : ""
              }`}
              onClick={() => setSelect(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="mt-8 md:mt-16 grid xl:grid-cols-2  gap-4">
          {projects.map((item, index) => {
            if (select === "all" || select === item.category) {
              return (
                <div key={index} className="bg-[#2524223a] p-2 rounded-xl md:rounded-3xl ">
                  <div className="relative group rounded-lg md:rounded-2xl overflow-hidden">
                    <div className="w-full rounded-lg md:rounded-2xl overflow-hidden group-hover:blur-lg aspect-ratio-w-16 aspect-ratio-h-9">
                      <img
                        src={item.img}
                        alt=""
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    <div className="p-5 overflow-hidden rounded-lg md:rounded-2xl text-white flex flex-col items-start justify-end  md:justify-between w-full h-full aspect-ratio-w-16 aspect-ratio-h-9 bg-[#22212100]  absolute top-0  group-hover:bg-[#000000b9]  transition-all duration-300 ease-in-out">
                      <div className="hidden md:block">
                        <p className="tracking-wider opacity-0 group-hover:opacity-100 text-lg transition-all duration-300 ease-in-out border-b pb-4 border-opacity-30">
                          {item.des}
                        </p>
                        <div className=" opacity-0 group-hover:opacity-100  transition-all duration-300 ease-in-out mt-4 flex items-center flex-wrap gap-3">
                          {item.techStack.map((item,index)=>(
                            <span className="tracking-wider text-sm px-2 py-1 text-black bg-white rounded-full">{item}</span>
                          ))}
                        </div>
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 flex flex-col gap-4 transition-all duration-300 ease-in-out">
                        <div className="flex items-center gap-4">
                          <a
                            href={item.live}
                            target="_blank"
                            className="bg-blue-600 hover:bg-white hover:text-black px-4 py-2 rounded-full uppercase flex items-center justify-center gap-2 group"
                          >
                            Live <IoArrowUp className="rotate-[45deg]" />
                          </a>
                          <a
                            href={item.code}
                            target="_blank"
                            className="bg-blue-600 hover:bg-white hover:text-black px-4 py-2 rounded-full uppercase flex items-center justify-center gap-2"
                          >
                            Code <IoArrowUp className="rotate-[45deg]" />
                          </a>
                        </div>
                        <p className="text-2xl md:text-3xl font-semibold tracking-wider">
                          {item.name}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default Projects;

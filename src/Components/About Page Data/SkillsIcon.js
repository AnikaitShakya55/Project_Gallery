import React from "react";
import HtmlIcon from "../../Assests/html.png";
import reactIcon from "../../Assests/atom.png";
import cssIcon from "../../Assests/css-3.png";
import javaIcon from "../../Assests/js.png";
import nextIcon from "../../Assests/nextjs.png";
import bootStrapIcon from "../../Assests/bootStrap.png";
import nodeIcon from "../../Assests/nodejs.png";
import tailwindIcon from "../../Assests/tailwind.png";
import muiIcon from "../../Assests/muiLogo.png";
import envIcon from "../../Assests/envLogo.png";

const SkillsIcon = () => {
  const iconStyle =
    "h-14 w-14 md:h-16 md:w-16 transition-transform duration-200 hover:scale-110 drop-shadow-md";

  const iconWrapper =
    "w-20 h-20 flex items-center justify-center bg-white/5 rounded-lg";

  return (
    <section className="bg-slate-500 bg-opacity-25 p-2 md:p-12 my-12 rounded-2xl w-[95vw] md:w-[70vw] mx-auto font-sans text-gray-100 shadow-xl backdrop-blur-md border border-white/20">
      <div className="flex justify-center mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide">
          SKILLS
        </h1>
      </div>

      <div className="flex flex-wrap justify-center gap-8 md:gap-20">
        {[HtmlIcon, cssIcon, javaIcon, reactIcon, nextIcon].map((icon, i) => (
          <div key={i} className={iconWrapper}>
            <img src={icon} alt={`Skill ${i}`} className={iconStyle} />
          </div>
        ))}
      </div>

      <div className="flex flex-wrap mt-4 mb-4 justify-center gap-8 md:gap-20">
        {[nodeIcon, bootStrapIcon, tailwindIcon, muiIcon, envIcon].map(
          (icon, i) => (
            <div key={i + 5} className={iconWrapper}>
              <img src={icon} alt={`Skill ${i + 5}`} className={iconStyle} />
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default SkillsIcon;

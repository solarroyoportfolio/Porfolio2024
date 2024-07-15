import React, { useState } from "react";
import { HomeIcon } from "../../components/HomeIcon";
import { UserIcon } from "../../components/UserIcon";
import { SkillsIcon } from "../../components/SkillsIcon";
import { ServicesIcon } from "../../components/ServicesIcon";
import { ContactIcon } from "../../components/ContactIcon";
import { BrushIcon } from "../../components/BrushIcon";

export const Nav = () => {
  const [active, setActive] = useState("#");

  return (
    <nav className="text-color_gray inline-flex  bg-[#0000004d] w-auto py-4 px-8 z-20 fixed bottom-8 justify-center items-center transform -translate-x-[50%] left-1/2 lg:gap-6 gap-2  rounded-[3rem] backdrop-blur-sm">
      <a
        onClick={() => setActive("#")}
        className={`p-3 rounded-[3rem]  text-[1rem] ${active === "#" ? "active bg-color_primary text-color_bg" : "hover:bg-[#0000004d] hover:text-color_white"}
        `}
        href="#"
      >
        <HomeIcon />
      </a>
      <a
        onClick={() => setActive("#about")}
        className={`  p-3 rounded-[3rem]  text-[1.1rem] ${active === "#about" ? "active bg-color_primary text-color_bg" : "hover:bg-[#0000004d] hover:text-color_white"}
        `}        href="#about"
      >
        <UserIcon />
      </a>
      <a
        onClick={() => setActive("#skills")}
        className={`  p-3 rounded-[3rem]  text-[1.1rem] ${active === "#skills" ? "active bg-color_primary text-color_bg" : "hover:bg-[#0000004d] hover:text-color_white"}
        `}        href="#skills"
      >
        {" "}
        <SkillsIcon />
      </a>
      <a
        onClick={() => setActive("#services")}
        className={`  p-3 rounded-[3rem]  text-[1.1rem] ${active === "#services" ? "active bg-color_primary text-color_bg" : "hover:bg-[#0000004d] hover:text-color_white"}
        `}        href="#services"
      >
        {" "}
        <ServicesIcon />
      </a>
      <a
        onClick={() => setActive("#design")}
        className={`  p-3 rounded-[3rem]  text-[1.1rem] ${active === "#design" ? "active bg-color_primary text-color_bg" : "hover:bg-[#0000004d] hover:text-color_white"}
        `}        href="#design"
      >
        {" "}
        <BrushIcon />
      </a>
      <a
        onClick={() => setActive("#contact")}
        className={`  p-3 rounded-[3rem]  text-[1.1rem] ${active === "#contact" ? "active bg-color_primary text-color_bg" : "hover:bg-[#0000004d] hover:text-color_white"}
        `}        href="#contact"
      >
        {" "}
        <ContactIcon />
      </a>
    </nav>
  );
};

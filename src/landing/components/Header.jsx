import { Cta } from "../../components/Cta";
import { SocialHeader } from "../../components/SocialHeader";
import { IoIosArrowForward } from "react-icons/io";
import { TypeAnimation } from "react-type-animation";

export const Header = () => {
  return (
    <div className="h-[96vh] pt-28 overflow-hidden leading-10 text-color_white" id="home">
      <div className="text-center h-full relative flex-col justify-center items-center">
        <h5> Hello I'm </h5>
        <TypeAnimation
          sequence={["Maria", 500, "Sol", 500, "Arroyo", 500]}
          style={{ fontSize: "2em"}}
          repeat={Infinity}
        />
        {/* <h1 className="text-3xl font-medium">María Sol Arroyo</h1> */}
        <div className="text-light text-xl text-color_gray mt-2 opacity-65">
          FrontEnd Web Developer
        </div>
        <TypeAnimation className="text-color_primary"
    preRenderFirstString={true}
    sequence={[
      500,
      'I"m a developer especializing in HTML',
      1000,
      'I"m a developer especializing in CSS ',
      1000,
      'I"m a developer especializing in JAVASCRIPT',
      1000,
      'I"m a developer especializing in REACT',
      500,
      'I"m a developer especializing in PHP',
      500,
      'I"m a developer especializing in TAILWIND',
      500,
    ]}
    speed={50}
    style={{ fontSize: '.8rem' }}
    repeat={Infinity}
  />

        <Cta button1="Download CV" button2="Let's Talk" link1="https://drive.google.com/file/d/1zPR-rxqti4z9hlEsiXwapkSG767DM65L/view" link2="#contact"/>
        <div className="relative mt-16 pt-[.6rem] px-[1.5rem] pb-[1.5rem] flex justify-center items-center ">
          <img
            src="/mepng.png"
            className="w-80   rounded-[12rem] bg-gradient-to-b from-color_primary to-color_bg_variant "
            alt=""
          />
        </div>
        <a
          href="#contact"
          className="flex justify-center items-center gap-2 text-color_primary absolute lg:right-10 right-0 bottom-1/2 rotate-90 "
        >
          Scroll Down <IoIosArrowForward />
        </a>

        <div className="fixed top-1/2 z-50 left-1">
          <SocialHeader />
        </div>
      </div>
    </div>
  );
};

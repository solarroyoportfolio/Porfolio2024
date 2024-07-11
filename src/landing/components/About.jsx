import { SectionTitles } from "../../components/SectionTitles";

export const About = () => {
  return (
    <div
      id="about"
      className="min-h-96 justify-center text-center items-center lg:p-20 p-12 py-12 lg:pb-10 leading-10"
    >
     <SectionTitles subtitle="Get to know me" title="About" />

      <div className="justify-center items-center lg:flex my-2 ">
        <div className="lg:mr-24 rounded-full bg-gradient-to-br from-color_transparent to-color_primary lg:flex items-center justify-center overflow-hidden opacity-80 mb-12 ">
          <div className="rounded-[2rem] overflow-hidden transform rotate-[8deg] hover:rotate-0">
            <img src="/mepng.png" className="" alt="" />
          </div>
        </div>
        <div className="lg:text-start lg:w-1/2 justify-center items-center">
          <p className="leading-normal text-color_white mb-8">
            Hi my name is Maria Sol, I'm a Frontend Web developer and I'm from Argentina 🇦🇷
          </p>
          <p className="leading-normal text-color_white mb-8">
            Back in 2009, I started just with Corel Draw exploring what design
            means creating for my self my first designs. I had the privilige of
            start studying Computer engineering and tumbled head first into
            coding and development but it was not until 2020 that I built my
            first webpage with <span className="font-bold text-color_primary">HTML, CSS and Javascript.</span>
          </p>
          <p className="leading-normal text-color_white mb-8">
          I become a <span className="font-bold text-color_primary">FrontEnd Web developer</span> and coding has become my passion the last years. I love seeing the results of my efforts. I really enjoy learning and exploring technologies. I also try to increase my creative skills by learning about design too.
          </p>

          <a
            className="bg-color_primary rounded-md border border-color_primary px-6 py-2 text-color_bg"
            href="#contact"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </div>
  );
};

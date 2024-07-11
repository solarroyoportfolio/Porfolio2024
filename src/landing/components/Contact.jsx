import { SectionTitles } from "../../components/SectionTitles";
import { MdOutlineAttachEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export const Contact = () => {
  return (
    <div className="h-full pb-28 justify-center items-center " id="contact">
      <SectionTitles subtitle="Get in touch" title="Contact" />
      <div className="lg:flex flex-col justify-center items-center gap-10">
        <div className=" lg:flex justify-center items-center text-center gap-20 px-16">
          <div className="bg-color_bg_variant lg:p-16 p-12 mb-6 rounded-3xl text-color_white justify-center items-center text-center ">
            <div className="flex justify-center items-center text-xl text-color_primary">
              <MdOutlineAttachEmail />
            </div>
            <p>E-mail</p>
            <p className="font-thin text-[0.8rem]">mariasolarroyoc@gmail.com</p>
            <a
              href="mailto:mariasolarroyoc@gmail.com"
              target="_blank"
              className="text-color_primary"
            >
              Send a message
            </a>
          </div>
          <div className="bg-color_bg_variant lg:p-16 p-12  mb-6 rounded-3xl text-color_white justify-center items-center text-center ">
            <div className="flex justify-center items-center text-xl text-color_primary">
              <FaGithub />
            </div>
            <p>Github</p>
            <p className="font-thin text-[0.8rem]">MariaSolArroyo</p>
            <a
              href="https://github.com/MariaSolArroyo"
              target="_blank"
              className="text-color_primary"
            >
              Send a message
            </a>
          </div>
          <div className="bg-color_bg_variant lg:p-16 p-12  mb-6 rounded-3xl text-color_white justify-center items-center text-center ">
            <div className="flex justify-center items-center text-xl text-color_primary">
              <FaLinkedinIn />
            </div>
            <p>LinkedIn</p>
            <p className="font-thin text-[0.8rem]">mariasolarroyoc</p>
            <a
              href="https://www.linkedin.com/in/mariasolarroyoc/"
              target="_blank"
              className="text-color_primary"
            >
              Send a message
            </a>
          </div>
        </div>
        {/* <div className="flex justify-center items-center">
          <form action="mailto:mariasolarroyoc@gmail.com" className="justify-center items-center w-96 ">
           <div>
           <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
              className="p-4 bg-color_transparent border-color_primary border-[0.7px] rounded-xl mb-2 w-full text-xl text-color_white"
            />
           </div>
           <div>
           <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="p-4 bg-color_transparent border-color_primary border-[0.7px] rounded-xl mb-2 w-full text-xl text-color_white"

            />
           </div>
           <div>
           <textarea
              name="message"
              rows="7"
              placeholder="Your Message"
              required
              className="p-4 bg-color_transparent border-color_primary border-[0.7px] rounded-xl mb-2 w-full text-xl text-color_white"

            ></textarea>
           </div>
            <button type="submit" className="bg-color_primary text-color_bg px-4 py-3 flex justify-center items-center gap-2 text-xl">
            Send  <LuSendHorizonal />
            </button>
          </form>
        </div> */}
      </div>
    </div>
  );
};


import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";



const Home = () => {
  return (
    <section id="home" className="w-full inline-block gap-8 p-4 mb-6">
      <div className="flex justify-start gap-5 mt-4 p-4 md:justify-center lg:justify-center ">
        <div className="text-white">
          <a href="https://github.com/Lizmadelyne" target="_blank">
            <FaGithub size={40} />
          </a>
        </div>
        <div className="text-white">
          <a href="https://twitter.com/lizfajardop" target="_blank">
            <FaTwitter size={40}/>
          </a>
        </div>
        <div className="text-white">
          <a href="https://www.linkedin.com/in/liz-madelyne-fajardo/" target="_blank">
            <FaLinkedin size={40} />
          </a>
        </div>
      </div>
      <div className="inline-block gap-12">
        <span className="text-lg font-semibold text-white md:text-2xl p-4 mb-4">Hi,  my name is:</span>
        <h1 className="text-2xl text-fuchsia-900 md:text-6xl p-4">Liz Madelyne Fajardo</h1>
        <span className="text-white p-4 ">I am web developer,</span>
        <p className="text-white p-4">I love to create good products, and learn new things all time,  i am happy learning Javascript and i expect go far...</p>
     
      <div className=" flex p-4">
        <button className="flex items-center cursor-pointer">
          <a href="#contact" className="flex gap-4  text-white text-lg ">
            Contact Me <FaArrowRight className="text-fuchsia-900 font-bold" />
          </a>
        </button>
      </div>
      </div>
    </section>
  );
};
export { Home };

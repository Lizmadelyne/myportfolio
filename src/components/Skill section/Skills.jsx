
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTailwindcss } from "react-icons/si";
import { FaCss3 } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { RiEnglishInput } from "react-icons/ri";
//import "./skills.scss";

const Skills = () =>{
    return(
     <section id="skills" className=" p-4 mt-6 w-full relative mb-6">
        <div className=" flex items-center gap-4 mb-4">
            <span className="text-lg  text-rose-300">0.2</span>
             <h5 className="text-white text-lg">
                Skills
            </h5>
        </div>

                <div className="p-2 mb-4">
                    <h2  className="text-fuchsia-900 font-semibold"> Frontend Web Developer</h2>
                </div>

                <div className=" grid grid-cols-2  md:grid-cols-3 lg:grid-cols-3  ">
                    <div className=" flex flex-col justify-center items-center ">
                        <div className=" relative h-16 w-[50px] bg-white border-2 border-solid border-purple-500 z-50 overflow-hidden rounded-[3rem] content-center p-2 hover:text-white hover:bg-teal-400 items-center">
                            <FaReact size={28} className="place-content-center"/>
                        </div>
                        <span className=" text-white font-lg p-2 mt-2 mb-4 place-content-center ">React</span>
                    </div>
                    <div className=" flex flex-col justify-center items-center">
                        <div className="  h-16 w-[50px] bg-white border-2 border-solid border-purple-500 z-50 overflow-hidden rounded-[3rem] content-center p-2  hover:text-white hover:bg-teal-400 j items-center">
                            < IoLogoJavascript size={28}/>
                        </div>
                        <span className="text-white font-lg p-2 mt-2 mb-2">Javascript</span>
                    </div>
                    <div className=" flex flex-col justify-center items-center">
                        <div className=" relative h-16 w-[50px] bg-white border-2 border-solid border-purple-500 z-50 overflow-hidden rounded-[3rem] content-center p-2  hover:text-white hover:bg-teal-400">
                            <SiTailwindcss size={28}/>
                        </div>
                        <span className="text-white font-lg p-2 mb-2">Tailwind</span>
                    </div>
                    <div className=" flex flex-col justify-center items-center">
                        <div className=" relative h-16 w-[50px] bg-white border-2 border-solid border-purple-500 z-50 overflow-hidden rounded-[3rem] content-center p-2  hover:text-white hover:bg-teal-400">
                            <FaCss3 size={28}/>
                        </div>
                        <span className="text-white font-lg p-2 mb-2">CSS</span>
                    </div>
                    <div className=" flex flex-col justify-center items-center">
                        <div className=" relative h-16 w-[50px] bg-white border-2 border-solid border-purple-500 z-50 overflow-hidden rounded-[3rem] content-center p-2  hover:text-white hover:bg-teal-400">
                            <FaHtml5 size={28}/>
                        </div>
                        <span className="text-white font-lg p-2 mb-2">HTML5</span>
                    </div>
                    <div className=" flex flex-col justify-center items-center">
                        <div  className=" relative h-16 w-[50px] bg-white border-2 border-solid border-purple-500 z-50 overflow-hidden rounded-[3rem] content-center p-2  hover:text-white hover:bg-teal-400">
                            <RiEnglishInput size={28}/>
                        </div>
                        <span className="text-white font-lg p-2 mb-2">English</span>
                    </div>
                </div>
     </section>
    )
}
export { Skills };
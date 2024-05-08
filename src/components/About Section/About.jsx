import { FaCloudDownloadAlt } from "react-icons/fa";
import photo from '../../../Assest/my-photo.jpg';
import './style.css';

const About = () =>{

    function handleDownload() {
        const link = document.createElement('a');
        link.href = './Liz-Madelyne-CV-2024.pdf';
        link.download = 'Liz-Madelyne-CV-2024.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    return(
        <section id="about" className="relative p-4 w-full mt-3 bg-gradient-to-r hover:bg-gradient-to-l from-purple-500 to-blue-300">
        
    <div className="flex gap-4 mb-4" >
            <span className="text-lg text-rose-300">
                0.1
            </span>
            <h5 className="text-blue-900 text-lg font-semibold">About me</h5>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 justify-center items-center">
            <div className="p-2 m-auto">
                <p className="text-gray-900 text-lg ml-3">I am a creative person passionate about learning. Although i do not have formal work experience yet, I have  invested time in developing my skills in web development through online courses and personal  projects. I consider myself  an organized, persistent, and  a strong desire to grow professionally.
                </p>

                <div className=" p-4">
                <button onClick={handleDownload} className="text-slate-700 font-bold mt-4">
                        Download CV 
                        <FaCloudDownloadAlt size={30}/>
                    </button>
                </div>
            </div>
            
        <div className="p-4 flex justify-center items-center" >
        
            <div className=" w-[220px] h-[220px]  m-8 rounded-full relative overflow-hidden grid border-2 border-dashed border-fuchsia-300">
            <div className="rounded-full border border-dashed absolute inset-0 md"></div>
            <img src={photo} alt="Liz Madelyne" className="object-contain rounded-full" />
        </div>

            </div>
        
    </div>

        </section>
    )
}
export {About};
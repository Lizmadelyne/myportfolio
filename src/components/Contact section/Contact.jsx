import { useRef, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import emailjs from "@emailjs/browser";
//import emailjs from 'emailjs-com';

const Contact = () => {
  const [isSent, setIsSent] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
   
    e.preventDefault();

    emailjs.sendForm(
      "service_fwztgx5",
      "template_o7gd38w",
      form.current,
      "pvyh66VTZ4a0Vlf61"
    );
    setIsSent(true)
    e.target.reset(); //will reset after submit
  };

  return (
    <section id="contact" className="p-4 mt-4">
      <div className="flex gap-4 items-center">
        <span className="text-lg text-fuchsia-400">04.</span>
        <h5 className=" text-white text-lg font-bold">Contact Me</h5>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div className=" flex flex-col justify-center items-center">
          <h3 className="text-white mb-4 md:mb-0 md:text-left">Talk to me</h3>
          <div className="text-green-400 flex justify-center p-4">
            <a href="https://wa.me/573124040474">
              <FaWhatsapp size={40} />
            </a>
          </div>
        </div>

        <div className="">
          <h3 className="text-white text-lg p-4 flex justify-center" >Send me and email</h3>

          <form ref={form} onSubmit={sendEmail} className="space-y-4 bg-transparent grid items-center justify-center ">
            <input className="bg-transparent text-white text-lg border-b-2 border-sky-300 mb-2 p-2 focus:outline-none " type="text" placeholder="Enter your Name" name="name" />
            <input className="bg-transparent text-white text-lg border-b-2 border-sky-300 mb-2 p-2 focus:outline-none" type="email" placeholder="Enter your Email" name="email" />
            <textarea
            className=" bg-transparent  text-white text-lg  border-2 border-sky-300  p-2 mt-2 rounded-sm focus:outline-none"
              name="message"
              id=""
              cols="30"
              rows="10"
              placeholder="Enter your message"
            ></textarea>
            <button className="text-white bg-fuchsia-900 h-12 rounded-md text-lg w-[50%] hover:bg-slate-400 " type="submit" name="submit">
              send Email
            </button>
          </form>
          {isSent && <p className="flex justify-center text-2xl text-white mt-2" >Done!!</p>}
        </div>
      </div>
    </section>
  );
};
export { Contact };

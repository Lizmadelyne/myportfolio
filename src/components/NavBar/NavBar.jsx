import { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";


const Navbar = () => {

const  [isMenuOpen, setIsMenuOpen] = useState(false)

const showMenu = () => {
  setIsMenuOpen(!isMenuOpen);
};

  const closeMenu = () => {
    setIsMenuOpen(false);
  };


const [activeHeader, setActiveHeader] = useState('header')

  const addBg = () =>{
    if(window.scrollY >= 10){
      setActiveHeader('header activeHeader')
    }else {
      setActiveHeader('header')
    }
   
  }
  console.log(activeHeader)
  window.addEventListener('scroll', addBg)
//className={activeHeader} 
  return (
    <header className="  bg-white h-16 flex w-full justify-between">
      <div className="">
        <h1 className="p-2">
          <a className=" text-fuchsia-900  text-6xl" href="#home">LIZ</a>
        </h1>
      </div>

      <div className='p-2 flex' >
        <ul className= {`md:flex lg:flex justify-around gap-4 p-4  z-10 ${isMenuOpen ? 'block bg-white rounded-sm' : 'hidden' }`} onClick={closeMenu}  >
          <li className="">
            <a href="#about" className="text-lg text-fuchsia-900 hover:text-xl">
             About
            </a>
          </li>
          <li className="navItem">
            <a href="#skills" className="text-lg text-fuchsia-900  hover:text-xl">
              Skills
            </a>
          </li>
          <li className="navItem">
            <a href="#projects" className="text-lg text-fuchsia-900  hover:text-xl">
              Projects
            </a>
          </li>
          <li className="navItem">
            <a href="#contact" className="text-lg text-fuchsia-900  hover:text-xl">
            Contact
            </a>
          </li>
        </ul>
       
      </div>
      <div className="md:hidden lg:hidden mt-2 p-4 text-4xl text-purple-600">
        {isMenuOpen ? (
          <IoIosCloseCircle onClick={showMenu} />
        ) : (
          <TbGridDots className="icon" onClick={showMenu} />
        )}
      </div>
   
    </header>
  );
};
export  { Navbar };

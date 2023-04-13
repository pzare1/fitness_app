import React, { useEffect, useState } from "react";
import { IoMdFitness } from "react-icons/io";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [navPosition, setnavPosition] = useState(0)
  useEffect(() => {
    const handlePosition = () => {
      setnavPosition(window.pageYOffset)
    };
    window.addEventListener("scroll",handlePosition)
    return () => {
    window.removeEventListener("scroll",handlePosition)
    }
  }, [])
  const navClass = `fixed top-0 left-0 w-full py-2 px-2 md:px-4 z-50 ${
    navPosition > 30 ? "bg-white" : "bg-transparent"
  }`;

  return (
    <nav className={navClass}>
      <div className="flex items-center justify-start">
        <div className="flex items-center">
          <IoMdFitness className="text-3xl text-gray-500 mr-2" />
          <span className="text-gray-500 text-lg font-medium">Fitness Calc</span>
        </div>
        <div className="hidden md:flex md:items-center  ml-20">
          <Link
            to="#responsive-header"
            className="text-gray-700 text-lg font-light border-offset-8 border-b-2 border-gray-100   hover:border-blue-500 hover:text-gray-500 mr-10 transition-all duration-200"
          >
            Home
          </Link>
          <Link
            to="#responsive-header"
            className="text-gray-700 text-lg font-light border-offset-8 border-b-2 border-gray-100   hover:border-blue-500  hover:text-gray-500 mr-10 transition-all duration-200"
          >
            Exercises
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

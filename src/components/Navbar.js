import React, { useState } from "react";
import { IoMdFitness } from "react-icons/io";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-50 py-4 px-6 md:px-10 z-50">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <IoMdFitness className="text-3xl text-gray-700 mr-2" />
          <span className="text-gray-700 text-lg font-semibold">Fitness App</span>
        </div>
        <div className="flex md:hidden">
          {isOpen ? (
            <FaTimes className="text-gray-700 text-2xl" onClick={handleToggle} />
          ) : (
            <FaBars className="text-gray-700 text-2xl" onClick={handleToggle} />
          )}
        </div>
        <div className="hidden md:flex md:items-center ">
          <a
            href="#responsive-header"
            className="text-gray-700 text-lg font-light border-offset-8 border-b-2  hover:border-orange-500 hover:text-gray-500 mr-10 transition-all duration-200"
          >
            Home
          </a>
          <a
            href="#responsive-header"
            className="text-gray-700 text-lg font-light border-offset-8 border-b-2  hover:border-orange-500  hover:text-gray-500 mr-10 transition-all duration-200"
          >
            Exercises
          </a>
        </div>
      </div>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden mt-4`}
      >
        <a
          href="#responsive-header"
          className="block text-gray-700 text-lg font-light py-2 hover:text-gray-200"
        >
          Home
        </a>
        <a
          href="#responsive-header"
          className="block text-gray-700 text-lg font-light py-2 hover:text-gray-200"
        >
          Exercises
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

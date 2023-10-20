import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import profileImg from "../img/profileImg3.png";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b-2 bg-white w-full">
      {/* Desktop navbar */}
      <div className="hidden md:flex h-[12vh] justify-between items-center text-lg font-medium uppercase">
        <div className="flex items-center ml-6">
          <div className="w-16 h-16 flex items-center mr-2">
          <a
            href="https://drive.google.com/file/d/1Z7Jx_vBHK70v1sB6k3Odi7U9gj9K9pj2/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="transition-colors duration-300 hover:text-emerald-500"
          >
            <img
              className="rounded-full border-2 border-emerald-300"
              src={profileImg}
              alt="profile image"
            />
            </a>
          </div>
          <div className="transition-colors duration-300 hover:text-emerald-500">
          <a
            href="https://drive.google.com/file/d/1Z7Jx_vBHK70v1sB6k3Odi7U9gj9K9pj2/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="transition-colors duration-300 hover:text-emerald-500"
          >
            Vaibhav Sharma
          </a>
          </div>
        </div>

        <div className="w-[80vw] lg:w-[60vw] flex justify-center">
          <ul className="flex justify-between w-[80%] cursor-pointer">
            <li className="transition-colors duration-300 hover:text-emerald-500">
              <Link
                to="hero"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li className="transition-colors duration-300 hover:text-emerald-500">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                About
              </Link>
            </li>
            <li className="transition-colors duration-300 hover:text-emerald-500">
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Projects
              </Link>
            </li>
            <li className="transition-colors duration-300 hover:text-emerald-500">
              <Link
                to="experience"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Experience
              </Link>
            </li>
            <li className="transition-colors duration-300 hover:text-emerald-500">
              <Link
                to="achievements"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Achievements
              </Link>
            </li>
            <li className="transition-colors duration-300 hover:text-emerald-500">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile navbar */}
      <div className="md:hidden">
        <div className="flex justify-between items-center">
          <div className="flex items-center ml-6">
            <div className="w-16 h-16 flex items-center mr-2">
              <img
                className="rounded-full border-2 border-emerald-300"
                src={profileImg}
                alt="profile image"
              />
            </div>
            <div className="text-lg font-medium uppercase">
              Vaibhav Sharma
            </div>
          </div>
          <div>
            <button
              className="text-white hover:text-emerald-500 mr-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <svg
                  className="w-6 h-6 fill-emerald-500 transform rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.293 7.293a1 1 0 011.414 0L12 12.586l4.293-4.293a1 1 0 111.414 1.414L13.414 14l4.293 4.293a1 1 0 11-1.414 1.414L12 15.414l-4.293 4.293a1 1 0 01-1.414-1.414L10.586 14 6.293 9.707a1 1 0 010-1.414z"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6 fill-emerald-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M21 12a1 1 0 00-1-1H4a1 1 0 100 2h16a1 1 0 001-1zm0-5a1 1 0 100-2H4a1 1 0 000 2h16a1 1 0 000-2zm0 10a1 1 0 100-2H4a1 1 0 000 2h16z"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="w-full">
            <ul className="flex flex-col items-center w-full text-right">
              <li className="text-lg font-medium uppercase w-full border-b-2 border-t-2 p-2">
                <Link
                  to="hero"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Home
                </Link>
              </li>
              <li className="text-lg font-medium uppercase w-full border-b-2 p-2">
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  About
                </Link>
              </li>
              <li className="text-lg font-medium uppercase w-full border-b-2 p-2">
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Projects
                </Link>
              </li>
              <li className="text-lg font-medium uppercase w-full border-b-2 p-2">
                <Link
                  to="experience"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Experience
                </Link>
              </li>
              <li className="text-lg font-medium uppercase w-full border-b-2 p-2">
                <Link
                  to="achievements"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Achievements
                </Link>
              </li>
              <li className="text-lg font-medium uppercase w-full p-2">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;

import { Link } from 'react-router-dom';
import img1 from '../img/bg3.png';
import alltheclasses from '../img/alltheclass.png';
import secondhand from '../img/secondhand.png';
import ProjectData from './Data';
const project1 = ProjectData[0];
const project2 = ProjectData[1];

const Project = () => {
  return (
    <div>
      <div className="bg-pattern pb-10">
        <h1 className="text-center text-3xl md:text-5xl font-bold mt-8 text-emerald-600">
          Projects
        </h1>
        <hr className="w-16 mx-auto bg-emerald-500 h-2 mt-4" />
        <p className="text-center w-5/6 text-lg md:text-2xl md:w-2/3 m-auto mt-8 text-slate-600">
          Here you will find some of the personal and clients projects that I created, with each project containing its own case study.
        </p>

        <div className="mt-12 flex flex-col items-center">
          <div className="flex justify-evenly flex-col lg:flex-row items-center p-4">
            <div className="w-5/6 md:w-1/2 lg:w-2/5 transform hover:scale-105 transition duration-300">
              <img src={secondhand} alt="projectImage" />
            </div>
            <div className="w-5/6 lg:w-1/2 flex flex-col justify-center text-center lg:text-left transform hover:translate-x-4 transition duration-300">
              <h2 className="text-2xl font-bold mt-8 ">{project1.name}</h2>
              <p className="text-lg text-left mt-4 mb-4 lg:w-full custom-text">{project1.content}</p>
              <Link to="/project/1">
                <button className="bg-emerald-700 w-5/12 m-auto md:m-0 font-semibold text-white h-12 transition transform hover:translate-y-1 rounded">
                  Case Study
                </button>
              </Link>
            </div>
          </div>

          <div className="flex justify-evenly flex-col lg:flex-row-reverse items-center mt-4 p-4">
            <div className="w-5/6 md:w-1/2 lg:w-2/5 transform hover:scale-105 transition duration-300">
              <img src={alltheclasses} alt="projectImage" />
            </div>
            <div className="w-5/6 lg:w-1/2 flex flex-col justify-center text-center lg:text-left transform hover:translate-x-4 transition duration-300">
              <h2 className="text-2xl font-bold mt-8 ">{project2.name}</h2>
              <p className="text-lg text-left mt-4 mb-4 lg:w-full custom-text">{project2.content}</p>
              <Link to="/project/2">
                <button className="bg-emerald-700 w-5/12 m-auto md:m-0 font-semibold text-white h-12 transition transform hover:translate-y-1 rounded">
                  Case Study
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;

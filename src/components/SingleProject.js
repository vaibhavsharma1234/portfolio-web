import ProjectData from "./Data";
import { useParams, Link } from "react-router-dom";
import Footer from "./Footer";
import { useEffect } from "react";

const SingleProject = () => {
  const { projectName } = useParams();
  const projectImg = {
    2:
      "https://github.com/vaibhavsharma1234/second-hand/blob/master/alltheclass.png?raw=true",
    1:
      "https://github.com/vaibhavsharma1234/second-hand/blob/master/secondhand.png?raw=true",
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {
    name,
    content,
    tech,
    categories,
    projectLink,
    p1,
    p2,
    p3,
    p4,
  } = ProjectData[projectName - 1];

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="bg-emerald-500 text-white py-10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
            {name}
          </h1>
          <p className="text-lg md:text-xl font-medium mb-8">{content}</p>
          <Link to={projectLink}>
            <button className="bg-emerald-700 text-white py-3 px-6 rounded-full animate-bounce">
              View Project
            </button>
          </Link>
        </div>
      </div>

      <div className="container mx-auto py-8 px-4">
        <div className="md:flex justify-center items-center">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <img
              className="w-full rounded-lg"
              src={projectImg[projectName]}
              alt="projectImage"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Project Overview</h2>
            <div className="text-lg md:text-xl text-gray-600">
              <p className="mb-4">{p1}</p>
              <p className="mb-4">{p2}</p>
              <p className="mb-4">{p3}</p>
              <p className="mb-4">{p4}</p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Skills Used</h2>
          <div className="flex flex-wrap">
            {categories.map((item, index) => (
              <button
                key={index}
                className="bg-emerald-200 text-emerald-800 py-2 px-4 rounded-lg m-2"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">See Live</h2>
          <div className="flex md:flex-row">
            <Link to={projectLink}>
              <button className="bg-emerald-700 text-white py-3 px-6 rounded-full animate-bounce mr-2">
                View Project
              </button>
            </Link>
            <Link to="/">
              <button className="bg-gray-700 text-white py-3 px-6 rounded-full ">
                Go Back
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SingleProject;

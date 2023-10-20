import React from 'react';
import {
  BiLogoReact,
  BiLogoMongodb,
  BiLogoNodejs,
  BiLogoAngular,
  BiLogoVuejs,
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoTailwindCss,
  BiLogoFirebase,
  BiLogoBootstrap,
} from 'react-icons/bi';

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-8" id="about">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-emerald-600">About Me</h1>
        <hr className="w-16 mx-auto bg-emerald-500 h-2" />

        <p className="text-center text-lg md:text-xl text-gray-700 mb-8">
          Here you will find more information about me, what I do, and my current skills in programming and technology.
        </p>

        <div className="flex flex-col lg:flex-row justify-center items-center mt-8 custom-text">
          <div className="md:w-4/5 lg:w-2/5 p-4 bg-white rounded-lg mr-8 shadow-lg">
            <h2 className="font-bold text-2xl mb-4">Get to know me!</h2>
            <p className="mb-4 text-lg text-gray-700">
              I'm a dedicated Full Stack Web Developer currently pursuing my degree at the Indian Institute of Information Technology Una. My journey in software development has been a dynamic exploration of various technologies, with expertise in React, Angular, Vue, React Native, Node.js, Express.js, and MongoDB. As a freelancer, I've had the privilege of collaborating with renowned companies like Webalar and TheAllClasses, gaining practical experience and sharpening my skills.
            </p>

            <p className="mb-4 text-lg text-gray-700">
              I specialize in developing efficient, scalable, and user-friendly software solutions with a strong foundation in object-oriented programming and expertise in the MERN stack. I'm passionate about contributing to innovative projects and staying at the forefront of technology.
            </p>

            <p className="text-lg text-gray-700">
              If you're seeking a dedicated developer to bring your ideas to life, let's collaborate and make a meaningful impact in the digital world.
            </p>
          </div>

          <div className="lg:w-2/5 p-4 bg-white rounded-lg shadow-lg mt-8 lg:mt-0">
            <h2 className="font-bold text-2xl mb-4">My Skills</h2>
            <div className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-4">
              {[
                { icon: BiLogoReact, text: 'React' },
                { icon: BiLogoAngular, text: 'Angular' },
                { icon: BiLogoVuejs, text: 'Vue.js' },
                { icon: BiLogoJavascript, text: 'JavaScript' },
                { icon: BiLogoHtml5, text: 'HTML5' },
                { icon: BiLogoCss3, text: 'CSS3' },
                { icon: BiLogoTailwindCss, text: 'Tailwind CSS' },
                { icon: BiLogoBootstrap, text: 'Bootstrap' },
                { icon: BiLogoMongodb, text: 'MongoDB' },
                { icon: BiLogoFirebase, text: 'Firebase' },
                { icon: BiLogoNodejs, text: 'Node.js' },
              ].map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center transform scale-100 hover:scale-105 transition-transform duration-300"
                >
                  <div className="text-3xl mr-2 text-emerald-500">
                    {React.createElement(skill.icon)}
                  </div>
                  {skill.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

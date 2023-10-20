import React, { useState } from "react";
import './hero.css'

const Experience = () => {
  const [selectedCompany, setSelectedCompany] = useState(    {
    name: "SILISOUL",
    date: "Sept 2023- Present",
    details:
      `SILISOUL is a banglore based Clothing startup which Produces and Sells his Own products.
      I am working here as a Frontend Web Developer , Building the Website of the Company from the ground Level.
      The skills used are 
      `,
    skills: [
      "React",
      "Material UI",
      "Redux",
      "Redux-Saga",
      "CSS",
    ],
  })

  // Define your list of companies and their corresponding details
  const companies = [
   
    {
      name: "SILISOUL",
      date: "Sept 2023- Present",
      details:
        `SILISOUL is a banglore based Clothing startup which Produces and Sells his Own products.
        I am working here as a Frontend Web Developer , Building the Website of the Company from the ground Level.
        The skills used are 
        `,
      skills: [
        "React",
        "Material UI",
        "Redux",
        "Redux-Saga",
        "CSS",
      ],
    },
    {
      name: "Webalar",
      date: "August 2023 - Present",
      details:
        `Webalar is a digital agency that ensures clients get the best website solutions. Websites are not only appealing but help them in lead generation. Webalar has worked with several clients.
        I am working here as a official freelance Full Stack Web devleoper
        Till now have finished several projects including a backend for a Personality Form Test  and a Designed a Construction Cost Calculator
        The skills used are following
        `,
      skills: ["NodeJs", "ExpressJs", "JavaScript", "CSS","HTML"],
    },
    {
      name: "Inteliassist",
      date: "July 2023 - August 2023",
      details:
      `
      Intelliassist is an Assisted Shopping platform that helps e-commerce businesses in Conversion Rate Optimization (CRO) by improving visitor experience using customized AI tools.
       Here I worked as a Frontend Web Developer used AngularJS to work on their admin Dashboard.
      
      Developed front-end Angular components and utilized PrimeNG library for user interface enhancements.
      
      Optimized code quality to improve the website lag issues and enhance performance.
      
      Implemented reactive programming using Angular signals for improved user experience.
      
      Committed to writing clean and scalable code, ensuring easy maintenance.
      Skills used are these
    ` ,
      skills: ["AngularJS", "Angular CLI", "PrimeNg",'SCSS'],
    },
    {
      name: "theallclasses",
      date: "Jan 2023 - July 2023",
      details:
        `TheAllClasses is a prominent coaching institute based in Delhi, India, dedicated to delivering high-quality educational content and courses to empower students and learners in their academic pursuits.
        I worked here as a Freelance Web Developer to create a Web Based Solution for providing web-based solution to efficiently market and distribute their courses while enabling users to seamlessly access the content through the application 
        Skills used are:`,
      skills: ["React", "Firebase", "Firestore","TailwindCSS",'Razorpay'],
    },
  ];

  const handleCompanyClick = (company) => {
    setSelectedCompany(company);
  };

  return (
    <div className="bg-gray-100 py-8">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl md:text-5xl font-bold text-center text-emerald-600 mb-8">
          Experience
        </h1>
        <hr className="w-16 m-auto bg-emerald-700 h-2 mb-4" />
        <div className="flex flex-col md:flex-row w-full max-w-screen-xl mx-auto">
          <div className="w-full md:w-1/3 lg:w-1/4 border-l-2 border-emerald-700 pr-4 pt-4 pb-4">
            {companies.map((item) => (
              <div
                key={item.name}
                onClick={() => handleCompanyClick(item)}
                className={`p-4 cursor-pointer ${
                  selectedCompany.name === item.name
                    ? "text-blue-500 font-semibold text-emerald-700 border-b-2 border-emerald-700"
                    : ""
                } transition transform duration-300 ease-in-out hover:scale-105`}
              >
                <h2 className="text-xl">{item.name}</h2>
              </div>
            ))}
          </div>
          <div className="w-full md:w-2/3 lg:w-3/4 pl-4">
            {selectedCompany ? (
              <div>
                <h2 className="text-xl italic text-emerald-700 mb-4">
                  {selectedCompany.date}
                </h2>
                <div>
                  {selectedCompany.details.split("\n").map((paragraph, index) => (
                    <p className="text-gray-600 mb-4" key={index}>
                      {paragraph}
                    </p>
                  ))}
                </div>
                <ul className="list-disc list-inside pl-4">
                  {selectedCompany.skills?.map((skill) => (
                    <li className="text-emerald-700" key={skill}>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <p className="text-gray-600">Select a company to view details</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;

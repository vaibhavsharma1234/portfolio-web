import React from "react";

const AchievementsSection = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8 text-emerald-600">
          My Achievements
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div className="bg-white rounded-lg shadow-lg p-6 transition duration-500 ease-in-out transform hover:scale-105">
            <h3 className="text-xl font-bold text-emerald-600 mb-2">
              Regional Qualifier in GoogleX and GFG All India Hackathon
            </h3>
            <p className="text-gray-600">
              Competing against a large pool of participants.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 transition duration-500 ease-in-out transform hover:scale-105">
            <h3 className="text-xl font-bold text-emerald-600 mb-2">
              Top 11 in Social Summer of Code Hackathon
            </h3>
            <p className="text-gray-600">
              Ranked within the top 11 (1.1%) out of 1000+ participants.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 transition duration-500 ease-in-out transform hover:scale-105">
            <h3 className="text-xl font-bold text-emerald-600 mb-2">
              Top 5 in Institute-wide GFG Ranking
            </h3>
            <p className="text-gray-600">
              Reflecting consistent excellence in coding and programming.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 transition duration-500 ease-in-out transform hover:scale-105">
            <h3 className="text-xl font-bold text-emerald-600 mb-2">
              First Runner-up in IIITU Coding Competition
            </h3>
            <p className="text-gray-600">
              Also led my team into the top 4 of Skillabhyudaya.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;

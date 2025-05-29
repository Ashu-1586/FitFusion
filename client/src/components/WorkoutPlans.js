import React, { useState } from "react";
import Header from './Header';

const WorkoutPlans = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = [
    { title: "Push Pull Leg Split", description: "Divides workouts into push, pull, and legs...", icon: "↔", pdfLink: "plans/push-pull-leg.pdf" },
    { title: "Arnold Split", description: "Targets major muscle groups twice per week...", icon: "🏋️", pdfLink: "/plans/arnold-split.pdf" },
    { title: "Mike Mentzer Split", description: "High-intensity, low-volume approach...", icon: "🎤", pdfLink: "/plans/mikesplit.pdf" },
    { title: "Full Body Split", description: "Divides workouts into push, pull, and legs...", icon: "🌍", pdfLink: "/plans/fullbodysplit.pdf" },
    { title: "Upper Lower Split", description: "Separates upper and lower body workouts...", icon: "⬆️⬇️", pdfLink: "/plans/ul.pdf" },
    { title: "5x5 StrongLift Split", description: "Focuses on five core compound exercises...", icon: "✋", pdfLink: "/plans/strongsplit.pdf" },
  ];

  const handlePlanClick = (pdfLink) => {
    setSelectedPlan(pdfLink); // Set the PDF link to display
  };

  return (
    <>
      <Header /> {/* Navbar/Header component */}
      <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-10">
        <h1 className="text-4xl font-bold text-yellow-400 mb-8">CHECKOUT OUR FREE WORKOUT PLANS</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-11/12 max-w-screen-lg">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => handlePlanClick(plan.pdfLink)}
            >
              <div className="text-yellow-400 text-4xl mb-4">{plan.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
              <p className="text-gray-400 text-center">{plan.description}</p>
            </div>
          ))}
        </div>

        {/* Display the selected PDF in an iframe */}
        {selectedPlan && (
          <div className="mt-10 w-full max-w-4xl">
            <h2 className="text-2xl text-yellow-400 mb-4">Workout Plan Details</h2>
            <iframe 
              src={selectedPlan} 
              width="100%" 
              height="600px" 
              title="Workout Plan PDF"
            ></iframe>
          </div>
        )}
      </div>
    </>
  );
};

export default WorkoutPlans;

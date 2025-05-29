import React, { useState } from "react";
import Header from "./Header";

const MacrosCalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [activity, setActivity] = useState("");
  const [result, setResult] = useState(null);

  const calculateMacros = () => {
    if (!weight || !height || !age || !activity) {
      alert("Please fill out all fields.");
      return;
    }

    const calories =
      gender === "male"
        ? 10 * weight + 6.25 * height - 5 * age + 5
        : 10 * weight + 6.25 * height - 5 * age - 161;

    const multiplier = parseFloat(activity);
    const adjustedCalories = calories * multiplier;

    setResult({
      calories: adjustedCalories.toFixed(2),
      protein: (0.3 * adjustedCalories / 4).toFixed(2),
      carbs: (0.4 * adjustedCalories / 4).toFixed(2),
      fats: (0.3 * adjustedCalories / 9).toFixed(2),
    });
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-gray-800 to-black text-white flex flex-col items-center justify-center p-6">
        <h1 className="text-3xl font-bold mb-6">Macros Calculator</h1>
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-md">
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Weight (kg):</label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-gray-700 border-none text-white focus:ring focus:ring-yellow-500"
              placeholder="Enter your weight"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Height (cm):</label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-gray-700 border-none text-white focus:ring focus:ring-yellow-500"
              placeholder="Enter your height"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Age (years):</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-gray-700 border-none text-white focus:ring focus:ring-yellow-500"
              placeholder="Enter your age"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Gender:</label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  value="male"
                  checked={gender === "male"}
                  onChange={() => setGender("male")}
                  className="text-yellow-500 focus:ring focus:ring-yellow-500"
                />
                Male
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  value="female"
                  checked={gender === "female"}
                  onChange={() => setGender("female")}
                  className="text-yellow-500 focus:ring focus:ring-yellow-500"
                />
                Female
              </label>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Activity Level:</label>
            <select
              value={activity}
              onChange={(e) => setActivity(e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-gray-700 border-none text-white focus:ring focus:ring-yellow-500"
            >
              <option value="">Select activity level</option>
              <option value="1.2">Sedentary</option>
              <option value="1.375">Lightly active</option>
              <option value="1.55">Moderately active</option>
              <option value="1.725">Very active</option>
              <option value="1.9">Extra active</option>
            </select>
          </div>
          <button
            onClick={calculateMacros}
            className="w-full bg-yellow-500 text-black font-semibold py-2 rounded-lg hover:bg-yellow-600 transition"
          >
            Calculate
          </button>
          {result && (
            <div className="mt-6 p-4 bg-gray-800 rounded-lg text-center">
              <p className="font-semibold">Calories: {result.calories} kcal</p>
              <p>Protein: {result.protein} g</p>
              <p>Carbs: {result.carbs} g</p>
              <p>Fats: {result.fats} g</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MacrosCalculator;

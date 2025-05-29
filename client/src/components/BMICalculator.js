import React, { useState } from 'react';
import Header from './Header';

const BMICalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState('');

  const calculateBMI = () => {
    if (!weight || !height) return;
    const heightInMeters = height / 100;
    const calculatedBMI = weight / (heightInMeters * heightInMeters);
    setBmi(calculatedBMI.toFixed(1));

    if (calculatedBMI < 18.5) setCategory('Underweight');
    else if (calculatedBMI >= 18.5 && calculatedBMI <= 24.9) setCategory('Normal weight');
    else if (calculatedBMI >= 25 && calculatedBMI <= 29.9) setCategory('Overweight');
    else setCategory('Obesity');
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-800 flex justify-center items-center">
        <div className="bg-white p-6 rounded-lg shadow-lg w-96">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">BMI Calculator</h2>
          <div className="mb-4">
            <label htmlFor="weight" className="block text-gray-700">Weight (kg):</label>
            <input
              type="number"
              id="weight"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="Enter your weight"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="height" className="block text-gray-700">Height (cm):</label>
            <input
              type="number"
              id="height"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="Enter your height"
            />
          </div>
          <button
            className="w-full py-2 bg-yellow-500 text-white rounded-md"
            onClick={calculateBMI}
          >
            Calculate
          </button>

          {bmi && (
            <div className="mt-4 text-center">
              <p className="text-lg font-semibold">Your BMI: {bmi}</p>
              <p className="text-gray-600">Category: {category}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default BMICalculator;

import React, { useState } from 'react';
import Header from './Header';

const CalorieCalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [activityLevel, setActivityLevel] = useState('sedentary');
  const [calories, setCalories] = useState(null);
  const [bulkCalories, setBulkCalories] = useState(null);
  const [cuttingCalories, setCuttingCalories] = useState(null);

  const calculateCalories = () => {
    if (!weight || !height || !age) return;

    // BMR Calculation (Mifflin-St Jeor Equation)
    const BMR =
      gender === 'male'
        ? 10 * weight + 6.25 * height - 5 * age + 5
        : 10 * weight + 6.25 * height - 5 * age - 161;

    const activityMultipliers = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      active: 1.725,
      veryActive: 1.9,
    };

    const TDEE = BMR * activityMultipliers[activityLevel];
    setCalories(TDEE.toFixed(0));

    // Calculate for Bulk and Cutting
    const bulk = TDEE + 500; // Add 500 calories for bulking
    const cutting = TDEE - 500; // Subtract 500 calories for cutting
    setBulkCalories(bulk.toFixed(0));
    setCuttingCalories(cutting.toFixed(0));
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-800 flex justify-center items-center">
        <div className="bg-white p-6 rounded-lg shadow-lg w-96">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Calorie Calculator</h2>
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
          <div className="mb-4">
            <label htmlFor="age" className="block text-gray-700">Age (years):</label>
            <input
              type="number"
              id="age"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Enter your age"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Gender:</label>
            <div className="flex items-center">
              <input
                type="radio"
                id="male"
                name="gender"
                checked={gender === 'male'}
                onChange={() => setGender('male')}
              />
              <label htmlFor="male" className="ml-2">Male</label>
              <input
                type="radio"
                id="female"
                name="gender"
                checked={gender === 'female'}
                onChange={() => setGender('female')}
                className="ml-4"
              />
              <label htmlFor="female" className="ml-2">Female</label>
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="activityLevel" className="block text-gray-700">Activity Level:</label>
            <select
              id="activityLevel"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={activityLevel}
              onChange={(e) => setActivityLevel(e.target.value)}
            >
              <option value="sedentary">Sedentary</option>
              <option value="light">Light Activity</option>
              <option value="moderate">Moderate Activity</option>
              <option value="active">Active</option>
              <option value="veryActive">Very Active</option>
            </select>
          </div>
          <button
            className="w-full py-2 bg-yellow-500 text-white rounded-md"
            onClick={calculateCalories}
          >
            Calculate
          </button>

          {calories && (
            <div className="mt-4 text-center">
              <p className="text-lg font-semibold">Maintenance Calories: {calories} kcal</p>
              <p className="text-lg font-semibold">Bulking Calories: {bulkCalories} kcal</p>
              <p className="text-lg font-semibold">Cutting Calories: {cuttingCalories} kcal</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CalorieCalculator;

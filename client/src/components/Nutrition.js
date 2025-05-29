import React from "react";
import Header from "./Header"; // Import Header Component

const Nutrition = () => {
  return (
    <div>
      <Header /> {/* Add Header Component */}
      <div className="bg-cover bg-center min-h-screen bg-[url('https://www.example.com/path-to-your-image.jpg')] p-6 flex justify-center items-center">
        <div className="bg-black bg-opacity-70 p-8 rounded-lg max-w-4xl w-full">
          <h1 className="text-4xl font-semibold text-center text-white mb-6">Nutrition Guide</h1>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">Macronutrients</h2>
            <p className="text-white text-lg mb-4">
              Macronutrients are nutrients that provide calories or energy. They are required in large amounts and include carbohydrates, proteins, and fats.
            </p>
            <div className="flex flex-wrap justify-between gap-6">
              <div className="w-full md:w-1/3">
                <h3 className="text-xl font-semibold text-yellow-400 mb-2">Carbohydrates</h3>
                <p className="text-white text-lg">
                  Carbohydrates are the body's primary source of energy and can be found in foods such as fruits, vegetables, grains, and legumes.
                </p>
              </div>
              <div className="w-full md:w-1/3">
                <h3 className="text-xl font-semibold text-yellow-400 mb-2">Proteins</h3>
                <p className="text-white text-lg">
                  Proteins are essential for building and repairing tissues, supporting immune function, and hormone production. Good sources of protein include meat, poultry, fish, eggs, dairy products, tofu, and legumes.
                </p>
              </div>
              <div className="w-full md:w-1/3">
                <h3 className="text-xl font-semibold text-yellow-400 mb-2">Fats</h3>
                <p className="text-white text-lg">
                  Fats are crucial for providing energy, insulating organs, and absorbing fat-soluble vitamins. Healthy fat sources include avocados, nuts, seeds, olive oil, fatty fish, and coconut oil.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">Micronutrients</h2>
            <p className="text-white text-lg mb-4">
              Micronutrients are nutrients required by the body in smaller amounts. They include vitamins and minerals, which are essential for various physiological functions.
            </p>
            <div className="flex flex-wrap justify-between gap-6">
              <div className="w-full md:w-1/3">
                <h3 className="text-xl font-semibold text-yellow-400 mb-2">Vitamins</h3>
                <p className="text-white text-lg">
                  Vitamins are organic compounds that play specific roles in metabolism, immune function, and overall health.
                </p>
              </div>
              <div className="w-full md:w-1/3">
                <h3 className="text-xl font-semibold text-yellow-400 mb-2">Minerals</h3>
                <p className="text-white text-lg">
                  Minerals are inorganic nutrients that are essential for many physiological processes in the body, including bone health, nerve function, and fluid balance.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">Various Diets</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-yellow-400 mb-2">Mediterranean Diet</h3>
                <p className="text-white text-lg">
                  Inspired by the traditional eating patterns of Mediterranean countries, it emphasizes fruits, vegetables, whole grains, fish, nuts, and olive oil while limiting red meat and processed foods.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-yellow-400 mb-2">Keto Diet</h3>
                <p className="text-white text-lg">
                  A high-fat, low-carbohydrate eating plan that induces ketosis, a metabolic state where the body burns fat for fuel instead of carbs.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-yellow-400 mb-2">Paleo Diet</h3>
                <p className="text-white text-lg">
                  Focuses on whole, unprocessed foods such as meat, fish, fruits, vegetables, nuts, and seeds while avoiding grains and dairy.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-yellow-400 mb-2">Vegetarian & Vegan Diets</h3>
                <p className="text-white text-lg">
                  Emphasizes plant-based foods. Vegetarian diets exclude meat, while vegan diets avoid all animal products.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-yellow-400 mb-2">Intermittent Fasting</h3>
                <p className="text-white text-lg">
                  Involves cycling between periods of eating and fasting, with methods like the 16/8 or 5:2 approaches.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Nutrition;

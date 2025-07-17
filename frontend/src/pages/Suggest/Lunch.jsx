import React from "react";

const lunchRecipes = [
  {
    name: "Grilled Chicken Salad",
    image:
      "https://www.simplyrecipes.com/thmb/YGQheybX3bm0sHbmD4z4OzUZ09c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Grilled-Chicken-Salad-LEAD-1-b3b0c6e3989b46949e3e38bc6c4ad44f.jpg",
    description:
      "A healthy and filling salad with grilled chicken, fresh greens, cherry tomatoes, cucumbers, and a light vinaigrette.",
  },
  {
    name: "Paneer Butter Masala with Naan",
    image:
      "https://www.cookwithmanali.com/wp-content/uploads/2018/12/Paneer-Butter-Masala-Restaurant-Style.jpg",
    description:
      "Soft paneer cubes in a creamy tomato gravy served with butter naan – a North Indian favorite.",
  },
  {
    name: "Vegetable Fried Rice",
    image:
      "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/veg-fried-rice-recipe.jpg",
    description:
      "Flavorful rice stir-fried with colorful vegetables and a dash of soy sauce – a perfect one-pot lunch.",
  },
  {
    name: "Rajma Chawal",
    image:
      "https://myfoodstory.com/wp-content/uploads/2021/07/Rajma-Chawal-1.jpg",
    description:
      "Kidney beans slow-cooked with Indian spices and served over steamed basmati rice – comforting and nutritious.",
  },
  {
    name: "Spaghetti Aglio e Olio",
    image:
      "https://www.simplyrecipes.com/thmb/Ld0bgvAiV9C1e-Ycnw_ZQ6uk_hY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Spaghetti-Aglio-e-Olio-LEAD-6-1b897e5d19714e3198b49dcb8fa04c85.jpg",
    description:
      "A simple yet delicious Italian dish with garlic, olive oil, parsley, and red chili flakes tossed with spaghetti.",
  },
];

const Lunch = () => {
  return (
    <div className="p-6 min-h-screen bg-[#0e0e0e] text-white">
      <h1 className="text-3xl font-bold mb-6 italic text-purple-400">Lunch Recipes</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {lunchRecipes.map((recipe, index) => (
          <div
            key={index}
            className="bg-[#1c1c1c] p-4 rounded-xl shadow-lg transition duration-300 transform hover:scale-105 hover:shadow-purple-700"
          >
            <h2 className="text-xl font-semibold mb-2 text-purple-300 italic">
              {index + 1}. {recipe.name}
            </h2>
            <img
              src={recipe.image}
              alt={recipe.name}
              className="w-full h-48 object-cover rounded-lg mb-3 border border-gray-700"
            />
            <p className="text-gray-300">{recipe.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Lunch;

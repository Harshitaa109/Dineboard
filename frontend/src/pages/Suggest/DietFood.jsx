// src/pages/DietFood.jsx
import React from "react";

const dietFriendlyDishes = [
  {
    name: "Grilled Chicken Salad",
    image: "https://www.eatwell101.com/wp-content/uploads/2021/08/Grilled-Chicken-Salad-recipe.jpg",
    description: "A high-protein, low-carb salad with grilled chicken, greens, and light vinaigrette."
  },
  {
    name: "Quinoa and Veggie Bowl",
    image: "https://simpleveganblog.com/wp-content/uploads/2020/01/Vegan-Quinoa-Bowl-3.jpg",
    description: "A nutritious bowl packed with quinoa, roasted vegetables, and avocado."
  },
  {
    name: "Zucchini Noodles with Pesto",
    image: "https://www.wellplated.com/wp-content/uploads/2019/01/Healthy-Zucchini-Noodles-with-Pesto.jpg",
    description: "Low-carb 'zoodles' tossed with homemade basil pesto and cherry tomatoes."
  },
  {
    name: "Oats & Chia Pudding",
    image: "https://www.eatingbirdfood.com/wp-content/uploads/2021/07/oatmeal-chia-pudding-hero.jpg",
    description: "Fiber-rich breakfast pudding made with rolled oats, chia seeds, almond milk, and fruit."
  },
  {
    name: "Baked Salmon with Asparagus",
    image: "https://www.dinneratthezoo.com/wp-content/uploads/2019/01/baked-salmon-5.jpg",
    description: "Oven-baked salmon served with roasted asparagus for a balanced, protein-rich meal."
  },
  {
  name: "Lentil Soup",
  image: "https://www.acouplecooks.com/wp-content/uploads/2020/01/Best-Lentil-Soup-004.jpg",
  description: "Hearty and filling soup made with lentils, vegetables, and spices – perfect for a nutritious meal."
},
{
  name: "Stuffed Bell Peppers",
  image: "https://www.wellplated.com/wp-content/uploads/2020/09/Stuffed-Bell-Peppers-Recipe.jpg",
  description: "Colorful bell peppers filled with a mixture of brown rice, beans, and vegetables."
},
{
  name: "Greek Yogurt Parfait",
  image: "https://www.culinaryhill.com/wp-content/uploads/2021/06/Greek-Yogurt-Parfait-Culinary-Hill-1200x800-1.jpg",
  description: "Layered yogurt, granola, and fresh fruit – ideal for a light breakfast or snack."
},
{
  name: "Vegetable Stir Fry",
  image: "https://www.acouplecooks.com/wp-content/uploads/2021/01/Vegetable-Stir-Fry-013.jpg",
  description: "Quick stir-fry with colorful vegetables and a savory soy-based sauce – served with brown rice or noodles."
},
{
  name: "Sweet Potato and Black Bean Tacos",
  image: "https://www.loveandlemons.com/wp-content/uploads/2020/10/sweet-potato-tacos.jpg",
  description: "Tacos filled with roasted sweet potatoes, black beans, and avocado – vegan and flavorful."
},
{
  name: "Chickpea Salad Sandwich",
  image: "https://www.noracooks.com/wp-content/uploads/2020/08/chickpea-salad-sandwich-1.jpg",
  description: "Mashed chickpeas mixed with herbs and veggies, served between whole grain bread slices."
},
{
  name: "Tofu and Broccoli Bowl",
  image: "https://simpleveganblog.com/wp-content/uploads/2019/05/Vegan-Tofu-Bowl-7.jpg",
  description: "Crispy tofu cubes and steamed broccoli over quinoa or brown rice with a soy-ginger sauce."
},
{
  name: "Avocado Egg Toast",
  image: "https://www.simplyrecipes.com/thmb/0d8MBPUn1L3PbCDTfZLwQ7tNSP0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Avocado-Egg-Toast-LEAD-1-70852a4a8f274f5f9de9e63078871c7a.jpg",
  description: "Toasted whole grain bread topped with smashed avocado and a sunny-side-up egg."
},
{
  name: "Cucumber and Hummus Wrap",
  image: "https://www.eatingwell.com/thmb/xW39eY_0kiqMTGg5oDvHyKXV1M8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/cucumber-hummus-wraps-53e3eb96fc1948a9a1c6bfb0c3a4e0e8.jpg",
  description: "Refreshing wrap filled with hummus, cucumber, carrots, and lettuce in a whole wheat tortilla."
},
{
  name: "Berry Smoothie Bowl",
  image: "https://www.downshiftology.com/wp-content/uploads/2018/01/Berry-Smoothie-Bowl-7.jpg",
  description: "Thick berry smoothie topped with fresh fruits, seeds, and granola – perfect for a summer breakfast."
},
{
  name: "Spaghetti Squash Pasta",
  image: "https://www.eatingbirdfood.com/wp-content/uploads/2021/11/spaghetti-squash-pasta.jpg",
  description: "A gluten-free alternative to pasta using roasted spaghetti squash and marinara sauce."
},
{
  name: "Kale and Quinoa Salad",
  image: "https://cookieandkate.com/images/2015/01/kale-quinoa-salad-recipe-2.jpg",
  description: "A vibrant salad of massaged kale, fluffy quinoa, cranberries, and a lemon vinaigrette."
},
{
  name: "Egg Muffins",
  image: "https://www.wellplated.com/wp-content/uploads/2019/12/Healthy-Egg-Muffins-Recipe.jpg",
  description: "Protein-packed baked egg muffins with spinach, peppers, and cheese – great for meal prep."
},
{
  name: "Banana Oat Pancakes",
  image: "https://www.wellplated.com/wp-content/uploads/2016/03/Healthy-Banana-Oatmeal-Pancakes.jpg",
  description: "Flourless pancakes made with oats, banana, and eggs – naturally sweet and wholesome."
},
{
  name: "Cauliflower Fried Rice",
  image: "https://www.dinneratthezoo.com/wp-content/uploads/2018/07/cauliflower-fried-rice-5.jpg",
  description: "A low-carb alternative to fried rice using grated cauliflower and mixed veggies stir-fried together."
}
];

const DietFood = () => {
  return (
    <div className="min-h-screen bg-[#1f2937] text-white p-8">
      <h2 className="text-3xl font-semibold mb-6 text-purple-400 italic">Diet-Friendly Recipes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {dietFriendlyDishes.map((dish, index) => (
          <div
            key={index}
            className="bg-[#111827] p-4 rounded-lg shadow-md hover:shadow-xl transition duration-300 border border-gray-700"
          >
            <img
              src={dish.image}
              alt={dish.name}
              className="w-full h-40 object-cover rounded-md mb-3"
            />
            <h3 className="text-xl font-semibold text-purple-300">{index + 1}. {dish.name}</h3>
            <p className="text-sm text-gray-300 mt-2">{dish.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DietFood;

// src/pages/Starters.jsx
import React from "react";

const starterRecipes = [
  {
    id: 1,
    name: "Stuffed Mushrooms",
    image: "https://www.cookingclassy.com/wp-content/uploads/2021/12/stuffed-mushrooms-03.jpg",
    description: "Baked mushrooms stuffed with cheese, herbs, and breadcrumbs — perfect finger food."
  },
  {
    id: 2,
    name: "Crispy Spring Rolls",
    image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/04/veg-spring-rolls.jpg",
    description: "Golden fried rolls stuffed with mixed vegetables, served with spicy dipping sauce."
  },
  {
    id: 3,
    name: "Paneer Tikka",
    image: "https://www.vegrecipesofindia.com/wp-content/uploads/2021/03/paneer-tikka-2.jpg",
    description: "Indian-style grilled cottage cheese cubes marinated with yogurt and spices."
  },
  {
    id: 4,
    name: "Garlic Bread with Cheese",
    image: "https://www.spendwithpennies.com/wp-content/uploads/2020/03/Cheesy-Garlic-Bread-SpendWithPennies-6.jpg",
    description: "Buttery garlic bread topped with gooey mozzarella, baked until golden."
  },
  {
    id: 5,
    name: "Hummus & Pita",
    image: "https://cookieandkate.com/images/2023/08/best-hummus-recipe-1-768x1154.jpg",
    description: "Creamy hummus served with warm pita bread — healthy and delicious."
  },
  {
    id: 6,
    name: "Bruschetta",
    image: "https://www.simplyrecipes.com/thmb/7DSefjW-URi2gEBzEeqETJVv3YQ=/2000x1333/filters:fill(auto,1)/Simply-Recipes-Bruschetta-LEAD-3-1bfe8464e70e46018b26d8b0a54f8fba.jpg",
    description: "Toasted baguette slices topped with tomato, basil, and garlic."
  },
  {
    id: 7,
    name: "Mozzarella Sticks",
    image: "https://www.dinneratthezoo.com/wp-content/uploads/2016/03/mozzarella-sticks-5.jpg",
    description: "Crispy fried cheese sticks served with tangy marinara sauce."
  },
  {
    id: 8,
    name: "Chicken Wings",
    image: "https://www.recipetineats.com/wp-content/uploads/2021/11/Baked-Chicken-Wings_6.jpg",
    description: "Juicy chicken wings tossed in a spicy buffalo or BBQ sauce."
  },
  {
    id: 9,
    name: "Tandoori Broccoli",
    image: "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/sibyl_sunitha/Tandoori_Broccoli_Recipe.jpg",
    description: "Broccoli florets marinated in tandoori spices and roasted till charred."
  },
  {
    id: 10,
    name: "Mini Samosas",
    image: "https://www.cookwithmanali.com/wp-content/uploads/2021/01/Mini-Samosa.jpg",
    description: "Small crispy pastry pockets filled with spicy potato-pea mix."
  },
  {
    id: 11,
    name: "Deviled Eggs",
    image: "https://www.simplyrecipes.com/thmb/HtK47V7tTPr2nx82kN3tSLY3ldY=/2000x1333/filters:fill(auto,1)/Simply-Recipes-Deviled-Eggs-LEAD-08-7e583e1645b741d1bb32a620c04f2c4c.jpg",
    description: "Hard-boiled eggs halved and filled with a creamy yolk mixture."
  },
  {
    id: 12,
    name: "Caprese Skewers",
    image: "https://www.wellplated.com/wp-content/uploads/2023/05/Caprese-Skewers.jpg",
    description: "Skewers of mozzarella, cherry tomatoes, and basil drizzled with balsamic glaze."
  },
  {
    id: 13,
    name: "Loaded Nachos",
    image: "https://www.simplyrecipes.com/thmb/MQFzSfpGS9_mtwYOZlCUqaEfzUg=/2000x1333/filters:fill(auto,1)/Simply-Recipes-Loaded-Nachos-LEAD-08-5e44141a0b2b49fd9d02d107a974c671.jpg",
    description: "Tortilla chips loaded with beans, cheese, jalapeños, salsa, and sour cream."
  },
  {
    id: 14,
    name: "Cheesy Corn Balls",
    image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2020/12/cheese-corn-balls-recipe.jpg",
    description: "Golden-fried balls made with corn, cheese, and mashed potatoes."
  },
  {
    id: 15,
    name: "Falafel Balls",
    image: "https://www.acouplecooks.com/wp-content/uploads/2021/04/Falafel-008.jpg",
    description: "Crispy Middle-Eastern chickpea fritters served with tahini sauce."
  },
  {
    id: 16,
    name: "Chili Paneer",
    image: "https://www.vegrecipesofindia.com/wp-content/uploads/2021/03/chilli-paneer-dry-1.jpg",
    description: "Indo-Chinese style paneer cubes tossed in a spicy chili garlic sauce."
  },
  {
    id: 17,
    name: "Spinach & Cheese Puffs",
    image: "https://www.thekitchn.com/wp-content/uploads/2020/11/Spinach-Puffs-001.jpg",
    description: "Flaky puff pastry filled with creamy spinach and cheese mixture."
  },
  {
    id: 18,
    name: "Mini Quiches",
    image: "https://www.recipetineats.com/wp-content/uploads/2016/12/Mini-Quiche-3.jpg",
    description: "Bite-sized quiches with assorted fillings like spinach, cheese, and ham."
  },
  {
    id: 19,
    name: "Sweet Potato Fries",
    image: "https://cookieandkate.com/images/2018/01/crispy-baked-sweet-potato-fries.jpg",
    description: "Crispy oven-baked sweet potato fries with a spicy mayo dip."
  },
  {
    id: 20,
    name: "Dahi Ke Kebab",
    image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/03/dahi-kabab.jpg",
    description: "Soft hung curd patties spiced and shallow fried – a vegetarian delicacy."
  },
];

const Starters = () => {
  return (
    <div className="p-6 bg-[#0f172a] min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-6 text-purple-500 italic">Starter Recipes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {starterRecipes.map((recipe, index) => (
          <div
            key={recipe.id}
            className="bg-[#1e293b] rounded-xl overflow-hidden shadow-lg hover:shadow-purple-500/20 transition-shadow duration-300"
          >
            <img
              src={recipe.image}
              alt={recipe.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2 text-purple-300">
                {index + 1}. {recipe.name}
              </h2>
              <p className="text-gray-300">{recipe.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Starters;

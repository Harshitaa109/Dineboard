// src/pages/ItalianCuisine.jsx
import React from "react";

const italianDishes = [
  {
    name: "Margherita Pizza",
    image: "https://www.recipetineats.com/wp-content/uploads/2020/10/Margherita-Pizza_3.jpg",
    description: "Classic pizza with fresh tomatoes, mozzarella, basil, and olive oil.",
  },
  {
    name: "Spaghetti Carbonara",
    image: "https://www.recipetineats.com/wp-content/uploads/2019/06/Spaghetti-Carbonara_5.jpg",
    description: "Creamy pasta with eggs, cheese, pancetta, and black pepper.",
  },
  {
    name: "Lasagna",
    image: "https://www.recipetineats.com/wp-content/uploads/2019/08/Lasagna_5.jpg",
    description: "Layered pasta with meat sauce, béchamel, and cheese.",
  },
  {
    name: "Risotto",
    image: "https://www.recipetineats.com/wp-content/uploads/2021/06/Mushroom-Risotto_3.jpg",
    description: "Creamy rice dish cooked with broth and flavored with onions and parmesan.",
  },
  {
    name: "Tiramisu",
    image: "https://www.recipetineats.com/wp-content/uploads/2019/06/Tiramisu_5.jpg",
    description: "Coffee-flavored Italian dessert with layers of ladyfingers and mascarpone.",
  },
  {
  name: "Fettuccine Alfredo",
  image: "https://www.recipetineats.com/wp-content/uploads/2019/10/Fettuccine-Alfredo_3.jpg",
  description: "Rich pasta dish with a creamy parmesan sauce and fettuccine noodles.",
},
{
  name: "Gnocchi",
  image: "https://www.recipetineats.com/wp-content/uploads/2020/12/Gnocchi_4.jpg",
  description: "Soft potato dumplings served with a variety of sauces like pesto or tomato.",
},
{
  name: "Osso Buco",
  image: "https://www.recipetineats.com/wp-content/uploads/2021/02/Osso-Buco_5.jpg",
  description: "Braised veal shanks in a rich wine and vegetable sauce.",
},
{
  name: "Bruschetta",
  image: "https://www.recipetineats.com/wp-content/uploads/2020/07/Bruschetta_2.jpg",
  description: "Grilled bread topped with fresh tomatoes, basil, garlic, and olive oil.",
},
{
  name: "Panzanella",
  image: "https://www.recipetineats.com/wp-content/uploads/2019/06/Panzanella_4.jpg",
  description: "Tuscan salad made with chunks of soaked bread, tomatoes, onions, and herbs.",
},
{
  name: "Caprese Salad",
  image: "https://www.recipetineats.com/wp-content/uploads/2021/05/Caprese-Salad_3.jpg",
  description: "Simple salad of fresh mozzarella, tomatoes, and basil with balsamic glaze.",
},
{
  name: "Eggplant Parmesan",
  image: "https://www.recipetineats.com/wp-content/uploads/2020/02/Eggplant-Parmesan_5.jpg",
  description: "Baked layers of eggplant with marinara sauce and melted cheese.",
},
{
  name: "Minestrone Soup",
  image: "https://www.recipetineats.com/wp-content/uploads/2020/11/Minestrone-Soup_3.jpg",
  description: "Hearty vegetable soup with pasta and beans.",
},
{
  name: "Calzone",
  image: "https://www.recipetineats.com/wp-content/uploads/2018/06/Calzone_4.jpg",
  description: "Folded pizza filled with cheese, meats, and vegetables.",
},
{
  name: "Polenta",
  image: "https://www.recipetineats.com/wp-content/uploads/2021/03/Polenta_2.jpg",
  description: "Creamy cornmeal porridge served as a side or base for meats and sauces.",
},
{
  name: "Arancini",
  image: "https://www.recipetineats.com/wp-content/uploads/2019/12/Arancini_3.jpg",
  description: "Crispy rice balls stuffed with cheese or meat, coated in breadcrumbs and fried.",
},
{
  name: "Bolognese",
  image: "https://www.recipetineats.com/wp-content/uploads/2021/08/Bolognese-Sauce_3.jpg",
  description: "Slow-cooked meat sauce typically served with tagliatelle pasta.",
},
{
  name: "Saltimbocca",
  image: "https://www.recipetineats.com/wp-content/uploads/2020/06/Saltimbocca_2.jpg",
  description: "Veal cutlets with prosciutto and sage, sautéed in wine and butter.",
},
{
  name: "Stuffed Shells",
  image: "https://www.recipetineats.com/wp-content/uploads/2019/11/Stuffed-Shells_4.jpg",
  description: "Large pasta shells filled with ricotta and herbs, baked in marinara sauce.",
},
{
  name: "Cannoli",
  image: "https://www.recipetineats.com/wp-content/uploads/2021/07/Cannoli_3.jpg",
  description: "Crispy pastry tubes filled with sweet ricotta cheese and chocolate chips.",
}
];

const ItalianCuisine = () => {
  return (
    <div className="min-h-screen bg-[#1f2937] text-white p-8">
      <h2 className="text-3xl font-semibold mb-6 text-purple-400 italic">Italian Cuisine Recipes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {italianDishes.map((dish, index) => (
          <div
            key={index}
            className="bg-[#111827] p-4 rounded-lg shadow-md hover:shadow-xl transition duration-300 border border-gray-700"
          >
            <img
              src={dish.image}
              alt={dish.name}
              className="w-full h-40 object-cover rounded-md mb-3"
            />
            <h3 className="text-xl font-semibold text-purple-300">
              {index + 1}. {dish.name}
            </h3>
            <p className="text-sm text-gray-300 mt-2">{dish.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItalianCuisine;

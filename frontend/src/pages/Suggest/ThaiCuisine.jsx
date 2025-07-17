// src/pages/ThaiCuisine.jsx
import React from "react";

const thaiDishes = [
  {
    name: "Thai Green Curry",
    image: "https://www.recipetineats.com/wp-content/uploads/2018/07/Thai-Green-Curry_7.jpg",
    description: "A flavorful curry with green chili, coconut milk, Thai basil, and vegetables.",
  },
  {
    name: "Pad Thai",
    image: "https://www.recipetineats.com/wp-content/uploads/2018/07/Chicken-Pad-Thai_5.jpg",
    description: "Stir-fried rice noodles with eggs, tofu, shrimp, peanuts, and tamarind sauce.",
  },
  {
    name: "Tom Yum Soup",
    image: "https://www.recipetineats.com/wp-content/uploads/2019/01/Tom-Yum-Goong_7.jpg",
    description: "A hot and sour Thai soup with shrimp, lemongrass, lime leaves, and chili paste.",
  },
  {
    name: "Som Tum (Papaya Salad)",
    image: "https://www.recipetineats.com/wp-content/uploads/2021/04/Som-Tum-Papaya-Salad_4.jpg",
    description: "A spicy salad made from shredded green papaya, tomatoes, lime, and peanuts.",
  },
  {
    name: "Massaman Curry",
    image: "https://www.recipetineats.com/wp-content/uploads/2020/10/Massaman-Curry_5.jpg",
    description: "A rich, mildly spicy Thai curry made with coconut milk, potatoes, and beef or chicken.",
  },
  {
  name: "Thai Basil Chicken (Pad Kra Pao)",
  image: "https://hot-thai-kitchen.com/wp-content/uploads/2023/07/pad-krapow-thumb.jpg",
  description: "Spicy stir-fry made with minced chicken, garlic, chili, and Thai holy basil.",
},
{
  name: "Thai Red Curry",
  image: "https://www.recipetineats.com/wp-content/uploads/2019/02/Thai-Red-Curry_5.jpg",
  description: "A fiery coconut milk curry with red curry paste, meat, and vegetables.",
},
{
  name: "Thai Fried Rice",
  image: "https://hot-thai-kitchen.com/wp-content/uploads/2023/08/thai-fried-rice-thumb.jpg",
  description: "Classic fried rice with eggs, onions, green onion, and optional shrimp or chicken.",
},
{
  name: "Thai Mango Sticky Rice",
  image: "https://hot-thai-kitchen.com/wp-content/uploads/2019/06/mango-sticky-rice.jpg",
  description: "Sweet coconut sticky rice served with fresh mango slices — a Thai dessert staple.",
},
{
  name: "Thai Fish Cakes (Tod Mun Pla)",
  image: "https://www.recipetineats.com/wp-content/uploads/2016/07/Thai-Fish-Cakes_9.jpg",
  description: "Spicy and aromatic fish patties served with sweet chili dipping sauce.",
},
{
  name: "Larb Gai (Chicken Larb)",
  image: "https://hot-thai-kitchen.com/wp-content/uploads/2023/06/chicken-larb-thumb.jpg",
  description: "Minced chicken salad with lime juice, fish sauce, mint, and toasted rice powder.",
},
{
  name: "Thai Pineapple Fried Rice",
  image: "https://hot-thai-kitchen.com/wp-content/uploads/2015/01/pineapple-fried-rice-featured.jpg",
  description: "Fried rice with pineapple chunks, cashews, veggies, and curry spices.",
},
{
  name: "Green Papaya Som Tam with Crab",
  image: "https://hot-thai-kitchen.com/wp-content/uploads/2023/02/som-tum-crab-thumb.jpg",
  description: "A regional twist on the papaya salad, featuring salty preserved crab.",
},
{
  name: "Thai Grilled Chicken (Gai Yang)",
  image: "https://www.recipetineats.com/wp-content/uploads/2020/06/Thai-Grilled-Chicken-Gai-Yang_5.jpg",
  description: "Marinated grilled chicken with Thai herbs and dipping sauces.",
},
{
  name: "Thai Shrimp Cakes",
  image: "https://hot-thai-kitchen.com/wp-content/uploads/2023/06/shrimp-toast-thumb.jpg",
  description: "Golden fried shrimp patties with crispy texture and chili-lime dip.",
},
{
  name: "Panang Curry",
  image: "https://www.recipetineats.com/wp-content/uploads/2020/09/Panang-Curry_5.jpg",
  description: "Thick, nutty Thai curry made with red curry paste, coconut milk, and kaffir lime.",
},
{
  name: "Thai Coconut Soup (Tom Kha Gai)",
  image: "https://www.recipetineats.com/wp-content/uploads/2019/01/Tom-Kha-Gai_5.jpg",
  description: "Creamy chicken soup with coconut milk, galangal, mushrooms, and lime.",
},
{
  name: "Thai Eggplant Stir Fry",
  image: "https://hot-thai-kitchen.com/wp-content/uploads/2021/09/thai-eggplant-thumb.jpg",
  description: "Wok-tossed eggplants with garlic, basil, soy, and oyster sauce.",
},
{
  name: "Thai Chicken Satay",
  image: "https://www.recipetineats.com/wp-content/uploads/2022/09/Chicken-Satay_0.jpg",
  description: "Grilled marinated chicken skewers served with rich peanut sauce.",
},
{
  name: "Thai Crab Fried Rice",
  image: "https://hot-thai-kitchen.com/wp-content/uploads/2022/10/crab-fried-rice-thumb.jpg",
  description: "Fragrant fried rice with real crab meat and green onions, served with lime and cucumber.",
}
];

const ThaiCuisine = () => {
  return (
    <div className="min-h-screen bg-[#1f2937] text-white p-8">
      <h2 className="text-3xl font-semibold mb-6 text-purple-400 italic">Thai Cuisine Recipes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {thaiDishes.map((dish, index) => (
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

export default ThaiCuisine;

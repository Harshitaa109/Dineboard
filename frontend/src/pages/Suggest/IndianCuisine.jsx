import React from "react";

const indianCuisineRecipes = [
  {
    name: "Paneer Butter Masala",
    image: "https://www.cookwithmanali.com/wp-content/uploads/2020/02/Paneer-Butter-Masala-Restaurant-Style.jpg",
    description: "Cottage cheese cubes cooked in a rich, buttery, tomato-based gravy with cream and spices – a North Indian favorite.",
  },
  {
    name: "Chole Bhature",
    image: "https://www.whiskaffair.com/wp-content/uploads/2020/03/Chole-Bhature-2-3.jpg",
    description: "Spicy chickpeas curry served with deep-fried fluffy bread – a classic Punjabi delicacy.",
  },
  {
    name: "Masala Dosa",
    image: "https://www.vegrecipesofindia.com/wp-content/uploads/2021/06/masala-dosa-1.jpg",
    description: "Crispy rice crepe filled with spicy mashed potato, served with coconut chutney and sambar – a South Indian staple.",
  },
  {
    name: "Rogan Josh",
    image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/08/rogan-josh.jpg",
    description: "A flavorful Kashmiri lamb curry cooked with yogurt, garlic, and exotic spices – known for its deep red color.",
  },
  {
    name: "Bisi Bele Bath",
    image: "https://www.vegrecipesofindia.com/wp-content/uploads/2021/04/bisi-bele-bath-1.jpg",
    description: "A spicy, tangy rice and lentil dish from Karnataka made with vegetables and tamarind.",
  },
  {
    name: "Rajma Chawal",
    image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2020/11/rajma-recipe.jpg",
    description: "Kidney beans cooked in spiced gravy and served with steamed rice – a comforting North Indian meal.",
  },
  {
    name: "Hyderabadi Biryani",
    image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/06/hyderabadi-biryani-recipe.jpg",
    description: "Aromatic basmati rice layered with marinated meat and cooked with saffron, herbs, and spices in dum style.",
  },
  {
    name: "Palak Paneer",
    image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/palak-paneer-recipe.jpg",
    description: "Spinach and cottage cheese curry spiced with garlic, ginger, and garam masala – a creamy green North Indian dish.",
},
{
    name: "Butter Chicken",
    image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/11/butter-chicken-recipe.jpg",
    description: "Juicy chicken cooked in a buttery tomato-based curry with cream – a globally loved Indian favorite.",
},
{
    name: "Aloo Paratha",
    image: "https://www.vegrecipesofindia.com/wp-content/uploads/2021/03/aloo-paratha-recipe.jpg",
    description: "Wheat flatbread stuffed with spiced mashed potatoes, served with butter and yogurt – popular breakfast in North India.",
},
{
    name: "Pav Bhaji",
    image: "https://www.vegrecipesofindia.com/wp-content/uploads/2021/03/pav-bhaji-2.jpg",
    description: "Spicy mashed vegetable curry served with buttery bread rolls – a famous Mumbai street food.",
},
{
    name: "Kadai Paneer",
    image: "https://www.vegrecipesofindia.com/wp-content/uploads/2021/04/kadai-paneer-1.jpg",
    description: "Paneer stir-fried with bell peppers, onions, and spices in a thick tomato gravy – served hot in a wok.",
},
{
    name: "Malai Kofta",
    image: "https://www.vegrecipesofindia.com/wp-content/uploads/2021/05/malai-kofta-2.jpg",
    description: "Fried paneer-potato balls served in a creamy tomato-cashew curry – a royal vegetarian delight.",
},
{
    name: "Dhokla",
    image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/09/khaman-dhokla-recipe.jpg",
    description: "Steamed savory gram flour cakes – light, fluffy, and a staple of Gujarati cuisine.",
},
{
    name: "Pani Puri",
    image: "https://www.vegrecipesofindia.com/wp-content/uploads/2021/03/pani-puri-1.jpg",
    description: "Crispy hollow balls filled with spicy potato and tangy tamarind water – a fun street snack.",
},
{
    name: "Vada Pav",
    image: "https://www.vegrecipesofindia.com/wp-content/uploads/2021/02/vada-pav-1.jpg",
    description: "Fried potato dumpling stuffed in a bread bun with spicy chutneys – the Indian burger from Mumbai.",
},
{
    name: "Kheer",
    image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2020/11/rice-kheer.jpg",
    description: "Traditional rice pudding made with milk, sugar, cardamom, and nuts – served as a dessert.",
},
{
    name: "Poha",
    image: "https://www.vegrecipesofindia.com/wp-content/uploads/2021/03/poha-recipe.jpg",
    description: "Flattened rice cooked with onions, mustard seeds, turmeric, and peanuts – a quick and light breakfast.",
},
{
    name: "Baingan Bharta",
    image: "https://www.vegrecipesofindia.com/wp-content/uploads/2021/06/baingan-bharta.jpg",
    description: "Smoky mashed eggplant cooked with onions, tomatoes, and spices – a rustic North Indian favorite.",
},
{
    name: "Chicken Chettinad",
    image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/09/chicken-chettinad.jpg",
    description: "South Indian chicken curry made with freshly ground spices and coconut – fiery and flavorful.",
},
{
    name: "Mysore Pak",
    image: "https://www.vegrecipesofindia.com/wp-content/uploads/2020/09/mysore-pak.jpg",
    description: "Ghee-rich dessert from Karnataka made with gram flour and sugar – melts in your mouth.",
},
{
    name: "Litti Chokha",
    image: "https://www.vegrecipesofindia.com/wp-content/uploads/2021/02/litti-chokha.jpg",
    description: "Bihar’s rustic combo of stuffed wheat balls (litti) and mashed vegetables (chokha) with mustard oil flavors.",
}
];

const IndianCuisine = () => {
  return (
    <div className="p-6 bg-[#121212] min-h-screen text-white">
      <h1 className="text-4xl font-bold mb-8 text-purple-400 italic tracking-wide">Indian Cuisine Recipes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {indianCuisineRecipes.map((recipe, index) => (
          <div
            key={index}
            className="bg-[#1e1e1e] border border-[#2e2e2e] rounded-xl p-4 shadow-md hover:shadow-purple-500/30 transition-shadow duration-300"
          >
            <h2 className="text-xl font-semibold mb-3 text-purple-300">
              {index + 1}. {recipe.name}
            </h2>
            <img
              src={recipe.image}
              alt={recipe.name}
              className="w-full h-60 object-cover rounded-lg mb-3"
            />
            <p className="text-gray-300">{recipe.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndianCuisine;

import React from "react";

const dinnerRecipes = [
  {
    name: "Dal Tadka with Jeera Rice",
    image: "https://www.vegrecipesofindia.com/wp-content/uploads/2021/05/dal-tadka-1.jpg",
    description: "A comforting Indian dinner made with yellow lentils tempered with spices, served with aromatic cumin-flavored rice.",
  },
  {
    name: "Veg Biryani",
    image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/05/veg-biryani-recipe.jpg",
    description: "A delicious one-pot rice dish cooked with basmati rice, vegetables, and aromatic spices – perfect for a fulfilling dinner.",
  },
  {
    name: "Grilled Salmon with Veggies",
    image: "https://www.eatwell101.com/wp-content/uploads/2020/09/Garlic-Butter-Salmon-in-Foil-1.jpg",
    description: "Succulent grilled salmon served with sautéed vegetables and a lemon butter sauce – healthy and satisfying.",
  },
  {
    name: "Butter Chicken with Paratha",
    image: "https://www.cookwithmanali.com/wp-content/uploads/2019/05/Butter-Chicken-Instant-Pot.jpg",
    description: "Tender chicken chunks in a creamy tomato-based gravy, served with flaky paratha – a dinner-time favorite.",
  },
  {
    name: "Thai Green Curry with Rice",
    image: "https://www.recipetineats.com/wp-content/uploads/2018/07/Thai-Green-Curry_7.jpg",
    description: "Aromatic Thai curry made with green curry paste, coconut milk, vegetables, and served with jasmine rice.",
  },
  {
    name: "Palak Paneer with Naan",
    image: "https://www.vegrecipesofindia.com/wp-content/uploads/2021/03/palak-paneer-2.jpg",
    description: "Creamy spinach curry with cubes of paneer served with soft naan – rich and flavorful.",
  },
  {
    name: "Rajma Chawal",
    image: "https://www.vegrecipesofindia.com/wp-content/uploads/2021/09/rajma-recipe-1.jpg",
    description: "Red kidney beans cooked in a thick tomato gravy, served over steamed rice – a North Indian staple.",
  },
  {
    name: "Shahi Paneer with Roti",
    image: "https://www.vegrecipesofindia.com/wp-content/uploads/2021/06/shahi-paneer.jpg",
    description: "Rich, creamy tomato-based curry with paneer cubes – a royal dinner dish served with roti or naan.",
  },
  {
    name: "Kadai Chicken with Naan",
    image: "https://www.whiskaffair.com/wp-content/uploads/2020/05/Kadai-Chicken-2-3.jpg",
    description: "Spicy chicken cooked with bell peppers and onion in a thick masala gravy, best enjoyed with naan.",
  },
  {
    name: "Sushi Platter",
    image: "https://www.justonecookbook.com/wp-content/uploads/2021/12/Sushi-Platter-8976.jpg",
    description: "An assortment of sushi rolls made with fish, veggies, and seasoned rice – light, elegant, and flavorful.",
  },
  {
    name: "Chana Masala with Bhature",
    image: "https://www.vegrecipesofindia.com/wp-content/uploads/2021/07/chana-masala.jpg",
    description: "Spicy chickpea curry served with fluffy deep-fried bhature – a heavy yet hearty dinner.",
  },
  {
    name: "Paneer Butter Masala with Garlic Naan",
    image: "https://www.cookwithmanali.com/wp-content/uploads/2019/07/Paneer-Butter-Masala-500x500.jpg",
    description: "Soft paneer cubes in buttery tomato gravy served with aromatic garlic naan – creamy and indulgent.",
  },
  {
    name: "Stuffed Capsicum with Rice",
    image: "https://www.vegrecipesofindia.com/wp-content/uploads/2021/06/bharwa-shimla-mirch.jpg",
    description: "Bell peppers stuffed with spiced potatoes or paneer, baked or sautéed – a flavorful dinner idea.",
  },
  {
    name: "Lasagna",
    image: "https://www.recipetineats.com/wp-content/uploads/2017/05/Lasagna-2.jpg",
    description: "Layers of pasta, tomato sauce, meat or veggies, and cheese baked to perfection – Italian comfort food.",
  },
  {
    name: "Hyderabadi Chicken Biryani",
    image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/hyderabadi-biryani.jpg",
    description: "Spiced chicken and fragrant basmati rice cooked together in layers – a feast in itself.",
  },
  {
    name: "Mushroom Stroganoff",
    image: "https://www.lazycatkitchen.com/wp-content/uploads/2020/10/vegan-mushroom-stroganoff-plate.jpg",
    description: "Creamy mushroom-based pasta dish with herbs and spices – a rich vegetarian dinner.",
  },
  {
    name: "Chicken Alfredo Pasta",
    image: "https://www.recipetineats.com/wp-content/uploads/2018/08/Chicken-Alfredo-Pasta_0.jpg",
    description: "Creamy Alfredo sauce tossed with pasta and grilled chicken – a satisfying Western dinner.",
  },
  {
    name: "Mixed Vegetable Korma with Poori",
    image: "https://www.vegrecipesofindia.com/wp-content/uploads/2021/04/veg-korma.jpg",
    description: "Mixed vegetables in a coconut and nut-based creamy curry, served with hot puffed pooris.",
  },
  {
    name: "Pav Bhaji",
    image: "https://www.vegrecipesofindia.com/wp-content/uploads/2021/07/pav-bhaji-recipe.jpg",
    description: "Spiced mashed vegetables served with butter-toasted pav buns – a classic Indian street-style dinner.",
  },
  {
    name: "Ramen Bowl",
    image: "https://www.justonecookbook.com/wp-content/uploads/2021/09/Tonkotsu-Ramen-4502-I.jpg",
    description: "Japanese-style noodle soup with broth, noodles, veggies, and meat/egg toppings – warm and satisfying.",
  },
  {
    name: "Veg Pulao with Raita",
    image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/03/veg-pulao-recipe.jpg",
    description: "Mildly spiced rice cooked with mixed vegetables and whole spices, paired with cooling yogurt raita.",
  },
  {
    name: "Fish Curry with Steamed Rice",
    image: "https://www.whiskaffair.com/wp-content/uploads/2020/08/Fish-Curry-2-3.jpg",
    description: "Spicy and tangy fish curry cooked with tamarind and coconut served with plain rice.",
  },
  {
    name: "Hakka Noodles with Chili Paneer",
    image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/06/hakka-noodles.jpg",
    description: "Stir-fried noodles with vegetables paired with Indo-Chinese style chili paneer.",
  },
  {
    name: "Egg Curry with Rice",
    image: "https://www.vegrecipesofindia.com/wp-content/uploads/2022/04/egg-curry.jpg",
    description: "Hard-boiled eggs simmered in a spicy onion-tomato gravy served with plain rice or jeera rice.",
  },
  {
    name: "Quinoa Salad with Grilled Tofu",
    image: "https://www.simplyquinoa.com/wp-content/uploads/2020/05/Grilled-Tofu-Quinoa-Salad-2.jpg",
    description: "Healthy quinoa salad tossed with grilled tofu, veggies, and a zesty dressing – light yet filling.",
  },
  {
    name: "Masoor Dal with Roti",
    image: "https://www.vegrecipesofindia.com/wp-content/uploads/2021/06/masoor-dal.jpg",
    description: "Red lentils cooked with garlic and spices, served with warm whole wheat roti.",
  },
  {
    name: "Chicken Tikka Wrap",
    image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/06/chicken-kathi-roll.jpg",
    description: "Tandoori-style chicken wrapped in a soft flatbread with salad and chutney – easy dinner wrap.",
  },
  {
    name: "Vegetable Manchurian with Fried Rice",
    image: "https://www.vegrecipesofindia.com/wp-content/uploads/2021/06/veg-manchurian.jpg",
    description: "Crispy veggie balls in spicy sauce paired with flavorful fried rice – Indo-Chinese favorite.",
  },
  {
    name: "Aloo Paratha with Curd and Pickle",
    image: "https://www.vegrecipesofindia.com/wp-content/uploads/2021/06/aloo-paratha.jpg",
    description: "Stuffed flatbread filled with spiced mashed potatoes, served with curd and tangy pickle.",
  },
];

const Dinner = () => {
  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white">
      <h1 className="text-4xl font-serif italic text-purple-400 mb-8">Dinner Recipes</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {dinnerRecipes.map((recipe, index) => (
          <div
            key={index}
            className="bg-gray-800 border border-gray-700 rounded-xl p-5 shadow-lg transition-transform hover:scale-105 hover:border-purple-500"
          >
            <h2 className="text-2xl font-semibold mb-3 text-purple-300 italic">
              {index + 1}. {recipe.name}
            </h2>
            <img
              src={recipe.image}
              alt={recipe.name}
              className="w-full h-56 object-cover rounded-md mb-4"
              onError={(e) => (e.target.style.display = "none")}
            />
            <p className="text-gray-300">{recipe.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dinner;

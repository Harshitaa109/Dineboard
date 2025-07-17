// src/pages/ChineseCuisine.jsx
import React from "react";

const chineseDishes = [
 {
    name: "Kung Pao Chicken",
    image: "https://www.dinneratthezoo.com/wp-content/uploads/2019/05/kung-pao-chicken-5.jpg",
    description: "Dice chicken and marinate in soy sauce and Shaoxing wine. Stir-fry dried chili peppers and Sichuan peppercorns in hot oil, then add the chicken, peanuts, and chopped veggies. Stir in a sauce made from soy, vinegar, sugar, and cornstarch. Cook until thick and glossy.",
  },
  {
    name: "Sweet and Sour Pork",
    image: "https://www.chinasichuanfood.com/wp-content/uploads/2014/03/sweet-and-sour-pork.jpg",
    description: "Deep-fry battered pork pieces until golden. Prepare a sauce with ketchup, vinegar, sugar, soy sauce, and pineapple juice. Stir-fry bell peppers, onion, and pineapple chunks, then toss in pork and coat with sauce.",
  },
  {
    name: "Fried Rice",
    image: "https://www.recipetineats.com/wp-content/uploads/2019/03/Chinese-Fried-Rice_9.jpg",
    description: "Sauté garlic and chopped vegetables. Push to one side and scramble eggs on the other. Add cold cooked rice, soy sauce, sesame oil, and green onions. Stir-fry until heated through and golden.",
  },
  {
    name: "Chow Mein",
    image: "https://www.dinneratthezoo.com/wp-content/uploads/2019/04/chow-mein-4.jpg",
    description: "Boil noodles briefly, then stir-fry with cabbage, carrots, and your choice of meat. Add soy sauce, oyster sauce, and sesame oil. Toss until coated and slightly crispy.",
  },
  {
    name: "Mapo Tofu",
    image: "https://thewoksoflife.com/wp-content/uploads/2019/03/mapo-tofu-15.jpg",
    description: "Cook ground pork with garlic and ginger. Add fermented black beans, chili bean paste, and tofu cubes. Pour in broth and simmer. Thicken with cornstarch and top with green onions and Sichuan pepper oil.",
  },
  {
    name: "Congee (Rice Porridge)",
    image: "https://thewoksoflife.com/wp-content/uploads/2019/05/chinese-congee-17.jpg",
    description: "Simmer rice with 5-6 times the amount of water or broth until it breaks down into a creamy porridge. Add shredded chicken, century egg, or pork. Top with scallions and sesame oil.",
  },
  {
    name: "Dan Dan Noodles",
    image: "https://omnivorescookbook.com/wp-content/uploads/2022/09/220915_Dan-Dan-Noodles_550.jpg",
    description: "Boil noodles and toss with a sauce made from soy sauce, black vinegar, chili oil, and sesame paste. Top with cooked minced pork, pickled mustard greens, and scallions.",
  },
  {
    name: "Spring Rolls",
    image: "https://www.dinneratthezoo.com/wp-content/uploads/2018/08/spring-rolls-5.jpg",
    description: "Stir-fry shredded vegetables and cooked vermicelli. Wrap in spring roll wrappers and deep-fry until golden and crispy. Serve with sweet chili dipping sauce.",
  },
  {
    name: "Egg Foo Young",
    image: "https://www.thespruceeats.com/thmb/sfgdHZKJNoem6G4Md3K15ehcrqk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/egg-foo-young-recipe-694891-hero-01-c697e4cc84ae44d697e5b94f80c92c85.jpg",
    description: "Whisk eggs with bean sprouts, mushrooms, and cooked meat. Fry like a thick omelet. Top with a savory brown gravy made from broth, soy sauce, and cornstarch.",
  },
  {
    name: "Hot and Sour Soup",
    image: "https://thewoksoflife.com/wp-content/uploads/2017/02/hot-and-sour-soup-14.jpg",
    description: "Boil broth with tofu, mushrooms, bamboo shoots, and pork. Season with soy sauce, vinegar, white pepper, and chili oil. Thicken with cornstarch slurry and add a beaten egg while stirring.",
  },
  {
    name: "Scallion Pancakes",
    image: "https://thewoksoflife.com/wp-content/uploads/2022/01/scallion-pancakes-16.jpg",
    description: "Make a dough from flour and hot water. Roll out, brush with oil, sprinkle scallions, roll into a spiral, flatten, and pan-fry until crispy and golden.",
  },
  {
    name: "Steamed Dumplings",
    image: "https://thewoksoflife.com/wp-content/uploads/2020/10/steamed-dumplings-22.jpg",
    description: "Fill dumpling wrappers with a mix of ground pork, ginger, garlic, and napa cabbage. Fold and steam over boiling water until cooked through. Serve with soy-vinegar dipping sauce.",
  },
  {
    name: "Beef and Broccoli",
    image: "https://www.recipetineats.com/wp-content/uploads/2018/08/Beef-and-Broccoli_3.jpg",
    description: "Marinate sliced beef in soy, garlic, and cornstarch. Stir-fry broccoli until tender-crisp. Cook beef separately, then toss together with oyster sauce and a cornstarch slurry.",
  },
  {
    name: "Sesame Chicken",
    image: "https://dinnerthendessert.com/wp-content/uploads/2017/05/Chinese-Sesame-Chicken-1-1.jpg",
    description: "Deep-fry battered chicken cubes until golden. Toss in a sauce made with soy sauce, rice vinegar, sugar, sesame oil, and garlic. Garnish with sesame seeds.",
  },
  {
    name: "Char Siu (BBQ Pork)",
    image: "https://thewoksoflife.com/wp-content/uploads/2014/06/char-siu-chinese-bbq-pork-13.jpg",
    description: "Marinate pork with hoisin, honey, five-spice powder, soy sauce, and red fermented bean curd. Roast until caramelized and slightly charred.",
  },
  {
    name: "Chinese Tea Eggs",
    image: "https://thewoksoflife.com/wp-content/uploads/2014/12/chinese-tea-eggs-6.jpg",
    description: "Boil eggs, crack shells lightly, then simmer in a mix of tea, soy sauce, cinnamon, star anise, and orange peel for hours for marbled flavor.",
  },
  {
    name: "Lo Mein",
    image: "https://www.dinneratthezoo.com/wp-content/uploads/2019/08/lo-mein-5.jpg",
    description: "Boil egg noodles. Stir-fry vegetables and protein of choice. Toss with noodles and a sauce made from soy sauce, oyster sauce, and sesame oil.",
  },
  {
    name: "Cantonese Wonton Noodle Soup",
    image: "https://thewoksoflife.com/wp-content/uploads/2015/10/cantonese-wonton-noodle-soup-9.jpg",
    description: "Fill wonton wrappers with shrimp and pork filling, boil them, then serve in a clear broth with egg noodles and choy sum.",
  },
  {
    name: "Egg Drop Soup",
    image: "https://www.dinneratthezoo.com/wp-content/uploads/2019/02/egg-drop-soup-5.jpg",
    description: "Boil chicken broth with white pepper and ginger. Stir in cornstarch slurry. Slowly drizzle beaten eggs while stirring to create silky ribbons.",
  },
  {
    name: "Chinese Steamed Fish",
    image: "https://thewoksoflife.com/wp-content/uploads/2015/01/chinese-steamed-whole-fish-15.jpg",
    description: "Steam whole fish with ginger. Top with scallions and pour hot oil over. Add light soy sauce mixed with sugar and water for a savory finish.",
  },
  
];

const ChineseCuisine = () => {
  return (
    <div className="p-6 bg-[#121212] min-h-screen text-white">
      <h1 className="text-4xl font-bold mb-8 text-purple-400 italic tracking-wide">Chinese Cuisine Recipes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {chineseDishes.map((dish, index) => (
          <div
            key={index}
            className="bg-[#1e1e1e] border border-[#2e2e2e] rounded-xl p-4 shadow-md hover:shadow-purple-500/30 transition-shadow duration-300"
          >
            <h2 className="text-xl font-semibold mb-3 text-purple-300">
              {index + 1}. {dish.name}
            </h2>
            <img
              src={dish.image}
              alt={dish.name}
              className="w-full h-60 object-cover rounded-lg mb-3"
            />
            <p className="text-gray-300">{dish.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChineseCuisine;

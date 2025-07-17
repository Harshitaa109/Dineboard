import React from "react";

const breakfastRecipes = [
  {
    id: 1,
    name: "Pancakes",
    image: "https://source.unsplash.com/400x300/?pancakes",
    description: "Fluffy homemade pancakes served with maple syrup and butter. How to make: Mix flour, sugar, baking powder, eggs, milk, and butter. Cook on a hot pan until golden brown on both sides."
  },
  {
    id: 2,
    name: "Avocado Toast",
    image: "https://source.unsplash.com/400x300/?avocado-toast",
    description: "Toasted bread topped with creamy avocado and poached egg. How to make: Toast bread, mash avocado with lemon and salt, spread on toast, and top with a poached egg."
  },
  {
    id: 3,
    name: "Oatmeal Bowl",
    image: "https://source.unsplash.com/400x300/?oatmeal",
    description: "Warm oatmeal topped with fruits, nuts, and honey. How to make: Simmer oats with milk/water, then top with banana, berries, nuts, and honey."
  },
  {
    id: 4,
    name: "Scrambled Eggs",
    image: "https://source.unsplash.com/400x300/?scrambled-eggs",
    description: "Creamy scrambled eggs with chives. How to make: Beat eggs with milk, cook on low heat in butter while stirring until creamy. Garnish with chopped chives."
  },
  {
    id: 5,
    name: "Fruit Smoothie",
    image: "https://source.unsplash.com/400x300/?smoothie",
    description: "Refreshing smoothie made with seasonal fruits. How to make: Blend banana, berries, yogurt/milk, and honey until smooth."
  },
  {
    id: 6,
    name: "Chilaquiles",
    image: "https://source.unsplash.com/400x300/?chilaquiles",
    description: "Fried tortilla chips simmered in salsa, topped with cheese and egg. How to make: Fry tortilla pieces, simmer in salsa, and top with queso, crema, and fried egg."
  },
  {
    id: 7,
    name: "Full English Breakfast",
    image: "https://source.unsplash.com/400x300/?english-breakfast",
    description: "Includes eggs, sausage, bacon, tomatoes, mushrooms, beans, toast. How to make: Pan-fry all components and serve hot on a large plate."
  },
  {
    id: 8,
    name: "Shakshuka",
    image: "https://source.unsplash.com/400x300/?shakshuka",
    description: "Eggs poached in spiced tomato sauce. How to make: Cook onion, garlic, tomato, paprika, then crack in eggs and simmer until set."
  },
  {
    id: 9,
    name: "French Toast",
    image: "https://source.unsplash.com/400x300/?french-toast",
    description: "Egg-soaked bread fried to golden brown. How to make: Dip bread in beaten egg, milk, vanilla, fry in butter, top with syrup or fruit."
  },
  {
    id: 10,
    name: "Congee",
    image: "https://source.unsplash.com/400x300/?congee",
    description: "Chinese rice porridge with toppings. How to make: Boil rice in water until soft and porridge-like, add toppings like scallions or eggs."
  },
  {
    id: 11,
    name: "Açai Bowl",
    image: "https://source.unsplash.com/400x300/?acai-bowl",
    description: "Brazilian berry bowl topped with fruits and granola. How to make: Blend frozen açai with banana, top with fruits and granola."
  },
  {
    id: 12,
    name: "Paneer Paratha",
    image: "https://source.unsplash.com/400x300/?paratha",
    description: "Stuffed Indian flatbread. How to make: Mix grated paneer with spices, stuff in dough, roll and cook on tawa with ghee."
  },
  {
    id: 13,
    name: "German Apple Pancake",
    image: "https://source.unsplash.com/400x300/?apple-pancake",
    description: "Oven-baked fluffy pancake with apples. How to make: Pour batter over sautéed apples in a skillet and bake until puffed."
  },
  {
    id: 14,
    name: "Miso Soup with Rice",
    image: "https://source.unsplash.com/400x300/?miso-soup",
    description: "Japanese breakfast soup with tofu and seaweed. How to make: Stir miso into hot dashi, add tofu and wakame, serve with rice."
  },
  {
    id: 15,
    name: "Menemen",
    image: "https://source.unsplash.com/400x300/?menemen",
    description: "Turkish scrambled eggs with tomatoes and peppers. How to make: Sauté tomatoes and peppers, add eggs, stir until just set."
  },
  {
    id: 16,
    name: "Israeli Breakfast",
    image: "https://source.unsplash.com/400x300/?israeli-breakfast",
    description: "Platter of salad, egg, cheese, olives, bread. How to make: Arrange boiled egg, salad, cheese, and pita on a plate."
  },
  {
    id: 17,
    name: "Poha",
    image: "https://source.unsplash.com/400x300/?poha",
    description: "Indian flattened rice with spices. How to make: Rinse poha, cook with onion, mustard seeds, turmeric, peanuts, and lemon."
  },
  {
    id: 18,
    name: "Belgian Waffles",
    image: "https://source.unsplash.com/400x300/?waffles",
    description: "Crispy waffles with syrup. How to make: Make batter with flour, eggs, milk, cook in waffle iron and top as desired."
  },
  {
    id: 19,
    name: "Smørrebrød",
    image: "https://source.unsplash.com/400x300/?smorrebrod",
    description: "Danish open-faced sandwiches. How to make: Top rye bread with butter, fish, egg, cheese, and fresh herbs."
  },
  {
    id: 20,
    name: "Uttapam",
    image: "https://source.unsplash.com/400x300/?uttapam",
    description: "South Indian thick pancake with veggies. How to make: Pour batter, top with onion, tomato, chili, and cook on both sides."
  },
  // ... Continue till id: 50
    {
    id: 21,
    name: "Swiss Muesli",
    image: "https://source.unsplash.com/400x300/?muesli",
    description: "Cold soaked oats with fruits and nuts. How to make: Soak rolled oats in milk or yogurt overnight. Add grated apple, nuts, and raisins before serving."
  },
  {
    id: 22,
    name: "Croissant & Coffee",
    image: "https://source.unsplash.com/400x300/?croissant",
    description: "Classic French breakfast. How to make: Warm a buttery croissant slightly and pair with freshly brewed coffee or espresso."
  },
  {
    id: 23,
    name: "Veggie Omelette",
    image: "https://source.unsplash.com/400x300/?omelette",
    description: "Omelette with veggies and cheese. How to make: Sauté onions, tomatoes, and spinach. Pour beaten eggs over, add cheese, cook until set."
  },
  {
    id: 24,
    name: "Gallo Pinto",
    image: "https://source.unsplash.com/400x300/?gallo-pinto",
    description: "Costa Rican rice and beans. How to make: Stir-fry cooked rice and black beans with onion, garlic, peppers, and cilantro."
  },
  {
    id: 25,
    name: "Kasha with Eggs",
    image: "https://source.unsplash.com/400x300/?buckwheat",
    description: "Russian buckwheat breakfast. How to make: Cook buckwheat groats, season with butter, and serve with a fried or poached egg."
  },
  {
    id: 26,
    name: "Breakfast Burrito",
    image: "https://source.unsplash.com/400x300/?breakfast-burrito",
    description: "Egg-filled tortilla wrap. How to make: Fill tortilla with scrambled eggs, cheese, beans, and veggies. Fold and grill slightly."
  },
  {
    id: 27,
    name: "Baozi",
    image: "https://source.unsplash.com/400x300/?baozi",
    description: "Chinese steamed buns. How to make: Fill dough with seasoned pork or vegetables, steam until soft and fluffy."
  },
  {
    id: 28,
    name: "Idli & Sambar",
    image: "https://source.unsplash.com/400x300/?idli",
    description: "South Indian steamed cakes. How to make: Steam fermented rice-lentil batter in molds and serve with sambar and chutney."
  },
  {
    id: 29,
    name: "Breakfast Tostada",
    image: "https://source.unsplash.com/400x300/?tostada",
    description: "Crispy tortilla with eggs and salsa. How to make: Top a crisp tortilla with refried beans, scrambled eggs, cheese, and salsa."
  },
  {
    id: 30,
    name: "Eggs Benedict",
    image: "https://source.unsplash.com/400x300/?eggs-benedict",
    description: "Poached eggs with hollandaise on muffins. How to make: Toast English muffins, add ham, poached eggs, and pour hollandaise sauce."
  },
  {
    id: 31,
    name: "Concha",
    image: "https://source.unsplash.com/400x300/?concha",
    description: "Mexican sweet bread. How to make: Prepare yeast dough, top with sugar paste pattern, bake until golden and fluffy."
  },
  {
    id: 32,
    name: "Korean Rice Bowl",
    image: "https://source.unsplash.com/400x300/?korean-breakfast",
    description: "Rice topped with kimchi and egg. How to make: Serve hot rice with kimchi, fried egg, sesame oil, and seaweed flakes."
  },
  {
    id: 33,
    name: "Batata Vada",
    image: "https://source.unsplash.com/400x300/?batata-vada",
    description: "Spicy Indian potato fritters. How to make: Mash spiced potatoes, form balls, coat in gram flour batter, deep fry till crisp."
  },
  {
    id: 34,
    name: "Greek Yogurt with Honey",
    image: "https://source.unsplash.com/400x300/?greek-yogurt",
    description: "Yogurt with honey and nuts. How to make: Scoop thick Greek yogurt into a bowl, drizzle honey, top with walnuts or almonds."
  },
  {
    id: 35,
    name: "Dosa",
    image: "https://source.unsplash.com/400x300/?dosa",
    description: "Crispy Indian crepe. How to make: Pour fermented batter on a hot pan, spread thin, cook until crisp, serve with chutney."
  },
  {
    id: 36,
    name: "Dim Sum",
    image: "https://source.unsplash.com/400x300/?dim-sum",
    description: "Chinese steamed dumplings. How to make: Fill wrappers with meat/veg mix, steam in bamboo steamer, serve with dipping sauces."
  },
  {
    id: 37,
    name: "Simit with Tea",
    image: "https://source.unsplash.com/400x300/?simit",
    description: "Turkish sesame bagel. How to make: Bake a sesame-coated bread ring and serve with strong black tea."
  },
  {
    id: 38,
    name: "Khachapuri",
    image: "https://source.unsplash.com/400x300/?khachapuri",
    description: "Georgian cheese bread with egg. How to make: Bake cheese-filled dough, crack egg in center near end, bake till set."
  },
  {
    id: 39,
    name: "Huevos Rancheros",
    image: "https://source.unsplash.com/400x300/?huevos-rancheros",
    description: "Eggs on tortillas with salsa. How to make: Fry tortillas, top with eggs, warm salsa, beans, and cheese."
  },
  {
    id: 40,
    name: "Nasi Lemak",
    image: "https://source.unsplash.com/400x300/?nasi-lemak",
    description: "Malaysian coconut rice with sides. How to make: Serve coconut rice with boiled egg, peanuts, anchovies, cucumber, and sambal."
  },
  {
    id: 41,
    name: "Jianbing",
    image: "https://source.unsplash.com/400x300/?jianbing",
    description: "Chinese breakfast crepe. How to make: Cook a thin batter with egg, add scallions, crispy wonton, and hoisin sauce, fold and serve."
  },
  {
    id: 42,
    name: "English Muffin Sandwich",
    image: "https://source.unsplash.com/400x300/?muffin-sandwich",
    description: "Stuffed breakfast muffin. How to make: Toast muffin halves, add cooked egg, cheese, and sausage or bacon, sandwich and serve."
  },
  {
    id: 43,
    name: "Polish Milk Pancakes",
    image: "https://source.unsplash.com/400x300/?polish-pancakes",
    description: "Fluffy sweet pancakes. How to make: Mix flour, milk, eggs, sugar, and fry. Serve with jam or powdered sugar."
  },
  {
    id: 44,
    name: "Arepas with Egg",
    image: "https://source.unsplash.com/400x300/?arepa",
    description: "Venezuelan corn cakes. How to make: Form arepas with corn flour, grill or fry, slice open and fill with cheese and egg."
  },
  {
    id: 45,
    name: "Bagel with Lox",
    image: "https://source.unsplash.com/400x300/?bagel",
    description: "Bagel with cream cheese and salmon. How to make: Toast bagel, spread cream cheese, add smoked salmon, capers, and onion slices."
  },
  {
    id: 46,
    name: "Pão de Queijo",
    image: "https://source.unsplash.com/400x300/?pao-de-queijo",
    description: "Brazilian cheese bread. How to make: Mix tapioca flour, cheese, egg, and milk, bake until puffed and golden."
  },
  {
    id: 47,
    name: "Weetabix with Fruit",
    image: "https://source.unsplash.com/400x300/?weetabix",
    description: "Whole grain breakfast cereal. How to make: Place biscuits in a bowl, pour milk, top with banana or berries and honey."
  },
  {
    id: 48,
    name: "Polenta with Egg",
    image: "https://source.unsplash.com/400x300/?polenta",
    description: "Creamy cornmeal with poached egg. How to make: Cook polenta with broth, stir in cheese, top with poached egg and herbs."
  },
  {
    id: 49,
    name: "Breakfast Quesadilla",
    image: "https://source.unsplash.com/400x300/?quesadilla",
    description: "Mexican egg and cheese tortilla. How to make: Fill tortilla with scrambled eggs and cheese, fold, grill, and slice."
  },
  {
    id: 50,
    name: "Salep Pudding",
    image: "https://source.unsplash.com/400x300/?salep",
    description: "Warm Turkish milk drink. How to make: Simmer milk with salep powder and sugar, stir until thick, sprinkle cinnamon on top."
  }




];

const Breakfast = () => {
  return (
    <div className="p-6 overflow-y-auto max-h-screen text-white bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-purple-400">Breakfast Recipes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {breakfastRecipes.map((recipe, index) => (
          <div
            key={recipe.id}
            className="bg-gray-800 p-4 rounded-xl shadow-lg hover:shadow-purple-500/30 transition-shadow duration-300"
          >
            <img
              src={recipe.image}
              alt={recipe.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-semibold text-purple-300">
              {index + 1}. {recipe.name}
            </h2>
            <p className="text-gray-300 mt-2 italic">{recipe.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Breakfast;

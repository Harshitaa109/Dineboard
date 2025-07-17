// src/pages/MexicanCuisine.jsx
import React from "react";

const mexicanCuisineRecipes = [
  {
    name: "Tacos al Pastor",
    image:
      "https://www.simplyrecipes.com/thmb/_5B3bInF9QmrqXDZ9BF3Og0Zzy4=/2000x1333/filters:fill(auto,1)/Simply-Recipes-Tacos-al-Pastor-LEAD-1-f1d8dd52e1dc4e61aa843c0f07db5b3d.jpg",
    description:
      "Marinated pork cooked on a spit and served in soft corn tortillas with pineapple, onions, and cilantro.",
  },
  {
    name: "Guacamole",
    image:
      "https://www.simplyrecipes.com/thmb/hEQiG5xlnya_B8P5kXOgCWm-yRs=/2000x1333/filters:fill(auto,1)/Simply-Recipes-Classic-Guacamole-LEAD-07-2b3381711873424587e74d3fdabbde61.jpg",
    description:
      "A creamy avocado dip mixed with lime juice, onions, tomatoes, and cilantro – perfect with tortilla chips.",
  },
  {
    name: "Enchiladas",
    image:
      "https://www.simplyrecipes.com/thmb/HvOWON_nKDdIHnq5kJ8LAmIXm5k=/2000x1333/filters:fill(auto,1)/Simply-Recipes-Enchiladas-LEAD-5-74839fd6fdf24ad0a8a420b4f530ecae.jpg",
    description:
      "Tortillas rolled around a filling, covered in chili sauce, cheese, and baked to perfection.",
  },
  {
    name: "Chiles Rellenos",
    image:
      "https://www.simplyrecipes.com/thmb/VrIok0zBbtkQ5nkkMHyxAfiFjYA=/2000x1333/filters:fill(auto,1)/Simply-Recipes-Chiles-Rellenos-LEAD-2-9379b037e0ee408e8099496bfa185db5.jpg",
    description:
      "Poblano peppers stuffed with cheese or meat, battered, fried, and served with tomato sauce.",
  },
  {
    name: "Quesadillas",
    image:
      "https://www.simplyrecipes.com/thmb/gU-X_GYEnL-mwMT5rBlbTPWw_9g=/2000x1333/filters:fill(auto,1)/Simply-Recipes-Quesadillas-LEAD-3-4892c1fa0a194afc8fd3d8eebce030d1.jpg",
    description:
      "A flour tortilla filled with melted cheese and optional meats or vegetables, toasted until crispy.",
  },
  {
    name: "Tamales",
    image:
      "https://www.simplyrecipes.com/thmb/4VciQbcAuvBbEcAhVpFifDPI8hI=/2000x1333/filters:fill(auto,1)/Simply-Recipes-Tamales-LEAD-5-58a9d6c35f964236b85883f5c8e6be96.jpg",
    description:
      "Corn dough filled with meat or beans, wrapped in corn husks, and steamed until tender.",
  },
  {
    name: "Pozole",
    image:
      "https://www.simplyrecipes.com/thmb/PHSmfGklC9ilKvZxLDYqJToTykg=/2000x1333/filters:fill(auto,1)/Simply-Recipes-Red-Pozole-LEAD-3-9d0e0d4645ae4c19b8ac68c57e4d3c39.jpg",
    description:
      "A traditional hominy soup made with pork or chicken, garnished with shredded cabbage, radish, lime, and oregano.",
  },
  {
    name: "Sopes",
    image: "https://www.simplyrecipes.com/thmb/Z3dLxZKqjlqayQBBFbqqKIoKPhA=/2000x1333/filters:fill(auto,1)/Simply-Recipes-Sopes-LEAD-2-88c5c5c8c0c248bcbe3b6d4a2c057d12.jpg",
    description:
      "Thick corn cakes topped with beans, meat, lettuce, cheese, and salsa.",
  },
  {
    name: "Tostadas",
    image: "https://www.simplyrecipes.com/thmb/5hBCHWgho4D0sXrTOX93V5N8n9A=/2000x1333/filters:fill(auto,1)/Simply-Recipes-Tostadas-LEAD-3-60d8b37e2ce847048071edf948e598b2.jpg",
    description:
      "Crispy flat tortillas topped with beans, meats, veggies, and cheese.",
  },
  {
    name: "Elote (Mexican Street Corn)",
    image: "https://www.simplyrecipes.com/thmb/d6-3A7MNoxBZwOevmdA8uKkHnEk=/2000x1333/filters:fill(auto,1)/Simply-Recipes-Elote-LEAD-1-8586df8fa95e4b369e3127e679c9b6d3.jpg",
    description:
      "Grilled corn on the cob coated with mayo, cheese, chili powder, and lime.",
  },
  {
    name: "Carnitas",
    image: "https://www.simplyrecipes.com/thmb/VbiFcsFfHGZpEcWg0wXJb3IEYKI=/2000x1333/filters:fill(auto,1)/Simply-Recipes-Carnitas-LEAD-6-bf580b1479f84e1c92a162dfd570d1f1.jpg",
    description:
      "Slow-cooked pork that's crispy on the outside and juicy on the inside, usually used in tacos or burritos.",
  },
  {
    name: "Fajitas",
    image: "https://www.simplyrecipes.com/thmb/DU6aKMYlx3RPylQqOp5GRf2Rbi0=/2000x1333/filters:fill(auto,1)/Simply-Recipes-Fajitas-LEAD-4-34953fd82efb4a038019f070924c0e71.jpg",
    description:
      "Grilled meat (often beef or chicken) served with peppers and onions in warm tortillas.",
  },
  {
    name: "Huevos Rancheros",
    image: "https://www.simplyrecipes.com/thmb/dK59qRbTIlTyt0CyDF70zJ0qPco=/2000x1333/filters:fill(auto,1)/Simply-Recipes-Huevos-Rancheros-LEAD-4-2c4f053b7db64dc99e1f430b2f3c05e7.jpg",
    description:
      "Fried eggs served on tortillas with salsa, beans, and avocado.",
  },
  {
    name: "Churros",
    image: "https://www.simplyrecipes.com/thmb/UbP4YvNj6p-2QrkfXqaDckOMs50=/2000x1333/filters:fill(auto,1)/Simply-Recipes-Churros-LEAD-3-586bf7741b1f4c1d8b0188990b6894d9.jpg",
    description:
      "Fried dough pastry sprinkled with cinnamon sugar, often served with chocolate sauce.",
  },
  {
    name: "Mexican Rice",
    image: "https://www.simplyrecipes.com/thmb/WK6s_LPoR2u-m7CgHUPmiQ1SvDo=/2000x1333/filters:fill(auto,1)/Simply-Recipes-Mexican-Rice-LEAD-6-d898f893c32b4cf29dd8614cd4876e37.jpg",
    description:
      "Fluffy rice cooked with tomatoes, onions, garlic, and spices – a perfect side dish.",
  },
  {
    name: "Mole Poblano",
    image: "https://www.simplyrecipes.com/thmb/NzPXnaRg9UvevDeHRtpU_hKi-hI=/2000x1333/filters:fill(auto,1)/Simply-Recipes-Mole-Poblano-LEAD-1-6d91570fbd174a2a87105393e0991bbf.jpg",
    description:
      "A rich sauce made with chili peppers, chocolate, spices, and nuts, served over chicken or turkey.",
  },
  {
    name: "Agua Fresca",
    image: "https://www.simplyrecipes.com/thmb/IEGgAeqkROgU0iKTJtxfT-jYK94=/2000x1333/filters:fill(auto,1)/Simply-Recipes-Agua-Fresca-LEAD-1-4d733abc6ed743308172d4e9c60a6f5c.jpg",
    description:
      "A light, non-alcoholic drink made from fruit, water, and a touch of sugar – refreshing and popular.",
  },
  {
    name: "Chilaquiles",
    image: "https://www.simplyrecipes.com/thmb/CtKUSDb1i9USOPgzP_VaxLE5mko=/2000x1333/filters:fill(auto,1)/Simply-Recipes-Chilaquiles-LEAD-7-479bb1661eaa41ff850c12b119aadf90.jpg",
    description:
      "Crispy tortilla chips simmered in red or green salsa, topped with eggs, cheese, or chicken.",
  },
  {
    name: "Mexican Hot Chocolate",
    image: "https://www.simplyrecipes.com/thmb/VjCmVjcYHa0scLzxx7Y0UGhpKWA=/2000x1333/filters:fill(auto,1)/Simply-Recipes-Mexican-Hot-Chocolate-LEAD-5-d6f7f727308c4e4d8f49d4ad2603f2e0.jpg",
    description:
      "Hot chocolate flavored with cinnamon and a touch of chili – rich and comforting.",
  },
];

const MexicanCuisine = () => {
  return (
    <div className="min-h-screen bg-[#1f2937] text-white p-8">
      <h2 className="text-3xl font-semibold mb-6 text-purple-400 italic">
        Mexican Cuisine Recipes
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {mexicanCuisineRecipes.map((recipe, index) => (
          <div
            key={index}
            className="bg-[#111827] p-4 rounded-lg shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 border border-gray-700"
          >
            <img
              src={recipe.image}
              alt={recipe.name}
              className="w-full h-40 object-cover rounded-md mb-3"
            />
            <h3 className="text-xl font-semibold text-purple-300">
              {index + 1}. {recipe.name}
            </h3>
            <p className="text-sm text-gray-300 mt-2">{recipe.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MexicanCuisine;

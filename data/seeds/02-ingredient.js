exports.seed = function (knex) {
  return knex("ingredient").insert([
    { ingredient_name: "bread", quantity: "2 slices", recipe_id: 1 },
    {
      ingredient_name: "avocado",
      quantity: "1 small / 0.5 large",
      recipe_id: 1,
    },
    { ingredient_name: "hemp seeds", quantity: "2 tsp", recipe_id: 1 },
    { ingredient_name: "hot sauce", quantity: "optional", recipe_id: 1 },
    { ingredient_name: "strawberries", quantity: "0.5 cup", recipe_id: 2 },
    {
      ingredient_name: "banana",
      quantity: "1 small / 0.5 large",
      recipe_id: 2,
    },
    { ingredient_name: "protein", quantity: "2 tbs", recipe_id: 2 },
    { ingredient_name: "almond milk", quantity: "0.5 cup", recipe_id: 2 },
    { ingredient_name: "spinach", quantity: "1 cup", recipe_id: 2 },
  ]);
};

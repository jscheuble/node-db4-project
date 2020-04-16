exports.seed = function (knex) {
  return knex("step").insert([
    {
      step_number: 1,
      instruction: "toast bread",
      recipe_id: 1,
      ingredient_id: 1,
    },
    {
      step_number: 2,
      instruction: "spread avo on toast",
      recipe_id: 1,
      ingredient_id: 2,
    },
    {
      step_number: 3,
      instruction: "sprinkle hemp seeds",
      recipe_id: 1,
      ingredient_id: 3,
    },
    {
      step_number: 4,
      instruction: "add hot sauce, optional",
      recipe_id: 1,
      ingredient_id: 4,
    },
    {
      step_number: 1,
      instruction: "place strawberries in blender",
      recipe_id: 2,
      ingredient_id: 5,
    },
    {
      step_number: 2,
      instruction: "place banana in blender",
      recipe_id: 2,
      ingredient_id: 6,
    },
    {
      step_number: 3,
      instruction: "put protein in blender",
      recipe_id: 2,
      ingredient_id: 7,
    },
    {
      step_number: 8,
      instruction: "put almond milk in blender",
      recipe_id: 2,
      ingredient_id: 8,
    },
    {
      step_number: 9,
      instruction: "put spinach in blender & blend",
      recipe_id: 2,
      ingredient_id: 9,
    },
  ]);
};

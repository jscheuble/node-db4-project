exports.seed = function (knex) {
  return knex("recipe").insert([
    { recipe_name: "avocado toast" },
    { recipe_name: "strawberry smoothie" },
  ]);
};

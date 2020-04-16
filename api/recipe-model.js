const db = require("../data/db-config");

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions,
};

function getRecipes() {
  return db("recipe");
}

function getShoppingList(recipe_id) {
  return db("ingredient as i")
    .select("i.ingredient_name", "i.quantity")
    .where({ recipe_id });
}

function getInstructions(recipe_id) {
  return db("step as s")
    .select("s.step_number, s.instruction")
    .where({ recipe_id });
}

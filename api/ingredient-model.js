const db = require("../data/db-config");

module.exports = {
  getIngredients,
  getById,
  getRecipes,
};

function getIngredients() {
  return db("ingredient");
}

function getById(id) {
  return db("ingredient").where({ id }).first();
}

function getRecipes(id) {
  return db("ingredient").where({ id });
}

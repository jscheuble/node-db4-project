const express = require("express");
const helmet = require("helmet");

const RecipeRouter = require("./api/recipe-router");
const IngredientRouter = require("./api/ingredient-router");

const server = express();

server.use(express.json());
server.use(helmet());

server.use("/api/recipes", RecipeRouter);
server.use("/api/ingredients", IngredientRouter);

server.get("/", (req, res) => {
  res.status(200).json({ message: "api running" });
});

module.exports = server;

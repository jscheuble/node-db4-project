const express = require("express");

const Recipes = require("./recipe-model");

const router = express.Router();

router.get("/", (req, res) => {
  Recipes.getRecipes()
    .then((recipes) => {
      res.status(200).json(recipes);
    })
    .catch((err) => {
      res.status(500).json({ message: "unable to retrieve recipes" });
    });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;

  Recipes.getRecipe(id)
    .then((recipe) => {
      if (recipe) {
        res.status(200).json(recipe);
      } else {
        res.status(404).json({ message: "could not find recipe for that id" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "unable to find recipe", err });
    });
});

router.get("/:id/shoppingList", (req, res) => {
  const id = req.params.id;

  Recipes.getShoppingList(id)
    .then((shoppingList) => {
      if (shoppingList) {
        res.status(200).json(shoppingList);
      } else {
        res
          .status(404)
          .json({ message: "could not find shopping list for that id" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "unable to find shopping list", err });
    });
});

router.get("/:id/instructions", (req, res) => {
  const id = req.params.id;

  Recipes.getInstructions(id)
    .then((instructions) => {
      if (instructions) {
        res.status(200).json(instructions);
      } else {
        res
          .status(404)
          .json({ message: "could not find instructions for that id" });
      }
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .json({ message: "unable to find instructions for that id", err });
    });
});

module.exports = router;

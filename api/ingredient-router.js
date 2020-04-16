const express = require("express");

const Ingredients = require("./ingredient-model");

const router = express.Router();

router.get("/", (req, res) => {
  Ingredients.getIngredients()
    .then((ingredients) => {
      res.status(200).json(ingredients);
    })
    .catch((err) => {
      res.status(500).json({ message: "unable to retrieve ingredients", err });
    });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  Ingredients.getById(id)
    .then((ingredient) => {
      if (ingredient) {
        res.status(200).json(ingredient);
      } else {
        res.status(404).json({ message: "could not find ingredient" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "unable to find ingredient", err });
    });
});

module.exports = router;

const express = require('express');
const router = express.Router();

const Ingredients = require("../database/models/IngredientsModel");

// eslint-disable-next-line no-unused-vars
// module.exports = function (app) {
// };

// Récupère un ingrédient par id
router.get("/:_id", (req, res) => {
  let id = req.params._id;

  Ingredients.findById(id)
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      console.log(err);
    });
});

// Récupère tous les ingrédients
router.get("/", (req, res) => {
  Ingredients.find({})
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      console.log(err);
    });
});

// Ajoute un ingrédient
router.post("/", (req, res) => {
  const ingredients = new Ingredients({
    name: req.body.name
  });

  ingredients
    .save()
    .then(result => {
      res.json(ingredients);
      // console.log(result);
    })
    .catch(err => {
      console.log(err);
    });
});

// Recherche un ingrédient

// Supprime un ingrédient par id

module.exports = router;

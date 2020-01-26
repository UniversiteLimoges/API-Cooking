const express = require('express');
const router = express.Router();
const Recipes = require("../database/models/RecipesModel");

// Récupère une recette par id
router.get("/:_id", (req, res) => {
  let id = req.params._id;

  Recipes.findById(id)
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      console.log(err);
    });
});

// Récupère toutes les recettes
router.get("/", (req, res) => {
  Recipes.find({})
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      console.log(err);
    });
});

// Ajoute une recette par url
router.post("/", (req, res) => {
  const recipes = new Recipes({
    name: req.body.name,
    type: req.body.type,
    url: req.body.url
  });

  recipes
    .save()
    .then(result => {
      res.json(recipes);
    })
    .catch(err => {
      console.log(err);
    });
});

// Ajoute une recette avec détail

// Supprime un recette 

module.exports = router;

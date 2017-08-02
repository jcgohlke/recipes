// dependency requirement for libraries
const express = require('express');
const mongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

// Create app instance for Express
const app = express();

// Connect to Mongo DB through Mongoose ('recipesdb' is database name)
mongoose.connect('mongodb://localhost:27017/recipesdb');

const recipeSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true},
  ingredients: [{
    quantity: { type: String, required: true },
    type: { type: String, lowercase: true, trim: true },
    name: { type: String, required: true }
  }],
  timers: [Number],
  steps: [{ type: String, required: true }],
  originalURL: { type: String },
  imageURL: String
});

const Recipe = mongoose.model('Recipe', recipeSchema);
var recipe = new Recipe({name: "Pancakes"});
recipe.ingredients.push({ name: 'flour', quantity: '2 cups', type: 'baking' });
// console.log(recipe.toObject());

// recipe.save(function (err) {
//   if (err) {
//     // handle error
//   } else {
//     // actions after successful save
//   }
// });

recipe.save().then(function () {
  // actions after successful save
  console.log('recipe saved');
}).catch(function () {
  // handle error
  console.log('Mongo couldn\'t save recipe');
});


const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  imageUrl: String,
  ingredients: [String],
  instructions: [String],
}, { timestamps: true });

module.exports = mongoose.model('Recipe', recipeSchema);

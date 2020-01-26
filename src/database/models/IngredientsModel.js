const mongoose = require('mongoose');

// Schéma
let ingredientsSchema = new mongoose.Schema({
    name: { type: String, required: true }
}, 
{ versionKey: false });

// Transformation en model manipulable par mongoose
module.exports = mongoose.model('Ingredients', ingredientsSchema);
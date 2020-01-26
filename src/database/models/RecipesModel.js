const mongoose = require('mongoose');

// Schéma
let recipesSchema = new mongoose.Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    url: { type: String, required: true }
}, 
{ versionKey: false });

// Transformation en model manipulable par mongoose
module.exports = mongoose.model('Recipes', recipesSchema);
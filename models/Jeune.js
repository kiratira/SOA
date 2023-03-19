const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')

const JeunesSchema = mongoose.Schema({
    nom: {type: String, required: true},
    heure: {type: Date, required: true}
})

JeunesSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Jeunes', JeunesSchema);
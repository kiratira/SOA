const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')

const LoupSchema = mongoose.Schema({
    nom: {type: String, required: true},
    compteur: {type: Number, required: true},
    zombie: {type: Boolean, require: true}
})

LoupSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Loup', LoupSchema);
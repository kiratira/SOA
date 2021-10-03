const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')

const ProductSchema = mongoose.Schema({
    name: {type: String, required: true},
    price: {type: String, required: true},
    description: {type: String, required: true},
    maker: {type: String, required: true},
})

ProductSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Product', ProductSchema);
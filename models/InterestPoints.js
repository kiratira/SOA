const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')

const InterestPointsSchema = mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    XCoord: {type: String, required: true},
    YCoord: {type: String, required: true}
})

InterestPointsSchema.plugin(uniqueValidator);

module.exports = mongoose.model('InterestPoints', InterestPointsSchema);
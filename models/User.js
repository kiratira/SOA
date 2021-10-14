const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')

const UserSchema = mongoose.Schema({
    name: {type: String, required: true},
    secondName: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    role: {type:String,default:'client',enum: ["client","artisant","admin"]}
})

UserSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', UserSchema);
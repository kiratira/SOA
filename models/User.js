const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const UserSchema = mongoose.Schema({
    name: {type: String, required: true},
    secondName: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true, unique:false},
    token: {type: String},
    tokenExpiration: {Type: Date},
    role: {type:String,default:'client',enum: ["client","artisan","admin"]},
    tickets: [{
        Expire: {type : Date}
    }]
})

UserSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', UserSchema);
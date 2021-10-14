const mongoose = require('mongoose');
const RolesSchema = new mongoose.Schema({
    roleId:{type:String,unique:true,required:[true,"Role Id required"]},
    type:{type:String,unique:true,required:[true,"Type required"]},
    rights:[{name:String,path:String,url:String}]
});
module.exports = Role = mongoose.model('role',RolesSchema);
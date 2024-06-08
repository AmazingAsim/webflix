let mongoose = require('mongoose');

let userSchema = mongoose.Schema({
    user_name:{type:String,required:true},
    user_email:{type:String,required:true},
    user_password:{type:String,required:true},
    user_profile:{type:String,required:false}
})

let userModel = mongoose.model('users',userSchema);

module.exports = userModel;
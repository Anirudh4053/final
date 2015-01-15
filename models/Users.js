var mongoose=require('mongoose');
//var Script
var userScheme= new mongoose.Schema({
    id:Number,
    name:String,
    username:String,
    password:String,
    age:Number
    });
module.exports=mongoose.model('user',userScheme);
                                    
                                    
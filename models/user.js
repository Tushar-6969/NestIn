
const { required } = require("joi");
const mongoose=require("mongoose")
const Schema=mongoose.Schema;
const passport_local_mongoose=require("passport-local-mongoose");

const user_schema=new Schema({
    email:{
        type:String,
        required:true
    }
})

user_schema.plugin(passport_local_mongoose);
module.exports=mongoose.model("user",user_schema)
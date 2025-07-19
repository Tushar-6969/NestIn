const user=require("./user.js")

const mongoose=require("mongoose")
const Schema=mongoose.Schema;

const review_schema= new Schema({
    comment:"String",
    rating:{type:Number,
        min:1,
        max:5
    },
    created_at:{
        type:Date,
        default:Date.now()
    },
    author:{
type:Schema.Types.ObjectId,
    ref:"user"
    }
})

module.exports=mongoose.model("review",review_schema)
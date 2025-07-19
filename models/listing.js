const mongoose=require("mongoose")
const schema=mongoose.Schema;
const review=require("./review.js")
const user=require("./user.js");
const { required } = require("joi");
const listing_schema=new schema({
    title:{type:String,
        required:true,
    },
    description:String,
   
   
    image:{
        url:String,
        filename:String,
    },
   
   
    price:Number,
    location:String,
    country:String,
    reviews:[{
        type:schema.Types.ObjectId,
        ref:"review"
    }],
    owner:{
        type:schema.Types.ObjectId,
        ref:"user"
    },
    
    /* for mapbox
    geometry:{
        type:{
        type:String,
        enum:['Point'],
        required:true
        },
        coordinates:{
            type:[Number],
            required:true
        }
    }
        */

})

//pots midllleware 
listing_schema.post("findOneAndDelete",async (listing)=>{
if(listing){
   await review.deleteMany({_id:{$in:listing.reviews}})
}
})



const listing=mongoose.model("listing",listing_schema)
module.exports=listing 
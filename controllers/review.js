const review=require("../models/review")
const listing=require("../models/listing") 

module.exports.createreview=async (req,res)=>{
    let newlist= await listing.findById(req.params.id);
    let new_review=new review(req.body.review);
new_review.author=req.user._id;
console.log(new_review);

    newlist.reviews.push(new_review)
    await new_review.save().then(()=>console.log("review document saved")).catch(e=>console.log("error saving review", e));

    newlist.save()
    console.log("save ");
    req.flash("success","new review created ")

    res.redirect(`/listings/${newlist._id}`)
}

module.exports.destroyreview=async (req,res)=>{
    let {id,review_id}=req.params;
  await listing.findByIdAndUpdate(id,{$pull:{reviews:review_id}})
    await review.findByIdAndDelete(review_id)
    req.flash("success"," review deleted sucess ")

    res.redirect(`/listings/${id}`)
}
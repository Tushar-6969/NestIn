const listing=require("./models/listing.js")
const {listingschema,reviewschema}=require("./schema.js")
const express_class=require("./utils/express_err.js")  
const review = require("./models/review.js")
module.exports.isloggedin=(req,res,next)=>{
    if(!req.isAuthenticated()){
        req.session.redirecturl=req.originalUrl;
  req.flash("error","log in to create a listing ")
  console.log(req.user);
  
  return res.redirect("/login")
}
next()
}

module.exports.saveredirecturl=(req,res,next)=>{
    
if(req.session.redirecturl){
    res.locals.redirecturl=req.session.redirecturl
}
next()
}

module.exports.isowner = async (req, res, next) => {
    const { id } = req.params;  // Correct way to get 'id'
    let lstng = await listing.findById(id);
    if (!lstng.owner.equals(res.locals.curruser._id)) {
        req.flash("error", "You do not have permission to edit or you are not the owner");
        return res.redirect(`/listings/${id}`);
    }
    next();
};





module.exports.validate_listing = (req, res, next) => {
  console.log(" Received body in POST /listings:", req.body);
let { error } = listingschema.validate(req.body);
  if (error) {
    let err_msg = error.details.map((el) => el.message).join(",");
    console.log(" Validation error:", err_msg);
    throw new express_class(404, err_msg);
  }

  console.log(" Listing data validated successfully");
  next(); 
};

module.exports.validate_review=(req,res,next)=>{
let {error}=reviewschema.validate(req.body);
if(error){
    let err_msg=error.details.map((el)=>el.mesage).join(",");
    throw new express_class(404,error);

}
else{
    next();
}


}




// 
module.exports.isreviewauthor = async (req, res, next) => {
    const { id,review_id } = req.params;  // Correct way to get 'id'
    let Review = await review.findById(review_id);
    if (!Review.author.equals(res.locals.curruser._id)) {
        req.flash("error", " you are not the author of review ");
        return res.redirect(`/listings/${id}`);
    }
    next();
};

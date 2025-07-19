const express=require("express");
const router=express.Router({mergeParams:true});
const wrapasync=require("../utils/wrapasync.js") 
const express_class=require("../utils/express_err.js")  
const listing=require("../models/listing.js")   
const {listingschema,reviewschema}=require("../schema.js")
const review = require("../models/review.js")
const {validate_review}=require("../middleware.js")
const {isloggedin,isreviewauthor}=require("../middleware.js")
const reviewcontroller=require("../controllers/review.js")





router.get("/:review_id", (req, res) => {
    req.flash("error", "This page does not exist directly. Please go back.");
    res.redirect("/listings");
});




// reveiews saving 
router.post("/",isloggedin,validate_review,wrapasync(reviewcontroller.createreview)
)


// deleting review 
router.delete("/:review_id",isloggedin,isreviewauthor,wrapasync( reviewcontroller.destroyreview))

module.exports=router;


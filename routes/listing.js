const express=require("express");
const router=express.Router();
const wrapasync=require("../utils/wrapasync.js") 
const express_class=require("../utils/express_err.js")  
const listing=require("../models/listing.js")   
const {listingschema,reviewschema}=require("../schema.js")
const {isloggedin,isowner,validate_listing}=require("../middleware.js")

const listing_controller=require("../controllers/listing.js")
const multer=require('multer')
const {storage}=require("../cloudconfig.js")
const upload=multer({storage})


router.route("/")
// all listing s
.get(wrapasync(listing_controller.index))
.post( isloggedin,upload.single('listing[image]'), wrapasync(listing_controller.createlisting))

//for multer use 
//  .post(,(req,res)=>{
// res.send(req.file)
//  })


router.get("/new",isloggedin,listing_controller.newform)


router.route("/:id")
.get(wrapasync(listing_controller.showform))
//editing listing 
.put(isloggedin,upload.single('listing[image]'),isowner ,wrapasync(listing_controller.updatelisting))
//d eleting lsiting 
.delete(isloggedin,isowner,wrapasync(listing_controller.destroylisting))












// edit route

router.get("/:id/edit",isloggedin,wrapasync(listing_controller.editform))















module.exports=router;
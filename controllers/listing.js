const listing= require("../models/listing.js")
const express_class=require("../utils/express_err.js")

/* forr mapbox 
const mbxgeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const maptoken=process.env.MAP_TOKEN
const geocoding_client=mbxgeocoding({accessToken:maptoken})
*/


module.exports.index=async (req,res)=>{
    const all_listing=await listing.find({});
    res.render("listings/index.ejs",{all_listing})
}



module.exports.newform=(req,res)=>{

// if(!req.isAuthenticated()){
//   req.flash("error","log in to create a listing ")
//   console.log(req.user);
  
//   return res.redirect("/login")
// }
  res.render("listings/new.ejs")
}



module.exports.showform=async(req,res)=>{
let {id}=req.params;
let listing_detail= await listing.findById(id).populate({path:"reviews",populate:{path:"author"},}).populate("owner");

console.log(listing_detail);
if(!listing_detail){
req.flash("error","listing not exist ")
return res.redirect("/listings")
}

res.render("listings/show.ejs",{listing_detail,curruser: req.user})
}



module.exports.editform=async(req,res)=>{
    let {id}=req.params;
    let listing_detail= await listing.findById(id);
if (!listing_detail) {
    req.flash("error", "listing not exist ");
    return res.redirect("/listings"); // 
}
let orgimg=listing_detail.image.url
orgimg=orgimg.replace("/upload","/upload/h_200,w_200")
    res.render("listings/edit.ejs",{listing_detail,orgimg});    
}


module.exports.updatelisting=async (req, res) => {
  // Check if listing data is present
  if (!req.body.listing) {
    throw new express_class(404, "Send valid data");
  }

  // Get the form data (now properly nested under listing)

  
  const vari = req.body.listing;
  console.log("Updating listing with data:", vari);

  const { id } = req.params;


  // Perform the update with validation and return the new document
 let updatedlisting= await listing.findByIdAndUpdate(id, vari, {
    new: true,
    runValidators: true
  });

  if(typeof req.file!="undefined"){

    let url=req.file.path;
let filename=req.file.filename;
updatedlisting.image={url,filename}
await updatedlisting.save();

console.log(`url saved=  ${url}    file name=${filename}`);
  }
  req.flash("success","lisiting updated sucess ")

  res.redirect(`/listings/${id}`);
}


module.exports.destroylisting=async(req,res)=>{
    let {id}=req.params;
let deleted_listing=  await listing.findByIdAndDelete(id);
console.log(deleted_listing);
req.flash("success"," lisiting deleted sucess ")

res.redirect("/listings")
}


module.exports.createlisting=async (req, res) => {


  // this is how we use mapbox for geocosingg 
// let response=await geocoding_client.forwardGeocode({
//   query: 'New Delhi, india',
//   limit: 1,
// })
//   .send()
// console.log(response.body.features[0].geometry);



/* for mapbox
let response=await geocoding_client.forwardGeocode({
  query: req.body.listing.location,
  limit: 1,
})
  .send()
console.log(response.body.features[0].geometry);
*/



console.log('entered ion post listing ');
let url=req.file.path;
let filename=req.file.filename  ;
console.log(`url saved=  ${url}    file name=${filename}`);


    const vari = req.body.listing;
    vari.owner=req.user._id;
console.log(req.user);

  // Convert price from string to number
//   if (vari.price) {
//     vari.price = Number(vari.price);
//   }

  const newlisting = new listing(vari);
newlisting.image={url,filename};
/* for mapbox
newlisting.geometry=response.body.features[0].geometry
*/
let naya=await newlisting.save();

  console.log(" Listing created:", naya);
req.flash("success","new lisiting created ")
  res.redirect("/listings");
}
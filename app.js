if(process.env.NODE_ENV!="production"){
const dotenv=require("dotenv")
dotenv.config();
    
}
// console.log(process.env.SECRET);




const express=require("express")
const mongoose=require("mongoose")
const app=express()
const listing=require("./models/listing.js")
const path=require("path")
const method_override=require("method-override")
const ejs_mate=require("ejs-mate")
const { nextTick } = require("process")
const wrapasync=require("./utils/wrapasync.js") 
const express_class=require("./utils/express_err.js")
const {listingschema,reviewschema}=require("./schema.js")
const review = require("./models/review.js")
const listings_router=require("./routes/listing.js")
const reviews_router=require("./routes/review.js")
const user_router=require("./routes/user.js")
const session=require("express-session")
const flash=require("connect-flash")
const user=require("./models/user.js")
const passport = require("passport")
const local_strategy=require("passport-local")
const mongostore=require("connect-mongo")

const dburl=process.env.MONGO_URL


const store=mongostore.create({
    mongoUrl:dburl,
    crypto:{
        secret:process.env.SECRET,
    },
    touchAfter:24*3600,
})

store.on("error",()=>{
    console.log('error in mongo session',err);
    
})
session_options={
store,
secret:process.env.SECRET,
    resave:false,
saveUninitialized: true,
    cookie:{
        expires:Date.now()+7*24*60*60*1000,
        maxAge:7*24*60*60*1000
    },
httpOnly:true
}

main()
.then(()=>{
    console.log('mogo d connected ');
    
})
.catch((err)=>{
    console.log('error in connecting database ',err);
    
})

async function main(){
    await mongoose.connect(dburl)
}

app.set("view engine","ejs")
app.set("views",path.join(__dirname,"views"));
app.use(session(session_options))
app.use(flash())

app.use(passport.initialize())
app.use(passport.session())
passport.use(new local_strategy(user.authenticate()))  /// this means we are using pasport and we  use local s targey and we use user mdel to authenicate 
passport.serializeUser(user.serializeUser());
passport.deserializeUser(user.deserializeUser());



app.use(express.urlencoded({extended:true}))
app.use(method_override("_method"))
app.engine("ejs",ejs_mate)
app.use(express.static(path.join(__dirname,"/public")));






app.listen(8080,()=>{
    console.log("app is listening on 8080")
})


// for flash 
app.use((req,res,next)=>{
    res.locals.success=req.flash("success");
    res.locals.error=req.flash("error");
    res.locals.curruser=req.user;
next();
})


// tesing login 
app.get("/demouse",async (req,res)=>{
    let fake_user=new user({
        email:"abc@gmail.com",
username:"student",
    })

   let reg_user= await user.register(fake_user,"password")
res.send(reg_user)
})






app.get("/",wrapasync(async (req,res)=>{
   res.redirect("/listings")})
)

// listing rouets 
app.use("/listings",listings_router);

// review rputes 
app.use("/listings/:id/reviews",reviews_router);

//user routes
app.use("/",user_router)









// app.all("*", (req, res, next) => {
//   next(new express_class(404, "page not found"));
// });



// After your existing app.use() and before error handler:

app.get("/search", async (req, res, next) => {
  try {
    const q = (req.query.q || "").trim();

    if (!q) {
      // If search query is empty, show empty results or a message
      return res.render("listings/search", { all_listing: [], query: "" });
    }

    const regex = new RegExp(q, "i"); // Case-insensitive
    const results = await listing.find({
      $or: [
        { title: regex },
        { location: regex },
        { country: regex },
        { description: regex }
      ]
    });

    res.render("listings/search", { all_listing: results, query: q });
  } catch (err) {
    next(err);
  }
});


app.use((err,req,res,next)=>{
    let {status=500,message="something went wrong "}=err;
res.status(status).render("error.ejs",{err})
})


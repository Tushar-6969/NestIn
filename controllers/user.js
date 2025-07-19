const user=require("../models/user")

module.exports.logout=(req,res,next)=>{
    req.logout((err)=>{
        if(err){
            return next(err);
        }
        req.flash("success","logout, sucees ")
        res.redirect("/listings")
    })
}

module.exports.login=(req,res)=>{
    req.flash("success","welcome to nestin")
let redirecturl=res.locals.redirecturl || "/listings"
    res.redirect(redirecturl)
}
module.exports.rendersignupform=(req,res)=>{
    res.render("users/signup.ejs")
}

module.exports.renderloginform=(req,res)=>{
    res.render("users/login.ejs")
}


module.exports.signup=async (req, res, next) => {
    try {
        let { username, email, password } = req.body;
        const new_user = new user({ email, username });
        const reg = await user.register(new_user, password);
        console.log(reg);

        req.login(reg, (err) => {
            if (err) {
                return next(err);
            }
            req.flash("success", "User registered and logged in successfully");
            res.redirect("/listings");
        });
    } catch (err) {
        req.flash("error", err.message);
        res.redirect("/signup");
    }
}
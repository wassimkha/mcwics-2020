


exports.index = (req,res,next) => {
    res.render("index");
}


exports.postHome = (req,res,next) => {
    console.log(req.body.name);
    res.redirect('/');

}
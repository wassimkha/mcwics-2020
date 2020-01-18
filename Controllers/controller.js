const Profile = require('../Models/profile');


exports.index = (req,res,next) => {
    res.render("index");
}


exports.postHome = (req,res,next) => {
    name = req.body.name;
    const user = new Profile(name,1,1,1,1,1);
    user.save()
    const users = Profile.fetchAll()
    console.log(users)
    res.redirect('/');

}
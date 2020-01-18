const Profile = require('../Models/profile');


exports.index = (req,res,next) => {
    res.render("index");
}


exports.postHome = (req,res,next) => {
    name = req.body.name;
    activity = req.body.activity;
    meal = req.body.meal;
    
    const users = Profile.fetchAll()

    if (name) {
        const user = new Profile(name,1,1,1,1,1);
        user.save()
    }

    if (activity) {
        users.forEach(user => {
            user.addActivity(activity)
        })
    }

    if (meal) {
        users.forEach(user => {
            user.addMeal(meal)
        })
    }

    console.log(users)

    res.redirect('/');

}

exports.postActivity = (req,res,next) => {
    
    
    const users = Profile.fetchAll()
    
    

    res.redirect('/');
}

const Profile = require('../Models/profile');
const Meal = require('../Models/meal');
const Activity = require('../Models/activity');


exports.index = (req,res,next) => {
    res.render("index");
}


exports.postHome = (req,res,next) => {
    const name = req.body.name;
    activity = new Activity(req.body.activity,1,1);
    meal = new Meal(req.body.meal,1,1,1,1);
    
    const users = Profile.fetchAll()

    if (name) {
        const user = new Profile(name,1,1,1,1,1);
        user.save()
    }

    if (activity.name) {
        users.forEach(user => {
            if (user.name === currentUser) {
                user.addActivity(activity)
            }
           
  
        })
    }

    if (meal.name) {
        users.forEach(user => {
            if (user.name === currentUser) {
                user.addMeal(meal)
            }

        })
    }

    console.log(users)
    console.log(currentUser)

    res.redirect('/');

}

exports.postActivity = (req,res,next) => {
    
    
    const users = Profile.fetchAll()
    
    

    res.redirect('/');
}

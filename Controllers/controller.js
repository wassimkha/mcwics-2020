const Profile = require('../Models/profile');
const Meal = require('../Models/meal');
const Activity = require('../Models/activity');
const crawler = require('../Crawling/crawler')
const Friend = require('../Models/friends')

exports.index = (req,res,next) => {
    // currentUser
    const users = Profile.fetchAll()
    let currentUs = null;
    const friendsArray = [];
    const randomAct = ['Ate a burger', 'Went Swimming', "Went to a cafe","Went hinking"];
    
    users.forEach(user => {
        if (user.name != currentUser) {
            var randomnumber = Math.floor(Math.random() * (3+ 1));
            const currentFriend = new Friend(user.name,randomAct[randomnumber]);
            friendsArray.push(currentFriend);
            
        }
    })
    console.log(friendsArray)
    

    
    
    res.render("index", {name: currentUser, users: friendsArray});
}


exports.getLogin = (req,res,next) => {

    res.render("login");
}

exports.postLogin = (req,res,next) => {
    
    currentUser = req.body.name;

    res.render("index", {name: currentUser});
}


exports.postHome = (req,res,next) => {

    const name = req.body.name;
    activity = new Activity(req.body.activity,1);
    meal = new Meal(req.body.meal,1,1,1,1);
    
    const users = Profile.fetchAll()

    if (name) {
        const user = new Profile(name,1,1,1,1,1);
        user.save()
    }

    if (activity.name) {
        //get numbers
        let number = activity.name;
        number = number.match(/(\d+)/); 
        if (number) {
            number = number[0]
        }
        if (number <= 3) {
            number *= 60;
        }
        caloriesBurned = number*7.45;
        activity.caloriesBurned = caloriesBurned;
        console.log(activity)
        users.forEach(user => {
            if (user.name === currentUser) {
                user.addActivity(activity)
            }
        })
    }

    if (meal.name) {
        
        
        crawler.getCaloriesPerMeal(meal.name, (calories,carbs,protein,fat) => {
            // console.log(calories)
            
            meal.calories = calories;
            meal.carbs = carbs;
            meal.protein = protein;
            meal.fat = fat;
            users.forEach(user => {
                if (user.name === currentUser) {
                    // console.log(user.name)
                    
                    user.addMeal(meal)
            }
            // console.log(users)
            })

        })
       
        
        
        
            
        
        
        
    }

   

    res.redirect('/');

}

exports.postActivity = (req,res,next) => {
    
    
    const users = Profile.fetchAll()
    
    

    res.redirect('/');
}

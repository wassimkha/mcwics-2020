const Profile = require('../Models/profile');
const Meal = require('../Models/meal');
const Activity = require('../Models/activity');
const crawler = require('../Crawling/crawler')
const Friend = require('../Models/friends')

exports.index = (req,res,next) => {
    // currentUser
    if (!currentUser) {
        res.redirect('/login')
    } else {

    
        const users = Profile.fetchAll()
        let currentUs = null;
        const friendsArray = [];
        const randomAct = ['Ate a burger', 'Went Swimming', "Went to a cafe","Went hinking", "Ate an apple","Went to the Gym","Went to the spa","Went biking","Did yoga"];
        const urlList = ["https://gravatar.com/avatar/25b044639d9ce758423fc2a217efc583?s=400&d=robohash&r=x","https://gravatar.com/avatar/c773bd06c7c70a0dba032ce8aa2918cb?s=400&d=robohash&r=x","https://gravatar.com/avatar/e00d8cf377b068f8318340ebd1b4bae7?s=400&d=robohash&r=x","https://gravatar.com/avatar/ffbbfa39119c02f8611aa9ee126197d6?s=400&d=robohash&r=x","https://gravatar.com/avatar/0c24c305d3d8d916d569ecec608299c5?s=400&d=robohash&r=x","https://gravatar.com/avatar/58f37864c159de3be1df5b4ac4a89dce?s=400&d=robohash&r=x","https://gravatar.com/avatar/d5cd06b8feba616d28deff3781adb7b6?s=400&d=robohash&r=x","https://gravatar.com/avatar/73a951c79dfe1ae12f9f44ab4287f19a?s=400&d=robohash&r=x","https://gravatar.com/avatar/fd1e513903d7b5a4de508e7be6afddc2?s=400&d=robohash&r=x","https://gravatar.com/avatar/e1282a6d3cb1aaf1ae39e8533daacdb8?s=400&d=robohash&r=x","https://gravatar.com/avatar/f9ca90cded72a6147be944c16429e191?s=400&d=robohash&r=x"];

        
        // users.forEach(user => {
        //     if (user.name != currentUser) {
                var randomnumber = Math.floor(Math.random() * (3+ 1));
                var randomnumber_to10 = Math.floor(Math.random() * (10+ 1));
        //         const currentFriend = new Friend(user.name,randomAct[randomnumber],urlList[randomnumber_to10],randomnumber_to10);
        //         friendsArray.push(currentFriend);
                
        //     }
        // })
        
        users.forEach(user => {
            if (user.name == currentUser) {
                currentUs = user;
            }
        })

        if (!currentUs) {
            res.render("index", {name: currentUser, users: [], percentFood: []});
        } else {
            res.render("index",{name: currentUser,users: currentUs.friends,percentFood: currentUs.foodPercentage()});
        }
        // console.log(currentUs)
    }
}


exports.getLogin = (req,res,next) => {

    res.render("login");
}

exports.postLogin = (req,res,next) => {
    
    currentUser = req.body.name;
    const users = Profile.fetchAll();
    let exist = false;
    users.forEach(user => {
        if (user.name === currentUser) {
            exist = true;
        }
    })
    if (exist == false ) {
        const user = new Profile(currentUser,1,1,1,1,1);
        user.save()
    }
    
    res.redirect('/');
}


exports.postHome = (req,res,next) => {

    const name = req.body.name;
    activity = new Activity(req.body.activity,1);
    meal = new Meal(req.body.meal,1,1,1,1);
    
    const users = Profile.fetchAll()

    const randomAct = ['Ate a burger', 'Went Swimming', "Went to a cafe","Went hinking", "Ate an apple","Went to the Gym","Went to the spa","Went biking","Did yoga"];
        const urlList = ["https://gravatar.com/avatar/25b044639d9ce758423fc2a217efc583?s=400&d=robohash&r=x","https://gravatar.com/avatar/c773bd06c7c70a0dba032ce8aa2918cb?s=400&d=robohash&r=x","https://gravatar.com/avatar/e00d8cf377b068f8318340ebd1b4bae7?s=400&d=robohash&r=x","https://gravatar.com/avatar/ffbbfa39119c02f8611aa9ee126197d6?s=400&d=robohash&r=x","https://gravatar.com/avatar/0c24c305d3d8d916d569ecec608299c5?s=400&d=robohash&r=x","https://gravatar.com/avatar/58f37864c159de3be1df5b4ac4a89dce?s=400&d=robohash&r=x","https://gravatar.com/avatar/d5cd06b8feba616d28deff3781adb7b6?s=400&d=robohash&r=x","https://gravatar.com/avatar/73a951c79dfe1ae12f9f44ab4287f19a?s=400&d=robohash&r=x","https://gravatar.com/avatar/fd1e513903d7b5a4de508e7be6afddc2?s=400&d=robohash&r=x","https://gravatar.com/avatar/e1282a6d3cb1aaf1ae39e8533daacdb8?s=400&d=robohash&r=x","https://gravatar.com/avatar/f9ca90cded72a6147be944c16429e191?s=400&d=robohash&r=x"];

    if (name) {
        const users = Profile.fetchAll();
        let currentUs = null;
        users.forEach(user => {
            if (user.name == currentUser) {
                currentUs = user;
            }
        })
        if (currentUs) {
            var randomnumber = Math.floor(Math.random() * (3+ 1));
            var randomnumber_to10 = Math.floor(Math.random() * (10+ 1));
            const currentFriend = new Friend(name,randomAct[randomnumber],urlList[randomnumber_to10],randomnumber_to10);
            currentUs.addFriend(currentFriend)

            const currentFriendUser = new Profile(name,1,1,1,1,1)

            const currentFriendUserFriend = new Friend(currentUs.name,randomAct[randomnumber],urlList[randomnumber_to10],randomnumber_to10)
            currentFriendUser.addFriend(currentFriendUserFriend)
            currentFriendUser.save()
          
            // const user = new Profile(name,1,1,1,1,1);
        
            // user.save()
        } else {
            const user = new Profile(name,1,1,1,1,1);
        
            user.save()
        }


        
        console.log("next")
        console.log(users);
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
                    console.log(user.foodPercentage())
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

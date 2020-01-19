const Profile = require('./profile');
const crawler = require('../Crawling/crawler')

//This is for computing ranking : input UserId , should return the rank or the overall score


function executeRank(){
 
 
    var userlist = Profile.fetchAll();

    

    let recommandedFat = 70;
    let recommandedCarbon = 300;
    let recommandedProtein = 56;
    
    var Fat=[];//to store the fat in the same order as the userlist, i am gonna iterate through every object in userlist and fill these arraylist.
    var carbon =[];
    var  proteinIntake =[];

    var calories = [];

    var foodScore = [];
    var exerciseScore = [];
    var foodRank = [];
    var exerciseRank = [];

    var overallRank = [];

    for(var i = 0; i< userlist.length; i++){//iterating userlist

    
    //Todo: retrive food/exercise data from User profile

    let fat1 = 0;
    let carbon1 = 0;
    let protein1 =0;
    for(var j = 0; j< userlist[i].meal.length; j++){//iterate food and exerice and put them in above things


        crawler.getCaloriesPerMeal(userlist[i].meal[j].name, (calories,carbs,protein,fat) => {
            // console.log(calories)
            
            //meal.calories = calories;
            carbon1 = carbs+carbon1;
            protein1 = protein+protein1;
            fat1 = fat+fat1;

        })
    } 

    Fat.push(fat1);
    carbon.push(carbon1);
    proteinIntake.push(protein1);

    
    let caloriesFromAllAct = (userlist[i].activities.length+1) *350;//350 cal each activity
    exerciseRank.push(caloriesFromAllAct);

    // let recommandedAerobic = 0;
    // let recommandedAnaerobic = 0;
    // let Aerobic = 0;
    // let Anaerobic = 0;
    
    // let foodScore = calculateFoodScore(recommandedFat,recommandedCarbon,recommandedProtein,Fat,carbon,proteinIntake);
    // let exerciseScore = calculateExerciseScore(recommandedAerobic,recommandedAnaerobic,Aerobic,Anaerobic);
    
    ////now, compute foodScore rank and exerciseScore rank, take the average of those two and rank again as the final rank.
    }

    for(var i =0; i<userlist.length;i++ ){
        foodScore.push( calculateFoodScore(recommandedFat,recommandedCarbon,recommandedProtein,Fat[i],carbon[i],proteinIntake[i])  ) ;
    }
    foodRank = getRank(foodScore);
    exerciseRank = getRank(exerciseScore);

  
    
for(var i = 0; i < foodRank.length;i++){//compute overall rank with foodrank and exercise rank
    let averageRank = parseInt((foodRank[i]+exerciseRank[i])/2);
    overallRank.push(averageRank);
}

    //assign ranks to userlist

    for(var i = 0; i<userlist.length;i++){
        userlist[i].setRank(overallRank[i]);
    }

    console.log(userlist);
    console.log("no way!");
}

function calculateFoodScore(recommandedFat,recommandedCarbon,recommandedProtein,fat,carbon,protein){
          
           
          let foodScore_variance = ((recommandedFat-fat)*(recommandedFat-fat)+(recommandedProtein-protein)*(recommandedProtein-protein)+(recommandedCarbon-carbon)*(recommandedCarbon-carbon))/3;
          return foodScore_variance;
    
}

// function calculateExerciseScore(recommandedAerobic,recommandedAnaerobic,Aerobic,Anaerobic){
          

//           let exerciseScore =((recommandedAnaerobic-Aerobic)*(recommandedAnaerobic-Aerobic)+(recommandedAerobic-Anaerobic)*(recommandedAerobic-Anaerobic))/2;
//           return exerciseScore;
// }





// function getExerciseRank(){
//     //Todo : input ranking score and id, refresh database, from the database, we derive all the food/exercuse ranking/id, rerank all of them and return the rank

//     return exerciseRank;
// }

function getRank(whateverScore){

    let bubbleSort = (inputArr) => {
        let len = inputArr.length;
        for (let i = 0; i < len; i++) {
            for (let j = 0; j < len; j++) {
                if (inputArr[j] > inputArr[j + 1]) {
                    let tmp = inputArr[j];
                    inputArr[j] = inputArr[j + 1];
                    inputArr[j + 1] = tmp;
                }
            }
        }
        return inputArr;
    };

    return bubbleSort(whateverScore);

     //input Arraylist of Id match rank, sort the list, return rank.
}


var joe = new Profile(joe,180,79,19,k,male);
    joe.save();
    joe.addmeal("banana");
    joe.addActivity("run");

var joe1 = new Profile(joe1,189,79,19,k,male);
    joe.save();
    joe.addmeal("apple");
    joe.addActivity("swim");

var joe2 = new Profile(joe2,180,79,19,k,male);
    joe.save();
    joe.addmeal("orange");
    joe.addActivity("walk");
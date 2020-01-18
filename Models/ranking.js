
//This is for computing ranking : input UserId , should return the rank or the overall score


function executeRank(UserId){


    //Todo: retrive food/exercise data from User profile
    let recommandedFat = 0;
    let recommandedCarbon = 0;
    let recommandedProtein = 0;
    let fat = 0;
    let carbon = 0;
    let protein = 0;

    let recommandedAerobic = 0;
    let recommandedAnaerobic = 0;
    let Aerobic = 0;
    let Anaerobic = 0;
    
    let foodScore = calculateFoodScore(recommandedFat,recommandedCarbon,recommandedProtein,fat,carbon,protein);
    let exerciseScore = calculateExerciseScore(recommandedAerobic,recommandedAnaerobic,Aerobic,Anaerobic);
    //now, compute foodScore rank and exerciseScore rank, take the average of those two and rank again as the final rank.

    let foodRank = getFoodRank(UserId, foodScore);
    let exerciseRank = getExerciseRank(UserId,exerciseScore);

    let averageRank = parseInt((foodRank+exerciseRank)/2);

    

//Todo: The averageRank may not be accurate, since two people may have the same rank, to change this, sort AverageRank again.
    

    return averageRank;
    
}

function calculateFoodScore(recommandedFat,recommandedCarbon,recommandedProtein,fat,carbon,protein){
          
          
          let foodScore_variance = ((recommandedFat-fat)*(recommandedFat-fat)+(recommandedProtein-protein)*(recommandedProtein-protein)+(recommandedCarbon-carbon)*(recommandedCarbon-carbon))/3;
          return foodScore_variance;
    
}

function calculateExerciseScore(recommandedAerobic,recommandedAnaerobic,Aerobic,Anaerobic){
          

          let exerciseScore =((recommandedAnaerobic-Aerobic)*(recommandedAnaerobic-Aerobic)+(recommandedAerobic-Anaerobic)*(recommandedAerobic-Anaerobic))/2;
          return exerciseScore;
}



function getFoodRank(){
//Todo: see below

   return FoodRank;
}

function getExerciseRank(){
    //Todo : input ranking score and id, refresh database, from the database, we derive all the food/exercuse ranking/id, rerank all of them and return the rank

    return exerciseRank;
}

function getRank(){
     //imagine we have a array from database
     //Todo: input Arraylist of Id match rank, sort the list, return rank.
}



function storeRank(){
//Todo: store the data of rank or score in database
}
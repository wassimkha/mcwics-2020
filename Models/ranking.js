
//This is for computing ranking : input UserId , should return the rank or the overall score


function executeRank(UserId){


    //retrive food/exercise data from User profile
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
    let overallScore = calculateOverallScore(foodScore,exerciseScore);


    //returning overallsocre, not the rank

    return overallScore;
    
}

function calculateFoodScore(recommandedFat,recommandedCarbon,recommandedProtein,fat,carbon,protein){
          
          //Todo: cal foodRank
          let foodScore_variance = ((recommandedFat-fat)*(recommandedFat-fat)+(recommandedProtein-protein)*(recommandedProtein-protein)+(recommandedCarbon-carbon)*(recommandedCarbon-carbon))/3;
          return foodScore_variance;
    
}

function calculateExerciseScore(recommandedAerobic,recommandedAnaerobic,Aerobic,Anaerobic){
          
//Todo cal exerciserank
          let exerciseScore =((recommandedAnaerobic-Aerobic)*(recommandedAnaerobic-Aerobic)+(recommandedAerobic-Anaerobic)*(recommandedAerobic-Anaerobic))/2;
          return exerciseScore;
}

function calculateOverallScore(foodScore,exerciseScore){

}

function getRank(){
     //imagine we have a array from database
     //Todo: input Arraylist of Id match rank, sort the list, return rank.
}



function storeRank(){
//Todo: store the data of rank or score in database
}
exports.getCaloriesPerMeal = (Meal,cb) => {
    var request= require('request');
    let calories = null;
    let url = 'https://api.edamam.com/api/food-database/parser?ingr='+Meal+'&app_id=997da8e3&app_key=007ec86dd80142e6c5af2764c8c4b77e'
    url = encodeURI(url);
    return request.get(url,function(err,res,body){
    if(err) { 
         return null

    }
    if(res.statusCode === 200 ) {
        const jsonResp = JSON.parse(body)
        calories = jsonResp.hints[0].food.nutrients.ENERC_KCAL
        carbs = jsonResp.hints[0].food.nutrients.CHOCDF
        protein = jsonResp.hints[0].food.nutrients.PROCNT
        fat = jsonResp.hints[0].food.nutrients.FAT

        
        cb(calories,carbs,protein,fat);
        
    } 
    });
    
}

















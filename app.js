//import
const express = require('express');
const bodyParser = require('body-parser'); // body parser
const path = require('path');
const router = require('./Routes/route')



const app = express();

global.currentUser = "Ryan";



//set uo templating engine
app.set('view engine','ejs'); // to let express know what templating engine we're using
app.set('views', 'views'); //where to find the templates


//set up body parser
app.use(bodyParser.urlencoded({extended: false}));

//set up body parser
app.use(express.static(path.join(__dirname,'public'))); // CSS


// if (!currentUser) {
//     app.use('/', (req,res,next) => {
//         res.redirect('/login')
//     })
// }




app.use(router.routes);

exports.currentUser = currentUser;
app.listen(3000);

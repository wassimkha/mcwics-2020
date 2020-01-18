//import
const express = require('express');
const bodyParser = require('body-parser'); // body parser
const path = require('path');


const app = express();

//set uo templating engine
app.set('view engine','ejs'); // to let express know what templating engine we're using
app.set('views', 'views'); //where to find the templates


//set up body parser
app.use(bodyParser.urlencoded({extended: false}));

//set up body parser
app.use(express.static(path.join(__dirname,'public'))); //allows the public folder to be accesible by other files (read)

app.use('/', (req,res,next) => {
    res.render("index");
})


app.listen(3000);
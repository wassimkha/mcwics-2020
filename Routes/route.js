const express = require('express');
const path = require('path');



app.use('/', (req,res,next) => {
    res.render("index");
})

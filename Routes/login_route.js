const express = require('express');
const path = require('path');

const router = express.Router();



router.get('/', (req,res,next) => {
    res.redirect("/login")
})



exports.routes = router;
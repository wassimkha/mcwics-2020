const express = require('express');
const path = require('path');
const controller = require('../Controllers/controller')
const router = express.Router();

router.get('/', controller.index)

// router.get('/add-meal', controller.addMeal)




exports.routes = router;
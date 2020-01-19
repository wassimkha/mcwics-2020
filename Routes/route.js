const express = require('express');
const path = require('path');
const controller = require('../Controllers/controller')
const router = express.Router();

router.post('/home', controller.postHome)
router.post('/login', controller.postLogin)
router.get('/login', controller.getLogin)
router.post('/setup',controller.getSetup)


router.get('/', controller.index)





exports.routes = router;
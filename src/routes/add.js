const mongoose = require('mongoose');
const config = require('../config');

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.send('Hello Add');
});

module.exports = router;

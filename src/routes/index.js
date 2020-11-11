const mongoose = require('mongoose');
const { mongoUri } = require('../config');
const PostModel = require('../models/post');
var express = require('express');
var router = express.Router();

async function connectMongoose() {
  await mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  })
    .then(console.log('MongoDb Connected'))
    .catch(error => console.log(error));
}

connectMongoose();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.sendFile('index');
});

module.exports = router;

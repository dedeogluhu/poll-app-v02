const mongoose = require('mongoose');
const { mongoUri } = require('../config');
var express = require('express');
var router = express.Router();

async function connectMongoose() {
  try {
    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    });

    console.log('MongoDb Connected');
  } catch (error) {
    console.log(error);
  }
}

//connectMongoose();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index');
});

module.exports = router;

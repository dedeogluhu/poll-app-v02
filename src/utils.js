const mongoose = require('mongoose');
const { MONGO_URI } = require('./config');

async function connectMongoDB() {
    await mongoose.connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    },
        console.log('MongoDB Connected...'))
        .catch(error => console.log(error));
}

module.exports = { connectMongoDB };
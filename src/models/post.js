const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Post = new Schema({
    author: ObjectId,
    header: String,
    choices: Array,
    date: Date
});
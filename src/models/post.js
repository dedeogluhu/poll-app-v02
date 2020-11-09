const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const PostSchema = new Schema({
    id: ObjectId,
    header: String,
    choices: Array,
    date: Date
});

module.exports = mongoose.model('Post', PostSchema);
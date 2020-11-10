const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const PostSchema = new Schema({
    id: ObjectId,
    header: { type: String, required: true },
    choices: { type: [String], required: true },
    date: { type: Date, required: true }
});

module.exports = mongoose.model('Post', PostSchema);
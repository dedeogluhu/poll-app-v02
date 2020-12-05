const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    question: { type: String, required: true },
    choices: { type: mongoose.Schema.Types.Mixed, required: true },
    date: { type: Date, required: true, default: Date.now() }
});

module.exports = mongoose.model('Post', PostSchema);
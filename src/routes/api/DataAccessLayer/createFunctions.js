const Post = require('../../../models/Post');

async function createPost(req, res) {
    const post = new Post({
        question: req.body.question,
        choices: req.body.choices,
        date: Date.now()
    });

    try {
        const postSaved = await post.save()
        res.send(postSaved);
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    createPost
};
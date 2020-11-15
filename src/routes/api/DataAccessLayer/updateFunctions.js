const Post = require('../../../models/Post');

async function updateById(req, res) {
    try {
        const postUpdated = await Post.findByIdAndUpdate(req.params.id, {
            question: req.body.question,
            choices: req.body.choices
        }, {
            new: true
        });
        res.send(postUpdated);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    updateById
};
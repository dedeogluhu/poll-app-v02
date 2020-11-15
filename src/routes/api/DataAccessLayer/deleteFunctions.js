const Post = require('../../../models/Post');

async function deleteById(req, res) {
    try {
        const postDeleted = await Post.findByIdAndDelete(req.params.id);
        res.send(postDeleted);
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    deleteById
};

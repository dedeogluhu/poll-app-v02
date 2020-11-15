const Post = require('../../../models/Post');

async function getAll(req, res) {
    try {
        const posts = await Post.find();
        res.send(posts);
    } catch (error) {
        console.log(error);
    }
};

const getById = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.send(post);
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    getAll,
    getById
};
const express = require('express');
const postsRouter = express.Router();
const getPosts = require('../models/posts')

postsRouter.get('/posts', async (req, res) => {
    const posts = await getPosts();
    res.send(posts.data)
})

module.exports = postsRouter

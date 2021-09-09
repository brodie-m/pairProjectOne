const express = require('express');
const usersRouter = express.Router();
const getUsers = require('../models/users');
const getPosts = require('../models/posts');



usersRouter.get('/users', async (req, res) => {
    const users = await getUsers();
    res.send(users.data)
})


usersRouter.get('/users/:name', async (req, res) => {
    const users = await getUsers();
    const posts = await getPosts();
    // const foundUser = users.data.findIndex(x => x.id === req.params.id)
    // res.send(foundUser)
    try {
        const userData = await users.data;
        const postsData= await posts.data;
        userData.splice(0,(userData.length-postsData.length))
        //add posts data to users data
        for (let i = 0; i < userData.length; i++) {
            userData[i].post = postsData[i];
        }
        console.log(userData)
        //search by name
        let foundUser = userData.filter((user) => {
            return user.firstName == req.params.name
        })
        //search by tags
        if (foundUser.length === 0) {
            let foundUser = userData.filter((user) => {
                return user.post.tags.includes(req.params.name)
                })
            res.send(foundUser);
            // need to re-implement error handling
            // console.log('error')
            // return res.status(404).send("No user found")
        } else {
            res.send(foundUser)
        }
    } catch (error) {
        res.status(500).send('server error')
    }
})



// router.get('/', async(req, res)=>{

// })


module.exports = usersRouter;
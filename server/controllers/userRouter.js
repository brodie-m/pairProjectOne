const express = require('express');
const router = express.Router();
const getUsers = require('../models/users');


router.get('/users', async (req, res) => {
    const users = await getUsers();
    res.send(users.data)
})

router.get('/users/:name', async (req, res) => {
    const users = await getUsers();
    // const foundUser = users.data.findIndex(x => x.id === req.params.id)
    // res.send(foundUser)
    try {
        const userData = await users.data;

        const foundUser = userData.filter((user) => {
            return user.firstName == req.params.name
        })

        if (foundUser.length === 0) {
            console.log('error')
            return res.status(404).send("No user found")
        } else {
            res.send(foundUser)
        }
    } catch (error) {
        res.status(500).send('server error')
    }
})



// router.get('/', async(req, res)=>{

// })


module.exports = router;
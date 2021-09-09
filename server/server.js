const express = require('express')
const cors = require('cors')
const getUsers = require('./models/users')
const getPosts = require('./models/posts')
const userRouter = require('./controllers/userRouter')
const postsRouter = require('./controllers/postsRouter')


const app = express()
app.use(cors())
app.use('/',userRouter)
app.use('/',postsRouter)

const port = 3000;
app.listen(port, () => {
    console.log(`Express running on ${port}`)
});


module.exports = app


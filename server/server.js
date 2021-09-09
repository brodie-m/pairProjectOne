const express = require('express')
const cors = require('cors')
const getUsers = require('./models/users')
const userRouter = require('./controllers/userRouter')


const app = express()
app.use(cors())
app.use('/',userRouter)
app.use('/', userRouter)

const port = 3000;
app.listen(port, () => {
    console.log(`Express running on ${port}`)
});


module.exports = app


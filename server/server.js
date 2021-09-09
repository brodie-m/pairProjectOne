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
})

// app.get('/users', async (req, res) => {
//     const users = await getUsers();

//     res.send(users.data)
// })

// app.get('/users/:name', async (req, res) => {
//     const users = await getUsers();
//     // const foundUser = users.data.findIndex(x => x.id === req.params.id)
//     // res.send(foundUser)
//     try {
//         const userData = await users.data;

//         const foundUser = userData.filter((user) => {
//             return user.firstName == req.params.name
//         })

//         if (foundUser.length === 0) {
//             console.log('error')
//             return res.status(404).send("No user found")
//         } else {
//             res.send(foundUser)
//         }
//     } catch (error) {
//         res.status(500).send('server error')
//     }

// })

// const CognitiveServicesCredentials = require('@azure/ms-rest-azure-js').CognitiveServicesCredentials;
// const WebSearchAPIClient = require('@azure/cognitiveservices-websearch');

// let credentials = new CognitiveServicesCredentials('a0ce479e369245e9886f1cf3c3145f16');
// let webSearchApiClient = new WebSearchAPIClient(credentials);

// webSearchApiClient.web.search('seahawks').then((result) => {
//     let properties = ["images", "webPages", "news", "videos"];
//     for (let i = 0; i < properties.length; i++) {
//         if (result[properties[i]]) {
//             console.log(result[properties[i]].value);
//         } else {
//             console.log(`No ${properties[i]} data`);
//         }
//     }
// }).catch((err) => {
//     throw err;
// })
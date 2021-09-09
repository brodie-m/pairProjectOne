
const axios = require('axios');
const getPosts = async () => {

    const posts = await axios(`https://dummyapi.io/data/v1/post`, {
        method: 'get',
        headers: {
            "app-id": '6138de4d310f137dece93f70'
        }
    })
    return posts.data;
}

module.exports = getPosts;
const axios = require('axios');
const getUsers = async () => {
    const users = await axios('https://dummyapi.io/data/v1/user?page=1&limit=500', {

        method: 'get',
        headers: {
            "app-id": '6138de4d310f137dece93f70'
        }
    })
    const usersData = await users.data;
    return users.data;
}
module.exports = getUsers
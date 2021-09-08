const searchButton = document.getElementById('google-search-button')
searchButton.addEventListener('click', async (e) => {
    e.preventDefault();
    document.querySelector('.search-page').classList.add('hidden');
    document.getElementById('results-card').classList.remove('hidden');
    //     fetch('http://localhost:3000/')
    //         .then(response => response.json().forEach((e) => {
    //             console.log(e)
    //             document.getElementById('card-text').innerHTML += e
    //         }))

    const users = await fetch('http://localhost:3000/')

    const allUser = await users.json()
    document.getElementById('card-text').innerHTML = allUser[0].firstName
   



})

// response => {
//     response.json()
//     console.log(response.json())

// })
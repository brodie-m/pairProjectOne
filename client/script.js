const searchButton = document.getElementById('google-search-button')

async function dealsWithClick(e) {
    e.preventDefault();
    console.log('clicked')
    let query = getSearchQuery();
    if (!query) {
        return
    }
    //page conversion
    document.querySelector('.search-page').classList.add('hidden');
    document.getElementById('results-card').classList.remove('hidden');
    document.getElementById('nav-middle').classList.toggle('hidden');
    if (query === 'all') {
        query = ''
    }
    const resultsBar = document.getElementById('resultsBar')
    resultsBar.setAttribute("placeholder", `${query}`)
    //end page conversion


    //make card

    const users = await fetch(`http://localhost:3000/users/${query}`)
    const allUser = await users.json()
    generateInterests(allUser);
    console.log(allUser)
    generateCard(allUser)
}

function generateCard(allUser) {
    for (let i = 0; i < allUser.length; i++) {
        //create card
        const card = document.createElement('div');
        card.classList.add('card');
        //create image and change attributes, add class
        const img = document.createElement('img')
        img.setAttribute("src", `${allUser[i].picture}`)
        img.classList.add('card-image-round')
        //create card title
        const title = document.createElement('h1')
        title.innerHTML = `${allUser[i].firstName}  ${allUser[i].lastName}`
        // add some filler text
        const interests = document.createElement('p')
        interests.innerHTML = `One of my interests is: ${allUser[i].interests}`
        card.append(img);
        card.append(title);
        card.append(interests)
        document.querySelector('.card-host').append(card)
    }
}


searchButton.addEventListener('click', e => dealsWithClick(e))


// //append
// document.getElementById('card-title').innerHTML = `${allUser[i].firstName}  ${allUser[i].lastName}`
// document.getElementById('card-image').setAttribute("src",`${allUser[i].picture}`)







function getSearchQuery() {
    const searchQuery = document.getElementById('searchBarText').value;
    return searchQuery;
}



function generateInterests(users) {
    const interests = ['coding', 'cooking', 'baking', 'badminton', 'football', 'gym', 'chess', 'test driven development']
    for (let i = 0; i < users.length; i++) {
        const randomInterest = interests[Math.floor(Math.random()*(interests.length))]
        users[i].interests = `${randomInterest}`
    }
}

// response => {
//     response.json()
//     console.log(response.json())

// })
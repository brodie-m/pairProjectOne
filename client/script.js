const searchButton = document.getElementById('google-search-button')
const luckyButton = document.getElementById('lucky-button')
searchButton.addEventListener('click', e => dealsWithGoogleSearch(e))
luckyButton.addEventListener('click', e => dealsWithLucky(e))

async function dealsWithLucky(e) {
    e.preventDefault();
    let query = getSearchQuery();
    pageConversion(query);
    const users = await fetch(`http://localhost:3000/users/`)
    const allUser = await users.json()
    console.log(allUser.length)
    const randomIndex = Math.floor(Math.random() * (allUser.length))
    console.log(randomIndex)
    const randomUser = allUser[randomIndex];
    generateInterests([randomUser]);
    generateCard([randomUser]);
}

async function dealsWithGoogleSearch(e) {
    e.preventDefault();
    console.log('clicked')
    let query = getSearchQuery();
    if (!query) {
        return
    }
    pageConversion(query);
  

    const users = await fetch(`http://localhost:3000/users/${query}`)
    const allUser = await users.json()
    generateInterests(allUser);
    console.log(allUser)
    generateCard(allUser)
}

function pageConversion(query) {
    document.querySelector('.search-page').classList.add('hidden');
    document.getElementById('results-card').classList.remove('hidden');
    document.getElementById('nav-middle').classList.toggle('hidden');
    if (query === 'all') {
        query = ''
    }
    const resultsBar = document.getElementById('resultsBar')
    resultsBar.setAttribute("placeholder", `${query}`)
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
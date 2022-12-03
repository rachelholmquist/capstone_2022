const imageContainer = document.querySelector('#image-container');
const visitedContainer = document.querySelector('#visited-container')
const nextContainer = document.querySelector('#up-next-container')

const url = `http://localhost:4003/api/parks`
const vUrl = `http://localhost:4003/api/visited`
const dUrl = `http://localhost:4003/api/delete/`
const nUrl = `http://localhost:4003/api/next`

const parksCallback = ({data: parks }) => displayParks(parks);
const visitedCallback = ({ data: userdata }) => displayVisited(userdata);
const upNextCallback = ({ data: upnext }) => displayNext(upnext);
const errCallback = err => console.log(err);

const getAllParks = () => axios.get(url).then(parksCallback).catch(errCallback);

function saveVisitedParks (id, name, location, image) 
{axios.post(url, {id, name, location, image}).then(alert('Saved to visited list')).catch(errCallback);}

function saveNextParks (id, name, location, image) 
{axios.post(nUrl, {id, name, location, image}).then(alert('Saved to Up Next list')).catch(errCallback);}

const getVisitedParks = () => axios.get(vUrl).then(visitedCallback).catch(errCallback);

const deletePark = (id) => axios.delete(dUrl+id).then(getVisitedParks).catch(errCallback);

const getNextParks = () => axios.get(nUrl).then(upNextCallback).catch(errCallback);

function createParkCard (parks) {
    const parkCard = document.createElement('div');
    parkCard.classList.add('park-card');

    parkCard.innerHTML = `<img alt='park cover image' src=${parks.image} class='park-card-image'><br>
    <div class="name">${parks.name}<br><br>${parks.location}</div><br>
    <button id="saveToVisit" onclick="saveVisitedParks(${parks.id}, '${parks.name}', '${parks.location}', '${parks.image}')">Save to Visited List</button><br>
    <button id="saveToNext" onclick="saveNextParks(${parks.id}, '${parks.name}', '${parks.location}', '${parks.image}')">Save to Up Next List</button>
    `

    imageContainer.appendChild(parkCard);
}

function displayParks (arr) {
    imageContainer.innerHTML = ``;
    for(let i = 0; i < arr.length; i++){
        createParkCard(arr[i])
    }
}

getAllParks();
// displayParks();

function createVisitedCard (userdata) {
    const visitedCard = document.createElement('div')
    visitedCard.classList.add('visited-card')

    visitedCard.innerHTML = `<img alt='park cover image' src=${userdata.image} class='park-card-image'/><br>
    <div class="name">${userdata.name}<br><br>${userdata.location}</div>
    <br>
    <button id="deleteBtn" onclick="deletePark(${userdata.id})">Delete</button>`


    visitedContainer.appendChild(visitedCard);
}

function displayVisited (arr) {
    visitedContainer.innerHTML = ``
    for(let i = 0; i < arr.length; i++){
        createVisitedCard(arr[i])
    }
}

getVisitedParks();

function createNextCard (upnext) {
    const nextCard = document.createElement('div')
    nextCard.classList.add('next-card')

    nextCard.innerHTML = `<img alt='park cover image' src=${upnext.image} class='park-card-image'/><br>
    <div class="name">${upnext.name}<br><br>${upnext.location}</div>
    <br>
    <button id="deleteNextBtn" onclick="deleteNextPark(${upnext.id})">Delete</button>`

    nextContainer.appendChild(nextCard);
}

function displayNext (arr) {
    nextContainer.innerHTML = ``
    for(let i = 0; i < arr.length; i++){
        createNextCard(arr[i])
    }

getNextParks();
}
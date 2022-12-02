const imageContainer = document.querySelector('#image-container');
const visitedContainer = document.querySelector('#visited-container')

const url = `http://localhost:4003/api/parks`

const parksCallback = ({data: parks }) => displayParks(parks);
// const visitedCallback = ({ data: userdata }) => displayVisited(userdata);
const errCallback = err => console.log(err);

const getAllParks = () => axios.get(url).then(parksCallback).catch(errCallback);
function saveVisitedParks (id, name, location, image) 
{axios.post(url, {id, name, location, image}).then(alert('success')).catch(errCallback);}

function createParkCard (parks) {
    const parkCard = document.createElement('div');
    parkCard.classList.add('park-card');

    parkCard.innerHTML = `<img alt='park cover image' src=${parks.image} class='park-card-image'><br>
    <div class="name">${parks.name}<br>${parks.location}</div>
    <button onclick="saveVisitedParks(${parks.id}, '${parks.name}', '${parks.location}', '${parks.image}')">Save to Visited List</button>
    <button id="saveToNext">Save to Up Next List</button>
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
displayParks();




// function createVisitedCard (userdata) {
//     const visitedCard = document.createElement('div')
//     visitedCard.classList.add('visited-card')

//     visitedCard.innerHTML = `<img alt='park cover image' src=${userdata.image} class='visited-card-image'/>
//     <br>
//     <div class="name">${userdata.name}<br>${userdata.location}</div>`


//     visitedContainer.appendChild(visitedCard);
// }

// function displayVisited (arr) {
//     visitedContainer.innerHTML = ``
//     for(let i = 0; i < arr.length; i++){
//         createVisitedCard(arr[i])
//     }
// }

// function testing () {
//     alert('made it')
// }
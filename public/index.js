const imageContainer = document.querySelector('#image-container');

const url = `http://localhost:4003/api/parks`

const parksCallback = ({data: parks }) => displayParks(parks);
const errCallback = err => console.log(err);

const getAllParks = () => axios.get(url).then(parksCallback).catch(errCallback);

function createParkCard (parks) {
    const parkCard = document.createElement('div')
    parkCard.classList.add('park-card')

    parkCard.innerHTML = `<img alt='park cover image' src=${parks.image} class='park-card-image'>`

    imageContainer.appendChild(parkCard);
}

function displayParks (arr) {
    imageContainer.innerHTML = ``;
    for(let i = 0; i < arr.length; i++){
        createParkCard(arr[i])
    }
}

getAllParks();

parkBtn = document.querySelector('#getParks');

parkBtn.addEventListener('click', displayParks);
const nationalParks = require('./db.json')
const visitedArray = require('./userdata.json')
const fs = require('fs')

module.exports = {
    getParks: (req, res) => {
        res.status(200).send(nationalParks)
    },

    saveToVisited: (req, res) => {
        const { id, name, location, image } = req.body;
        let data = visitedArray;

        data.push ({
            id : `${id}`,
            name : `${name}`,
            location : `${location}`,
            image : `${image}`
        })
        fs.writeFileSync('server/userdata.json', JSON.stringify(data, null, 2));
        res.status(200).send("Park added successfully.");

    },

    getVisited : (req, res) => {
        res.status(200).send(visitedArray);
    }

    // saveHandler: (parks, res) => {

    //     let bodyObject = {
    //         id: `${parks.id}`.valueOf,
    //         name: `${parks.name}`.valueOf,
    //         location: `${parks.location}`.valueOf,
    //         image: `${parks.image}`.valueOf
    //     }
    
    //     function saveVisited (bodyObject) {
    //         const { id, name, location, image } = bodyObject;
    //         visitedArray.push ({
    //             id : `${id}`,
    //             name : `${name}`,
    //             location : `${location}`,
    //             image : `${image}`
    //         })
    //     }
    
    
    // }
}
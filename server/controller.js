const nationalParks = require('./db.json')
const visitedArray = require('./userdata.json')

module.exports = {
    getParks: (req, res) => {
        res.status(200).send(nationalParks)
    },

    saveToVisited: (req, res) => {
        const { id, name, location, image } = req.body;
        visitedArray.push ({
            id,
            name,
            location,
            image
        })
        res.status(200).send(visitedArray);

    }
}
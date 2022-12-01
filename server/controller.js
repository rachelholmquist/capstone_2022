const nationalParks = require('./db.json')

module.exports = {
    getParks: (req, res) => {
        res.status(200).send(nationalParks)
    }
}
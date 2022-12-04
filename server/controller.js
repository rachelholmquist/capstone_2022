const nationalParks = require('./db.json')
const visitedArray = require('./userdata.json')
const upNextArray = require('./upnext.json')
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
    },

    deletePark : (req, res) => {
        const { id } = req.params;
        let data = visitedArray;
        for(let i = 0; i < data.length; i++){
            if(data[i].id === id){
                data.splice(i, 1)
            }
        } 
        fs.writeFileSync('server/userdata.json', JSON.stringify(data, null, 2));
        res.status(200).send(`deleted successfully`);
    },
    saveToUpNext: (req, res) => {
        const { id, name, location, image } = req.body;
        let data = upNextArray;

        data.push ({
            id : `${id}`,
            name : `${name}`,
            location : `${location}`,
            image : `${image}`
        })
        fs.writeFileSync('server/upnext.json', JSON.stringify(data, null, 2));
        res.status(200).send("Park added to Up Next successfully.");
    },
    getNext : (req, res) => {
        res.status(200).send(upNextArray);
    },

    deleteNextPark : (req, res) => {
        const { id } = req.params;
        let data = upNextArray;
        for(let i = 0; i < data.length; i++){
            if(data[i].id === id){
                data.splice(i, 1)
            }
        } 
        fs.writeFileSync('server/upnext.json', JSON.stringify(data, null, 2));
        res.status(200).send(`deleted successfully`);
    },
    rateVisitedPark: (req, res) => {
        const { id, rating } = req.params;
        // const { rating } = req.body;
        let data = visitedArray;
        console.log(req.params);
        for(let i = 0; i < data.length; i++){
            if(data[i].id === id){
                data[i] = {...data[i], "rating": rating}
            }
        }
        fs.writeFileSync('server/userdata.json', JSON.stringify(data, null, 2));
        res.status(200).send("Updated successfully.");
    }
}
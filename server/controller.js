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
    },

    deletePark : (req, res) => {
        const { id } = req.params;
        let data = visitedArray;
        console.log('data before', req.data);
        for(let i = 0; i < data.length; i++){
            if(id === data[i].id){
                data.splice(i, 1)
            }
        } 
        fs.writeFileSync('server/userdata.json', JSON.stringify(data, null, 2));
        res.status(200).send(`deleted successfully`);
    } 

}
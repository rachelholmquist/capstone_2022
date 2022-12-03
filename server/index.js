
const express = require('express');
const cors = require('cors');
const { getParks, saveToVisited, getVisited, deletePark } = require('./controller');

const app = express();
app.use(express.json())
app.use(cors());


app.get('/api/parks', getParks);
app.post('/api/parks', saveToVisited)
app.get('/api/visited', getVisited)
app.delete('/api/delete', deletePark)

app.listen(4003, () => console.log('server running on 4003'))

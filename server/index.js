
const express = require('express');
const cors = require('cors');
const { getParks, saveToVisited } = require('./controller');

const app = express();

app.use(express.json())
app.use(cors());


app.get('/api/parks', getParks);
app.post('/api/parks', saveToVisited)

app.listen(4003, () => console.log('server running on 4003'))

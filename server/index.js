require('dotenv').config()
const express = require('express');
const app = express();
const {SERVER_PORT} = process.env
const {seed} = require('./controller.js')

app.use(express.json())

app.listen(4003, () => console.log('server running on 4003'))

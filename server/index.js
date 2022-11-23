const express = require('express');
const app = express();

app.use(express.json())

app.listen(4003, () => console.log('server running on 4003'))

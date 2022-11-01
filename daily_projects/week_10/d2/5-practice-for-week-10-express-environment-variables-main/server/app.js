const express = require('express');
const app = express();
// Your code here
require('dotenv').config() //.congfig needs to be called like a function



app.get('/', (req, res) => {
    res.send(process.env.SECRET_MESSAGE);
});

const port = process.env.PORT;
app.listen(port, () => console.log('Server is listening on port', port));

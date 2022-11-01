const express = require('express');
const app = express();

// app.use(express.static('assets')); //serves the assts folder to server


// Part 2: File paths appended to root URL

app.use(express.static('assets/scripts')); // serves only the specific files


//part 3

app.use("/stylesheets", express.static("assets/css")); //puts the css assests into a virtural directory called stylesheets




const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));

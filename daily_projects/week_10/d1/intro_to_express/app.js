const express = require("express"); //imprts the express package into the js file


const app = express(); //creats an instance of express on this file


app.get("/", (req, res) => { //route handler container format to respond to client side of making a standard get request of the base url
    res.send("Hello from the app! This is new!"); //plaintext response to send back to client after reciving a get request
});

const port = 5000; //sets the port
app.listen(port, () => console.log(`Server is listening on port ${port}.`)); //tell the server to focus on port and to console.log

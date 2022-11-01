const express = require("express"); //requires the express package for this file

const router = express.Router(); //asigns a var to the .ROUTER method for easier code

// GET /colors - send a JSON of "GET /colors"
// GET /colors/:name - send a JSON of "GET /colors/:name"
// For example, a GET /colors/purple request should return a JSON response of "GET /colors/:name"

router.use((req, res, next) =>{
    if(req.body.auth === "yes") {
        next()
    } else {
        res.json({
            error: "You are not authorized"
        })
    }
})


router.get("/", (req, res) => { // "/" is used in place of /colors bc we are compartmentalizing the colors dir as a router
    res.json("GET /colors")
});

router.get("/:name", (req, res) => { //returns the get request of a color by name in json format
    res.json(`GET /colors/${req.params.name}`) //interpolation to grab dynamic param and feed through to the output
});





module.exports = router; //DO NOT FORGET TO EXPORT!!!!!

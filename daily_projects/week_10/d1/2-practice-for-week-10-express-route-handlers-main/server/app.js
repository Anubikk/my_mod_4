// Phase 2
const {
  getAllArtists,
  getLatestArtist,
  getArtistByArtistId,
  addArtist,
  editArtistByArtistId,
  deleteArtistByArtistId,
  getAlbumsForLatestArtist,
  getAlbumsByArtistId,
  getAlbumByAlbumId,
  addAlbumByArtistId,
  editAlbumByAlbumId,
  deleteAlbumByAlbumId,
  getFilteredAlbums,
  getSongsByArtistId,
  getSongsByAlbumId,
  getSongBySongId,
  addSongByAlbumId,
  editSongBySongId,
  deleteSongBySongId
} = require('./data');

const express = require('express');
const app = express();
app.use(express.json()); // for parsing application/json middleware and needs to be above all endpoints

//componets of endpoints
// 1. method: GET, POST, PUT/PATCH, DELETE, USE, ALL
// 2. path/url: string, regular expression, array of strings
// 3. Middleware: functions, array of functions
// 4. responses: json(most used), send , redirect, render

// Phase 1
app.use((req, res, next) => { // request logging of all requests middleware
  console.log("Body", req.body) //returns the body of the request
  next(); // pass control to the next handler
});

 // Phase 2

//get all artists
app.get('/artists', (req, res) => { // get all artists route
  res.json(getAllArtists()); // send back all artists as JSON because we're using express.json()
});

//add artist
app.post('/artists', (req, res) => { // post route for adding an artist
  const artist = req.body; // get the artist from the request body
  addArtist(artist); // add the artist to the data
  res.json(artist); // send back the artist as JSON
});







;
const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));

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
app.use(express.json()); // for parsing application/json


app.use((req, res, next) => { // request logging of all requests
  next(); // pass control to the next handler
});


//get all artists
app.get('/artists', (req, res) => { // get all artists route
  res.json(getAllArtists()); // send back all artists as JSON
});

//add artist
app.post('/artists', (req, res) => {
  const artist = req.body;
  addArtist(artist);
  res.json(artist);
});


//




;
const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));

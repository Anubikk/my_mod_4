const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('GET / This is the root URL');

});

// You want to create a "Resource Not Found" middleware that should
//create an error when none of the route handlers are matched to a request
// method/URL path combination. This middleware should override that default Express response
// by throwing an error if a request doesn't match any of the route handlers.

app.use((req, res, next) => {
  const err = new Error('Not Found');
  

const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));

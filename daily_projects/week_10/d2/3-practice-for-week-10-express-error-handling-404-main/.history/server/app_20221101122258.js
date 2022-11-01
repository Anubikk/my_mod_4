const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('GET / This is the root URL');

});



app.use((req, res, next) => {
  const err = new Error('Sorry, the requested resource could not be found');
  err.status = 404;
  next(err);
});

// Create a catch-all errors middleware that sends a custom response
//  for any request that throws an error in your application. Define
//  an error handling middleware and connect it to the Express application
//  after all route handlers and middleware.


app.use((err, req, res, next) => {
  
const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));

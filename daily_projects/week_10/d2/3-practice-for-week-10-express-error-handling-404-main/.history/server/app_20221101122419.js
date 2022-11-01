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
// Then, extract the statusCode property on the error and set it as the status
// code for the response. If there is no statusCode property on the error caught
//  by the error-handling middleware, then set the status code of the response to a default of 500.

// Set the body of the response to a JSON containing a property of message with
// the error message as its value. Set another property of statusCode with the
// status code of the response as its value.

// Make sure the middleware is connected as the very last middleware in your
//  Express application so that it can catch any errors thrown in any of the route
//  handlers or middleware before it.

app.use((err, req, res, next) => {

const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));

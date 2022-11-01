const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('GET / This is the root URL');

});

//middleware to catch errors with specific message body

app.use((req, res, next) => { //will pass any error that is a 404 error and pass into the catch error
  const err = new Error('Sorry, the requested resource could not be found');
  err.statusCode = 404;
  next(err);
});


//master error handler to read previous errors and present them in json format with custom messages and status codes

app.use((err, req, res, next) => { //will catch all errors and present them in json object format key/val pairs
  res.status(err.statusCode || 500); //sets both 404 and 500 statuscodes to return as 404
  console.log(err);
  res.json({
    message: err.message, //prints the the body of the error
    statusCode: res.statusCode //prints the status code of error
  });
});


const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));

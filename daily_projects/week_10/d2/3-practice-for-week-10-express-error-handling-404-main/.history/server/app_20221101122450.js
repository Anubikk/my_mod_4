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

.

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    statusCode: res.statusCode
  });
});


const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));

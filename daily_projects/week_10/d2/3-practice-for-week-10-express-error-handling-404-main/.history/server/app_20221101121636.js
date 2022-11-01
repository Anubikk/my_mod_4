const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('GET / This is the root URL');

});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.status || 404);
  res.send("Sorry, the requested resource could not be found");
  
})

const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));

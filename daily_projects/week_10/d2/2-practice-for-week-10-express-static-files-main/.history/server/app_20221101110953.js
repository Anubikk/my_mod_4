const express = require('express');
const app = express();
// Part 1: File paths appended to root URL
// In your server folder, there is a folder called assets that holds CSS stylesheets, images, and JavaScript scripts. Serve all the files in the assets folder so that if you append the relative file path to the end of the root URL of the server, it will send the file to the client.

app.use(express.static('assets'));

// Part 2: File paths appended to root URL

 




const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));

const express = require('express');
const app = express();

// App/
// ├── Customers (/customer)
// │   ├── Add Customer (POST /customer)
// │   ├── View Customer Details (GET /customer/:id)
// │   ├── Edit Customer (PUT /customer/:id)
// │   └── Delete Customer (DELETE /customer/:id)
// ├── Products (/product)
// │   ├── View All Products (GET /product)
// │   └── View Product Details (GET /product/:id)
// │   // etc..

const peopleRouter = require('./routes/people');
const colorsRouter = require('./routes/colors');

app.use(express.json())

app.use("/colors", colorsRouter);
app.use('/people', peopleRouter);





const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));

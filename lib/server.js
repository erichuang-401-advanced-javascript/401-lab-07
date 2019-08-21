'use strict';

const express = require('express');
const app = express();
const time = require('./middleware/requestTime');
const logging = require('./middleware/logging');
const errorHandler = require('./middleware/errorHandler');
const valid = require('./middleware/valid');

//Routes
const categoryRoutes = require('./middleware/category-routes');

app.use(express.json());
app.use(time);
app.use('/docs', express.static('./docs'));

// Route to Get All Categories
app.get('/categories', logging('logging in get'), categoryRoutes.get);

// Route to Create a Category
app.post('/categories', logging('logging in post'), valid, categoryRoutes.post);

app.use(errorHandler.error404);
app.use(errorHandler.error500);

let PORT = process.env.PORT || 3000;

module.exports = {
  server: app,
  start: () => {
    app.listen( PORT, () => console.log('SERVER UP'));
  }
};

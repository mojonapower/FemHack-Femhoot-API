require('dotenv').config(); // permite leer los archivos .env
const express = require('express');
const app = express();
const swaggerUI = require('swagger-ui-express');
const swaggerDoc = require('../swagger.json');


//import routes
const publicRoutes = require('./routes/public_routes');
const privateRoutes = require('./routes/private_routes');

const port = process.env.PORT || 8080;


//MIDLEWARES
app.use(express.json()) //disable CORS validations
app.use(express.urlencoded({ extended: true })) // the API will be JSON based for serialization




//publics routes
app.use(publicRoutes);


//private routes
app.use(privateRoutes);

//swagger
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc))

//starting the express server
app.listen(port,()=>{
  console.info(`Server listening on port ${port} 🤘😎`)
})
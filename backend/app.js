const express = require('express');
const app = express();
app.use((req,res,next) =>{
  console.log('first middleware');
  next();
} );
//sending response: It is a middleware.
app.use((req,res,next) =>{
  res.send('Hello from express!');
});

module.exports = app; // export statement

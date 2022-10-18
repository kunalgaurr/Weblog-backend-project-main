const express = require('express');                 //bringing in express
const dotenv = require('dotenv');                   //bringing in dotenv
const logger = require('./middleware/logger');      //connecting custom middleware
const morgan = require('morgan');                   //bringing in middleware package
const connectDB = require('./config/database');     //connecting to mongodb dedicated file
const colors = require('colors');                   //complete;y optional for pretty view

dotenv.config({ path: './config/config.env' });     //connecting to the .env file

connectDB();                                        //calling MongoDB dedicated file

const app = express();                              //calling the application

const blogs = require('./route/route');             //connecting routes

if (process.env.NODE_ENV === 'development') {       //calling the middlewale package when the server is in development mode
  app.use(morgan('dev'));
}

app.use('/blog', blogs);                            //calling the routes file and creating the api

const PORT = process.env.PORT;                      //defining the port

app.listen(                                         //starting the server
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
      .bold
  )
);

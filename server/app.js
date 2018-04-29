const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config/index');

// imported routes
const userRoutes = require('./api/routes/user');
const taskRoutes = require('./api/routes/tasks');

// connect to mongoDB
mongoose.connect(config.database);
let db = mongoose.connection;

// mongoose.Promise = global.Promise; // fix logs in console with message deprecated promise

// Check connection
db.once('open', function(){
    console.log('Connected to MongoDB');
});

// Check for DB errors
db.on('error', function(err){
    console.log(err);
});

app.use(morgan("dev"));
// app.use('/uploads', express.static('uploads')); // it make folder uploads available to public if user type localhost:3000/uploads/img.png into browser it will show the image
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// handling CORS
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({});
    }
    next();
});

// routes - handle requests
app.use('/user', userRoutes);
app.use('/tasks', taskRoutes);

// log errors
app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
           message: error.message
        }
    });
});

module.exports = app;
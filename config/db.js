// do not use it in production
let DB_CONNECTION = "mongodb+srv://dbadmin:Ke4J8prl4NPryvSZ@cluster007.j3srh.mongodb.net/Profile_Data"
//Database Setup // we moved this from app.js to here so that we can see the database setup
let mongoose = require('mongoose');
//let dbURI = require('../config/db');

module.exports = function () {


    // Connect to the DB
    mongoose.connect(DB_CONNECTION);

    //to start the connection
    let mongoDB = mongoose.connection;

    //incase of error i want to console error and create a bind which will show to connection error
    mongoDB.on('error', console.error.bind(console, 'Connection Error: '));
    mongoDB.once('open', () => {
        console.log('Connected to MongoDB...');
    })

    return mongoDB;
}



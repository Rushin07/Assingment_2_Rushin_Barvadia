// Name: Rushin Barvadia
// StudentID: 301227529
//Assingment_2
// Date: 2022-02-17

let mongoose = require('mongoose');

// Create a model class
let contactModel = mongoose.Schema(
    {
        Name: String,
        Pnumber: Number,
        Email: String,
    },
    {
        //bacically table name
        collection: "contact"
    }
);

module.exports = mongoose.model('contact', contactModel);
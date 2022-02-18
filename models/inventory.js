// Name: Rushin Barvadia
// StudentID: 301227529
//Assingment_2
// Date: 2022-02-17

let mongoose = require('mongoose');

// Create a model class
let inventoryModel = mongoose.Schema(
    {
        item: String,
        qty: Number,
        tags: [],
        size: {
            h: Number,
            w: Number,
            uom: String
        },
        status: String
    },
    {
        //bacically table name
        collection: "inventory"
    }
);

module.exports = mongoose.model('inventory', inventoryModel);
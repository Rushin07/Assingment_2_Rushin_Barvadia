// Name: Rushin Barvadia
// StudentID: 301227529
//Assingment_2
// Date: 2022-02-17
let Contact = require('../models/contact');

exports.list = function (req, res, next) {

    Contact.find((err, contactList) => {
        if (err) {
            return console.error(err);
        }
        else {
            res.render(
                'contact/list',
                {
                    title: 'Contact List',
                    ContactList: contactList,
                    // userName: req.user ? req.user.username : ''
                }
            );
        }
    });
}

module.exports.displayAddPage = (req, res, next) => {

    let newItem = Contact();

    res.render('contact/add_edit', {
        title: 'Add a new Item',
        item: newItem,
        // userName: req.user ? req.user.username : ''
    })
}

module.exports.processAddPage = (req, res, next) => {

    let newItem = Contact({
        _id: req.body.id,
        Name: req.body.name,
        "Phone Number": req.body.phonenumber,
        Email: req.body.email,
    });

    Contact.create(newItem, (err, item) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            // refresh the book list
            console.log(item);
            res.redirect('/contact/list');
        }
    });
}


module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    Contact.findById(id, (err, itemToEdit) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            //show the edit view
            res.render('contact/add_edit', {
                title: 'Edit Item',
                item: itemToEdit,
                // userName: req.user ? req.user.username : ''
            })
        }
    });
}


module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id

    let updatedItem = Contact({
        __id: req.body.id,
        Name: req.body.name,
        "Phone Number": req.body.phonenumber,
        Email: req.body.email,
    });

    // console.log(updatedItem);

    Contact.updateOne({ _id: id }, updatedItem, (err) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            // console.log(req.body);
            // refresh the book list
            res.redirect('/contact/list');
        }
    });
}

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    Contact.remove({ _id: id }, (err) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            // refresh the book list
            res.redirect('/contact/list');
        }
    });
}

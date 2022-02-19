// Name: Rushin Barvadia
// StudentID: 301227529
//Assingment_2
// Date: 2022-02-17
let Contact = require('../models/contact');

// function getErrorMessage(err) {
//     console.log("===> Erro: " + err);
//     let message = '';

//     if (err.code) {
//         switch (err.code) {
//             case 11000:
//             case 11001:
//                 message = 'Username already exists';
//                 break;
//             default:
//                 message = 'Something went wrong';
//         }
//     } else {
//         for (var errName in err.errors) {
//             if (err.errors[errName].message) message = err.errors[errName].message;
//         }
//     }

//     return message;
// };



exports.list = function (req, res, next) {

    Contact.find((err, contactList) => {
        if (err) {
            // let message = getErrorMessage(err);

            // req.flash('error', message);
            return console.error(err);
        }
        else {
            res.render(
                'contact/list',
                {
                    title: 'Contact List',
                    ContactList: contactList,
                    // messages: req.flash('error'),
                    userName: req.user ? req.user.username : ''
                }
            );
        }
    });
}

module.exports.displayAddPage = (req, res, next) => {

    let newContacts = Contact();

    res.render('contact/add_edit', {
        title: 'Add a new Contacts',
        // messages: req.flash('error'),
        contacts: newContacts,
        userName: req.user ? req.user.username : ''
    })
}

module.exports.processAddPage = (req, res, next) => {

    let newContacts = Contact({
        _id: req.body.id,
        fname: req.body.fname,
        pnumber: req.body.pnumber,
        email: req.body.email,
    });

    Contact.create(newContacts, (err, contacts) => {
        if (err) {
            // let message = getErrorMessage(err);

            // req.flash('error', message);
            console.log(err);
            res.end(err);
        }
        else {
            // refresh the book list
            console.log(contacts);
            res.redirect('/contact/list');
        }
    });
}


module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    Contact.findById(id, (err, contactsToEdit) => {
        if (err) {
            // let message = getErrorMessage(err);

            // req.flash('error', message);
            console.log(err);
            res.end(err);
        }
        else {
            //show the edit view
            res.render('contact/add_edit', {
                title: 'Edit Contacts',
                // messages: req.flash('error'),
                contacts: contactsToEdit,
                userName: req.user ? req.user.username : ''
            })
        }
    });
}


module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id

    let updatedContacts = Contact({
        _id: req.body.id,
        fname: req.body.fname,
        pnumber: req.body.pnumber,
        email: req.body.email,
    });

    console.log(updatedContacts);

    Contact.updateOne({ _id: id }, updatedContacts, (err) => {
        if (err) {
            // let message = getErrorMessage(err);

            // req.flash('error', message);
            console.log(err);
            res.end(err);
        }
        else {
            console.log(req.body);
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

// Name: Rushin Barvadia
// StudentID: 301227529
//Assingment_2
// Date: 2022-02-17

let express = require('express');
let router = express.Router();
let contactController = require('../controllers/contact');

// helper function for guard purposes
function requireAuth(req, res, next) {
    // check if the user is logged in
    if (!req.isAuthenticated()) {
        req.session.url = req.originalUrl;
        return res.redirect('/users/signin');
    }
    next();
}

router.get('/list', requireAuth, contactController.list);

/* GET Route for displaying the Add page - CREATE Operation */
router.get('/add', requireAuth, contactController.displayAddPage);
/* POST Route for processing the Add page - CREATE Operation */
router.post('/add', requireAuth, contactController.processAddPage);

// Routers for edit
router.get('/edit/:id', requireAuth, contactController.displayEditPage);
router.post('/edit/:id', requireAuth, contactController.processEditPage);

// Delete
router.get('/delete/:id', requireAuth, contactController.performDelete);

module.exports = router;
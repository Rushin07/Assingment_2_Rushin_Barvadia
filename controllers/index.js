// Name: Rushin Barvadia
// StudentID: 301227529
//Assingment_2
// Date: 2022-02-17

exports.home = function (req, res, next) {
    res.render('index',
        {
            title: 'Home Page',
            userName: req.user ? req.user.username : ''
        });
}

exports.projects = function (req, res, next) {
    res.render('projects',
        {
            title: 'Projects',
            userName: req.user ? req.user.username : ''
        });
}

exports.aboutme = function (req, res, next) {
    res.render('aboutme',
        {
            title: 'About Me',
            userName: req.user ? req.user.username : ''
        });
}

exports.contactme = function (req, res, next) {
    res.render('contactme',
        {
            title: 'Contact Me',
            userName: req.user ? req.user.username : ''
        });
}
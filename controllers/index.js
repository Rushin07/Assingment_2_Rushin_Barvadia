exports.home = function (req, res, next) {
    res.render('index', { title: 'Home Page' });
}

exports.projects = function (req, res, next) {
    res.render('projects', { title: 'Projects' });
}

exports.aboutme = function (req, res, next) {
    res.render('aboutme', { title: 'About Me' });
}

exports.contactme = function (req, res, next) {
    res.render('contactme', { title: 'Contact Me' });
}
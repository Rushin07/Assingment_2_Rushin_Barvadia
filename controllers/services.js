exports.services = function (req, res, next) {
    res.render('services', {
        title: 'Services',
        name: 'Student'
    });
}

// exports.rushin = function (req, res, next) {
//     res.render('services', {
//         title: 'Services',
//         name: 'Rushin'
//     });
// }
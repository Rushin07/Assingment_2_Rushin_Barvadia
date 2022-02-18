// Name: Rushin Barvadia
// StudentID: 301227529
//Assingment_2
// Date: 2022-02-17

exports.services = function (req, res, next) {
    res.render('services', {
        title: 'Services',
        name: 'Student',
        userName: req.user ? req.user.username : ''
    });
}

// exports.rushin = function (req, res, next) {
//     res.render('services', {
//         title: 'Services',
//         name: 'Rushin'
//     });
// }
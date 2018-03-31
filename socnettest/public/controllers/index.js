function homepage(req, res) {
    res.render('homepage');
}

function signup(req, res) {
    res.render('signup');
}

module.exports.homepage = homepage;

module.exports.signup = signup;
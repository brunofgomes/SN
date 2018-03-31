let router = require('express').Router();
let controller = require('../controllers');

router.get('/signup', (req,res) => {
    controller.signup(req, res);
});

router.post('/signup', (req,res) => {
    controller.signupProcess(req, res);
});

module.exports = router;

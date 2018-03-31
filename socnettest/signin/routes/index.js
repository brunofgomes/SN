let router = require('express').Router();
let controller = require('../controllers');

router.get('/signin', (req,res) => {
    controller.signin(req, res);
});

router.post('/signin', (req,res) => {
    controller.signinProcess(req, res);
});

module.exports = router;

let router = require('express').Router();
let controller = require('../controllers');


router.get('/', (req,res) => {
    controller.homepage(req, res);
});

router.get('/homepage', (req,res) => {
    controller.homepage(req, res);
});

router.get('/logout', (req, res) => {
    req.session.destroy();
    controller.homepage(req, res);
});


module.exports = router;
let router = require('express').Router();
let controller = require('../controllers');

// router.get('/post', (req,res) => {
//     controller.post(req, res);
// });


// Modification impossible de retourner /profil
router.get('/post', (req,res) => {
    
        if (req.session && req.session.user) {
            controller.post(req, res);
          } else {
            res.redirect('/signin');
          }
       
    });

router.post('/post', (req,res) => {
    controller.postProcess(req, res);
});

module.exports = router;

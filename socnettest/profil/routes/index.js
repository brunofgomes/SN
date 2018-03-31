let router = require('express').Router();
let controller = require('../controllers');

// router.get('/profil', (req,res) => {
//     controller.profil(req, res);
// });


// Modification impossible de retourner /profil
router.get('/profil', (req,res) => {
    
        if (req.session && req.session.user) {
            controller.profil(req, res);
          } else {
            res.redirect('/signin');
          }
        
    });


router.post('/profil', (req,res) => {
    controller.profil(req, res);
});

module.exports = router;

let router = require('express').Router();
let controller = require('../controllers');



// router.get('/friend', (req,res) => {
//     controller.friend(req, res);
// });

// router.get('/friend/:_id', (req,res) => {
//     controller.friendProcess(req, res);
// });

// router.get('/unfriend/:_id', (req,res) => {
//     controller.unfriendProcess(req, res);
// });

// router.get('/friend', (req,res) => {
//     if (req.session && req.session.user) { // Check if session exists
//         // lookup the user in the DB by pulling their email from the session
//         controller.friend(req, res);
//       } else {
//         res.redirect('/signin');
//       }
    
// });


// Modification impossible de retourner /profil
router.get('/friend', (req,res) => {
    if (req.session && req.session.user) { 
        controller.friend(req, res);
      } else {
        res.redirect('/signin');
      }
    
});

router.get('/friend/:_id', (req,res) => {
    if (req.session && req.session.user) {
        controller.friendProcess(req, res);
      } else {
        res.redirect('/signin');
      }
    
});

router.get('/unfriend/:_id', (req,res) => {
    if (req.session && req.session.user) { 
        controller.unfriendProcess(req, res);
      } else {
        res.redirect('/signin');
      }
    
});

module.exports = router;



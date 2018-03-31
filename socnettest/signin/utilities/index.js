function verifUser(req,res){
  let User=require('../../user/models/user');
  let username = req.body.username;
  let password=req.body.password;

  User.findOne({'local.username':username},function(err,user){
    if (err) throw err;
    if (user){
      if(user.comparePassword(password)){
        req.session.user = user;
        res.redirect('/profil');
      } else
          res.send("mauvais mot de pass");
    }
    else
      res.send("L'utilisateur n'existe pas");
  });

}

module.exports.verifUser = verifUser;
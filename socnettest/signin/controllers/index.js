function signin(req,res){res.render('signin');


}


function signin(req, res) {
    res.render('signin');
}

function signinProcess(req, res){
  let process = require('../utilities/index.js');
  process.verifUser(req,res);

}

module.exports.signin = signin;
module.exports.signinProcess = signinProcess;
function post(req, res) {
    console.log(req.session.user)
    res.render('new');
}

function postProcess(req, res){
    let process = require('../../post/utilities/index.js');
    process.addPost(req,res);
    
}

module.exports.post = post;
module.exports.postProcess = postProcess;
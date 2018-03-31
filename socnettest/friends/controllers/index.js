function friend(req, res) {
    
    let process = require('../utilities/index.js');
    process.addFriend(req,res);
    
}

function friendProcess(req, res){
    let process = require('../utilities/index.js');
    process.addFriendBdd(req,res);
    
}

function unfriendProcess(req, res) {
    let process = require("../utilities/index.js");
    process.removeFriendBdd(req, res);
}

module.exports.friend = friend;
module.exports.friendProcess = friendProcess;
module.exports.unfriendProcess = unfriendProcess;
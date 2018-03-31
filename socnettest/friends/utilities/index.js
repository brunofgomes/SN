let mongoose = require('mongoose');

function addFriend(req, res) {
    let User = require('../../user/models/user');
    let Friend = require('../models/friend');
    let userid = mongoose.Types.ObjectId(req.session.user._id);
    let tabFriend = [];
    Friend.find({'user' :userid}, function(err,friend){
        if (err) throw err;
        friend.forEach(function(friendss) {
            tabFriend.push(friendss.friends);
        });
    User.find({$and: [{'_id':{'$ne':userid}}, {'_id':{'$nin':tabFriend}}]},function(err, users){
        if (err) throw err;
        User.find({$and: [{'_id':{'$ne':userid}}, {'_id':{'$in':tabFriend}}]},function(err, unusers){
            if (err) throw err;
            res.render('friend',{users:users, unusers:unusers});
        });
    });
    });
}


function addFriendBdd(req, res) {
    let Friend = require('../models/friend');
    let friend = new Friend();
    friend.user = mongoose.Types.ObjectId(req.session.user._id);
    friend.friends = req.params._id;
    friend.save((err, friend) => {
        if (err) throw err;
        res.redirect('/friend');
    });
}

function removeFriendBdd(req, res) {
    let Friend = require('../models/friend');
    Friend.findOneAndRemove({'friends':req.params._id},function(err,friend){
        if (err) throw err;
        res.redirect('/friend');
    });
}


module.exports.addFriend = addFriend;
module.exports.addFriendBdd = addFriendBdd;
module.exports.removeFriendBdd = removeFriendBdd;
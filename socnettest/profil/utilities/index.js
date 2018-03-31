let mongoose = require('mongoose');

function findPosts(req,res){
    let Post =require('../../post/models/post');
    let id = mongoose.Types.ObjectId(req.session.user._id);

    Post.find({'user': id}).populate("user").exec(function(err,posts){
        if (err) throw err;
        console.log(posts);
        res.render('profil', {nom : req.session.user.local.username, posts:posts});
        
    });
}
  
module.exports.findPosts = findPosts;
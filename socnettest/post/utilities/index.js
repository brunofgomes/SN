function addPost(req, res) {
    let Post = require('../models/post');
    let post = new Post();
    post.user = req.session.user._id;
    post.title = req.body.title;
    post.description = req.body.description;

    post.save((err, post) => {
        if (err) throw err;
        res.redirect('/profil');
    })
}

module.exports.addPost = addPost;
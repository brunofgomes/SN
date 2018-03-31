let mongoose = require('mongoose');
let Schema = mongoose.Schema;


let FriendSchema = new Schema({
    user: {
        type : Schema.Types.ObjectId, ref: 'User'
    },
    friends: {
        type : Schema.Types.ObjectId, ref: 'User'
    }
});




module.exports = mongoose.model('Friend', FriendSchema);
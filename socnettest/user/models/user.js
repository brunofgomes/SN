let mongoose = require('mongoose');
let bcrypt   = require('bcrypt-nodejs');


let Schema = mongoose.Schema;

let UserSchema = new Schema({

	local : {
    firstName: String,
    lastName : String,
    email : {
      type : String,
      index : true,
      unique : true,
      lowercase : true
    },
    password : String,
		username : {
			type : String,
			index : true,
			unique : true
    },
    
    
    createdAt : {
      type : Date,
      default : Date.now
    },
		confirmed : {
			type : Boolean,
			default : false
		},
    lastConnection : {
      type : Date,
      default : Date.now
    }
  }
});




UserSchema.pre('save', function(next)  {
  let user = this;
  if (!user.isModified('local.password'))
  	return next();
  bcrypt.genSalt(10, (err, salt) => {
    if (err)
    	return next(err);
    bcrypt.hash(user.local.password, salt, null, (err, hash) => {
      if (err)
      	return next(err);
      user.local.password = hash;
      next();
    });
  });
})




UserSchema.methods.comparePassword = function(password) {
  return bcrypt.compareSync(password, this.local.password);
}

module.exports = mongoose.model('User', UserSchema);
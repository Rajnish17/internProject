const mongoose = require('mongoose');
const User = mongoose.Schema;

const UserSchema = new User({
    name: { type: String},
    email: { type: String},
    phone: { type:Number},
    gender:{type:String},
    qualification:{type:String},
    skill:{type:String},
    desc:{type:String}

  }, {
    timestamps: true,
  });
  
  module.exports =mongoose.model('User', UserSchema);
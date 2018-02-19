var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var User2Schema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  name: {
    type: String,
    // unique: true,
    required: true,
    trim: true
  },
  mobile:{
      type: String,
      required: true
  },
  college:{
      type: String,
      required:true
  },
  github:{
      type:String,
      required:true
  
  }

});

var User2 = mongoose.model('UIUX', User2Schema);
module.exports = User2;


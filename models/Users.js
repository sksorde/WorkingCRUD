var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({

    firstName: { type: String, Required: 'First name cannot be left blank.' },

    lastName: { type: String, Required: 'Last name cannot be left blank.' },

    eMail: { type: String}

});

var Users = mongoose.model('Users', userSchema, 'Users');

module.exports = Users;
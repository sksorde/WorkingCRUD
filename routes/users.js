var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({

    firstName: { type: String, Required: 'First name cannot be left blank.' },

    lastName: { type: String, Required: 'Last name cannot be left blank.' },

});

module.exports = mongoose.model('dbUsers', userSchema);
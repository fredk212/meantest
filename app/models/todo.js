var mongoose = require('mongoose');
var moment = require('moment');

module.exports = mongoose.model('Todo', {
	text : {type : String, default: ''},
	date : {type: String, default: moment()}

});
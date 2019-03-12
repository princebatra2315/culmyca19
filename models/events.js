var mongoose = require('mongoose');

mongoose.connect('mongodb://namansachdeva:namansachdeva12@ds159204.mlab.com:59204/culmyca19',{ useNewUrlParser: true });

var db = mongoose.connect

var EventSchema = mongoose.Schema({

	fees: Number,
    date: String,
	starttime: String,
	endtime: String,
	coordinator: [{name: String,phone: Number}],
	prizes: {
        prize1: String,
        prize2: String,
        prize3: String
    },
    eventtype: String,
    title: String,
    clubname: String,
    category: String,
    description: String,
    rule : String,
    teamSize : String,
    venue: String,
    photolink: String,
    tags : [String],
    hitCount : Number,
    winner: {
        winner1: String,
        winner2: String,
        winner3: String
    }
});
var Event = module.exports = mongoose.model('Event',EventSchema);
module.exports.createEvent = function(newEvent,callback){
	newEvent.save(callback);
}
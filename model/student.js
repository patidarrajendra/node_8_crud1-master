var con = require('../config/connect');

module.exports.find=function(cb){
	con.init(function(err, client){
		var db = client.db('tss_8');
		//db.query("SELELCtg").toArray)()
		db.collection('student').find().toArray(cb);
	});
}

module.exports.insert=function(obj, cb){
	con.init(function(err, client){
		var db = client.db('tss_8');
		db.collection('student').insert(obj, cb);
	});
}
module.exports.delete=function(obj, cb){
	con.init(function(err, client){
		var db = client.db('tss_8');
		db.collection('student').remove(obj, cb);
	});
}
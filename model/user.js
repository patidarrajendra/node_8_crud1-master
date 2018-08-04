var con = require('../config/connect');

module.exports.find=function(where, cb){
	con.init(function(err, client){
		var db = client.db('tss_8');
		db.collection('user').find(where).toArray(cb);
	});
}


module.exports.update=function(where, obj, cb){
	con.init(function(err, client){
		var db = client.db('tss_8');
		// db.collection('user').update(where, obj, cb);
		db.collection('user').update(where, {$set : obj}, cb);
	});
}
module.exports.remove=function(where,cb){
	con.init(function(err, client){
		var db = client.db('tss_8');
		// db.collection('user').update(where, obj, cb);
		db.collection('user').remove(where, cb);
	});
}



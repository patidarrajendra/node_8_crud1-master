var con = require('../config/connect');

module.exports.find=function(cb){
	con.init(function(err, client){
		var db = client.db('tss_8');
		//db.query("SELELCtg").toArray)()
		db.collection('product').find().toArray(cb);
	});
}

module.exports.findWhere=function(where,cb){
	con.init(function(err, client){
		var db = client.db('tss_8');
		//db.query("SELELCtg").toArray)()
		db.collection('product').find(where).toArray(cb);
	});
}



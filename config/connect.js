var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";
module.exports.init=function(cb){
	MongoClient.connect(url, cb);
}

/*
MongoClient.connect(url, function(err, client){
	var db = client.db('demo');
	db.collection.....
});
*/
/*
var url = "mongodb://localhost:27017/demo";
MongoClient.connect(url, function(err, db){
	db.collection.....
});

*/
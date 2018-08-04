var express = require('express');
var router = express.Router();
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";


router.get("/", function(req, res){
	MongoClient.connect(url, function(err, client){
		var db = client.db('tss_8');
		db.collection('user').find().toArray(function(err, result){
			var pagedata = { title : "Home", pagename : "show/index", data : result };
			res.render("layout", pagedata);

		});
	});
	

	
});


module.exports=router;
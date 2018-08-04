var express = require('express');
var router = express.Router();
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";








router.get("/", function(req, res){
	// console.log(req.cookies);
	var pagedata = { title : "Home", pagename : "home/index"};
	res.render("layout", pagedata);
});
router.post("/", function(req, res){
	console.log(req.body);
	MongoClient.connect(url, function(err, client){
	if(err){
		console.log("connection error", err);
		return;
	}
	var db = client.db("tss_8");
	db.collection("student").insert(req.body, function(err, result){
			console.log(result);
			res.redirect("/");
		});
	});

});

module.exports=router;
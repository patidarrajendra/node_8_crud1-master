var express = require('express');
var router = express.Router();
var user = require("../model/user");
var mongo = require('mongodb');

router.get("/", function(req, res){
	//res.send("<h1>This is user panel</h1>");
	var id = req.session.uid;
	user.find({ _id : mongo.ObjectId(id)}, function(err, result){
		console.log(result);
		var pagedata = { title : "User", pagename : "user/index", data : result[0]};
		res.render("layout", pagedata);
	});
	
});


router.get("/update", function(req, res){
	var id = req.session.uid;
	user.find({ _id : mongo.ObjectId(id)}, function(err, result){
		console.log(result);
		var pagedata = { title : "User", pagename : "user/update", data : result[0]};
		res.render("layout", pagedata);
	});
});

router.post('/update', function(req, res){
	// console.log(req.body);
	var id = req.session.uid;
	// user.update({ _id : mongo.ObjectId(id)}, { $set : req.body }, function(err, result){
	user.update({ _id : mongo.ObjectId(id)}, req.body, function(err, result){
		console.log(result);
		res.redirect('/user');
	});
});


router.get("/delete/:id", function(req, res){
	// console.log(req.query);
	console.log(req.params);
	user.remove({ _id : mongo.ObjectId(req.params.id)}, function(err, result){
		console.log(result);
		res.redirect("/show");
	});
});

router.get("/edit/:id", function(req, res){
	console.log(req.params);
	var id = req.params.id;
	user.find({ _id : mongo.ObjectId(id)}, function(err, result){
		console.log(result);
		var pagedata = { title : "User", pagename : "user/edit", data : result[0]};
		res.render("layout", pagedata);
	});
});

router.post("/edit", function(req, res){
	// console.log(req.body);
	var id = req.body.id;
	delete req.body.id;
	// console.log(req.body);

	user.update({ _id : mongo.ObjectId(id)}, req.body, function(err, result){
		console.log(result);
		res.redirect('/show');
	});
});
module.exports=router;
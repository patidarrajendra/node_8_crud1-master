var express = require('express');
var router = express.Router();
var student = require("../model/student");
var Mongo = require('mongodb');

router.get("/", function(req, res){
	student.find(function(err, result){
		console.log(result);
	});

	
});
router.post("/", function(req, res){
	student.insert(req.body, function(err, result){

	});
});

router.get('/:id', function(req, res){
	if(Mongo.ObjectId.isValid(req.params.id))
	{	
		var where = { _id : Mongo.ObjectId(req.params.id)};
		student.delete(where, function(err, result){
			if(err){
				console.log('error-------', err);
				return;
			}
			console.log(result);
			res.send("deleted");		
		});
	}
	else
	{
		console.log("not found");
		res.send("Wrong String");
	}
	
	// console.log(where);
	// console.log(req.params);
});

module.exports=router;

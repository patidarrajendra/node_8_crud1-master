var express = require('express');
var router = express.Router();
var product = require('../model/product');


router.get("/", function(req, res){
	product.find(function(err, result){
		var pagedata = { title : "Prodict", pagename : "product/index", proData : result};
		res.render("layout", pagedata);
	});
	
});


module.exports=router;
var express = require('express');
var router = express.Router();
var product = require("../model/product");
var mongo = require("mongodb");
router.get("/addtocart/:id", function(req, res){
	var id = req.params.id;
	if(req.cookies.pid)
	{
		var oldid = req.cookies.pid;
		var newid = oldid+"#"+id;
		res.cookie("pid", newid, { expires : new Date(Date.now() + 900000), httpOnly : true});

	}
	else
	{
		res.cookie("pid", id, { expires : new Date(Date.now() + 900000), httpOnly : true});
	}
	
	res.redirect("/");
});

router.get('/clearcart', function(req, res){
	res.clearCookie("pid");
	res.redirect("/");
});

router.get('/mycart', function(req, res){
	var idstr = req.cookies.pid;
	var arr = idstr.split("#");
	var data = [];
	var length = arr.length;
	length--;
	arr.forEach(function(x, i){
		product.findWhere({ _id : mongo.ObjectId(x)}, function(err, result){
			data.push(result[0]);
			if(length==i)
			{
				console.log(data);
				var pagedata = { title : "My Cart", pagename : "product/mycart", data : data};
				res.render("layout", pagedata);
			}
		});
	});

	
	
});


module.exports=router;
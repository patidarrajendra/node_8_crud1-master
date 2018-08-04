var express = require('express');
var router = express.Router();
var user = require('../model/user');


router.get("/", function(req, res){
	var pagedata = { title : "Login", pagename : "login/index", message : req.flash('msg')};
	res.render("layout", pagedata);
});

router.post("/", function(req, res){
	// console.log(req.body);
	user.find({username : req.body.username}, function(err, result){
		if(err){
			console.log("find error", err);
			return;
		}
		// console.log(result);
		if(result.length == 0)
		{
			// console.log("usernamd and password incorect");
			req.flash("msg", "Username and Password Incorrect");
			res.redirect("/login");
		}
		else
		{
			// console.log(result);
			var data = result[0];
			if(data.password == req.body.password)
			{
				// console.log(data);
				req.session.uid = data._id;
				req.session.full_name = data.full_name;
				req.session.is_user_logged_in = true;
				res.redirect("/user");
			}
			else
			{
				// console.log(" password incorect");
				req.flash("msg", "Password Incorrect");
				res.redirect("/login");
			}
		}

	});
});
module.exports=router;
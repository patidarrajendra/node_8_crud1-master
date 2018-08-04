var express = require('express');
var router = express.Router();

router.get("/", function(req, res){
	res.render("admin/layout", { title : "Admin", pagename : "dash" });
});


module.exports=router;
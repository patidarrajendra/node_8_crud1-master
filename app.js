var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var cookieParser = require('cookie-parser');
var session = require('express-session');
var flash = require('express-flash');
var cache = require('nocache');

app.set("view engine", "ejs");
app.set("views", ["views", 'admin_view']);

app.use(express.static(__dirname+"/public"));
app.use(bodyParser());
app.use(cookieParser());
app.use(session({ secret : "TSS"}));
app.use(flash());

app.use(function(req, res, next){
	res.locals.session=req.session;
	res.locals.logo = "TSS";
	var total = 0;
	if(req.cookies.pid)
	{
		var pidstr = req.cookies.pid;
		var arr = pidstr.split("#");
		total = arr.length;
	}
	res.locals.total = total;
	next();
});
app.use(cache());
app.use(require("./config/routes"));

app.get("*", function(req, res){
	res.send("<h1>Page Not Found</h1>");
});



app.listen(process.env.PORT || 3000, function(){
	console.log(process.env.PORT);
	console.log("Running");
});
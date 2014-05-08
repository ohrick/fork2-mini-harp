var connect = require('connect');

module.exports = function(){
	var app = connect();
	app.use(function(req, res, next){
		if(req.url == '/current-time'){
			res.end(new Date().toISOString());
		}
		else{
			next();
		}
	})
	app.use(function(req, res){
		res.end("Cannot Get " + req.url);
	});
	return app;
}
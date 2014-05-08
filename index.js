var connect = require('connect');

var serveStatic = require('serve-static');

module.exports = function(root){
	var app = connect();

	app.use(serveStatic(root));

	return app;
}
var connect = require('connect'),
	staticServer = require('serve-static'),
    directory = '../web/';

connect()
    .use(staticServer(directory))
    .listen(80);
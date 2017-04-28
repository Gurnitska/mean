var http = require('http'),
    db = require('./src/backend/db'),
    app = require('./src/backend')(db);

http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});